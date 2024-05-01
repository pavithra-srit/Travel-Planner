import { NgFor } from '@angular/common';
import { Component, Output, EventEmitter  } from '@angular/core';
import {  FormGroup, FormsModule, NgForm } from '@angular/forms';
import { NgbDateStruct, NgbModule, NgbDatepickerModule  } from '@ng-bootstrap/ng-bootstrap';
import { PlanComponent } from '../plan/plan.component';





@Component({
  selector: 'app-add-plan-details',
  standalone: true,
  imports: [FormsModule,NgFor,NgbModule,NgbDatepickerModule, PlanComponent],
  templateUrl: './add-plan-details.component.html',
  styleUrl: './add-plan-details.component.scss'
})
export class AddPlanDetailsComponent {

// planDetail = new FormGroup({});
@Output()  newItemEvent = new EventEmitter<string>();

  selectedPlaceName =""
  vaccationType = null
  selectedTrip = "Select"
  selectedBestTime = "Select"
  selectedTransport = "Select"
  selectedNumDuration = ""
  selectedDuration = "Select"
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


    // Datepicker
    selectedStartDate :any;
    selectedEndDate :any;


    valuestoAddPlan =[]

    placeNameEvent(value:any){
      console.log("PLACE",value)
      this.selectedPlaceName =value
          this.newItemEvent.emit(this.selectedPlaceName);
    }
    tripChangeEvent(value:any){
      console.log("trip",  value)

      this.selectedTrip = value
          this.newItemEvent.emit(this.selectedPlaceName);
    }
    bestTimeChangeEvent(value:any){
      this.selectedBestTime = value
          this.newItemEvent.emit(this.selectedPlaceName);
    }
    transportChangeEvent(value:any){
      this.selectedTransport = value
          this.newItemEvent.emit(this.selectedPlaceName);
    }
    durationChangeEvent(value:any){
      this.selectedNumDuration = value
          this.newItemEvent.emit(this.selectedPlaceName);
    }
    timeChangeEvent(value:any){
      this.selectedDuration = value
          this.newItemEvent.emit(this.selectedPlaceName);
    } 
    startDateChangeEvent(value:any){
      this.selectedStartDate = value
          this.newItemEvent.emit(this.selectedPlaceName);
    }
    endDateChangeEvent(value:any){
      this.selectedEndDate = value
          this.newItemEvent.emit(this.selectedPlaceName);
    }
    attractionChangeEvent(value:any){
      this.attractionNote = value
          this.newItemEvent.emit(this.selectedPlaceName);
    }
    noteChangeEvent(value:any){
      this.notes = value
          this.newItemEvent.emit(this.selectedPlaceName);
    }
}
