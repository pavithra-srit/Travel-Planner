import { NgFor } from '@angular/common';
import { Component, Output, EventEmitter , Input, OnChanges, SimpleChanges, Injectable } from '@angular/core';
import {  FormGroup, FormsModule, NgForm } from '@angular/forms';
import { NgbDateStruct, NgbModule, NgbDatepickerModule , NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { PlanComponent } from '../plan/plan.component';





@Component({
  selector: 'app-add-plan-details',
  standalone: true,
  imports: [FormsModule,NgFor,NgbModule,NgbDatepickerModule, PlanComponent],
  templateUrl: './add-plan-details.component.html',
  styleUrl: './add-plan-details.component.scss'
})
export class AddPlanDetailsComponent  implements  OnChanges{
  
  // planDetail = new FormGroup({});
@Output()  newItemEvent = new EventEmitter<string[]>();
@Input() addFlagValue : boolean = false






  selectedPlaceName =""
  vaccationType = null
  selectedTrip = null
  selectedBestTime = null
  selectedTransport = null
  selectedNumDuration = ""
  selectedDuration = null
  attractionNote = ""
  notes =""

  tripTypes = [
    {label:"Friends",value:1},
    {label:"Family",value:2},
    {label:"Solo",value:3},
    {label:"Family & Friends",value:4}]
  btArr = [
    {label:"Spring",value:1},
    {label:"Summer",value:2},
    {label:"Winter",value:3}]
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
    valuestoAddPlan :any[] =[]


    // Datepicker
    selectedStartDate :any;
    selectedEndDate : any  
    maxEndDate :any
    minEndDate :any
    minStartDate :any
    maxStartDate:any

    
  constructor( ) {
  }


      ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges ------ ",this.addFlagValue)
        let obj={
          "place" : this.selectedPlaceName,
          "vaccationType" : this.selectedTrip,
          "besttime" : this.selectedBestTime,
          "modeofTransport" : this.selectedTransport,
          "duration" : this.selectedNumDuration + " " + this.selectedDuration,
          "startdate" : this.selectedStartDate,
          "enddate" : this.selectedEndDate, 
          "attraction" : this.attractionNote,
          "note" : this.notes
        }
        if(this.addFlagValue){
          this.valuestoAddPlan.push(obj)
          this.newItemEvent.emit(this.valuestoAddPlan);
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
