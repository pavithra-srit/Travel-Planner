import { Component ,OnInit, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';
import { NgFor } from '@angular/common';
import {  FormGroup, FormsModule, NgForm } from '@angular/forms';
import { NgbDateStruct, NgbModule, NgbDatepickerModule , NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { PlanComponent } from '../plan/plan.component';
import { AppService} from '../app.service';


@Component({
  selector: 'app-edit-plan-details',
  standalone: true,
  imports: [FormsModule,NgFor,NgbModule,NgbDatepickerModule, PlanComponent],
  templateUrl: './edit-plan-details.component.html',
  styleUrl: './edit-plan-details.component.scss'
})
export class EditPlanDetailsComponent  implements OnInit{

  @Input() selectedRow :any[]
  @Output()  updateItemEvent = new EventEmitter<string[]>();
  @Input() editFlagValue : boolean = false
  @Input() resetFlag : boolean = false

  selectedPlaceName =""
  vacationType = null
  selectedTrip = null
  selectedBestTime = null
  selectedTransport = null
  selectedNumDuration = ""
  selectedDuration = null
  attractionNote = ""
  notes =""
  selectedEndDate :any ={}
  selectedStartDate:any ={}
  maxEndDate :NgbDateStruct;
  minEndDate : NgbDateStruct;
  minStartDate : NgbDateStruct; 
  maxStartDate:NgbDateStruct

  tripTypes = [
    {label:"Friends",value:1},
    {label:"Family",value:2},
    {label:"Solo",value:3},
    {label:"Family & Friends",value:4}]
  btArr = [
    {label:"Spring",value:1},
    {label:"Summer",value:2},
    {label:"Winter",value:3},
    {label:"Fall",value:4}]
  transportArr = [
    {label:"Flight",value:1},
    {label:"Car",value:2},
    {label:"Bike",value:3},
    {label:"cruise",value:4},
    {label:"Bus",value:5}, 
    {label:"Train",value:6}]
    durationArr =[
    {label:"Day",value:1},
    {label:"Week",value:2},
    {label:"Month",value:3},
    {label:"Year",value:4}]
    valuestoUpdatePlan :any[] =[]

    constructor( private service:AppService){
      const current = new Date();
      this.minStartDate = {
        year: current.getFullYear(),
        month: current.getMonth() + 1,
        day: current.getDate()
      };
    }

    ngOnInit(): void {
  
      this.service.getPlanDetail().subscribe(res=>{
  
        this.selectedRow.forEach((element) => {
          for (const val of res) {
            if(val.id === element.id){
  
              let durationVal = val.duration.split(" ")
              let StartDateFormat =  new Date(val.startdate)
              let endDateFormat =  new Date(val.enddate)
  
          this.selectedPlaceName = val.place
          this.selectedTrip = val.vacationType
          this.selectedBestTime = val.besttime
          this.selectedTransport = val.modeofTransport
          this.selectedNumDuration = durationVal[0]
          this.selectedDuration = durationVal[1]
          this.selectedStartDate = {
            year: StartDateFormat.getFullYear(),
            month: StartDateFormat.getMonth() + 1,
            day: StartDateFormat.getDate()
          }
          this.selectedEndDate = {
            year: endDateFormat.getFullYear(),
            month: endDateFormat.getMonth() + 1,
            day: endDateFormat.getDate()
          };
          this.attractionNote = val.attraction
          this.notes =val.note
  
        }
        }
      
        })
      })
    }

    ngOnChanges(changes: SimpleChanges): void {
      let UpdateData={
        "place" : this.selectedPlaceName,
        "vacationType" : this.selectedTrip,
        "besttime" : this.selectedBestTime,
        "modeofTransport" : this.selectedTransport,
        "duration" : this.selectedNumDuration + " " + this.selectedDuration,
        "startdate" : this.selectedStartDate,
        "enddate" : this.selectedEndDate, 
        "attraction" : this.attractionNote,
        "note" : this.notes
      }
      if(this.editFlagValue){
        this.valuestoUpdatePlan.push(UpdateData)
        this.updateItemEvent.emit(this.valuestoUpdatePlan);
      }
      if(this.resetFlag){
        this.selectedPlaceName =""
        this.selectedTrip = null
        this.selectedBestTime = null
        this.selectedTransport = null
        this.selectedNumDuration = ""
        this.selectedDuration = null
        this.selectedStartDate = null
        this.selectedEndDate = null
        this.attractionNote = ""
        this.notes =""
      }
    }

    placeNameEvent(value:any){
      this.selectedPlaceName =value
    }
    tripChangeEvent(value:any){
      this.selectedTrip = value
        }
    bestTimeChangeEvent(value:any){
      this.selectedBestTime = value
        }
    transportChangeEvent(value:any){
      this.selectedTransport = value
        }
    durationChangeEvent(value:any){
      this.selectedNumDuration = value
        }
    timeChangeEvent(value:any){
      this.selectedDuration = value
        } 
    startDateChangeEvent(value:Date){   
      this.selectedStartDate = value;
      
      this.minEndDate = {
        year: this.selectedStartDate.year,
        month: this.selectedStartDate.month,
        day: this.selectedStartDate.day
      };
      }

    endDateChangeEvent(date :Date){
      this.selectedEndDate = date;
        }
    attractionChangeEvent(value:any){
      this.attractionNote = value
        }
    noteChangeEvent(value:any){
      this.notes = value
    }

}
