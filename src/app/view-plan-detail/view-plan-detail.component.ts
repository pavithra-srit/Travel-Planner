import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Output, EventEmitter , Input, OnChanges, SimpleChanges, Injectable } from '@angular/core';
import {  FormGroup, FormsModule, NgForm } from '@angular/forms';
import { NgbDateStruct, NgbModule, NgbDatepickerModule , NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { PlanComponent } from '../plan/plan.component';
import { AppService} from '../app.service';

@Component({
  selector: 'app-view-plan-detail',
  standalone: true,
  imports: [FormsModule,NgFor,NgbModule,NgbDatepickerModule, PlanComponent],
  templateUrl: './view-plan-detail.component.html',
  styleUrl: './view-plan-detail.component.scss'
})
export class ViewPlanDetailComponent  implements OnInit{

  @Input() selectedRow :any[]

  selectedPlaceName =""
  vacationType = ''
  selectedTrip = ''
  selectedBestTime = ''
  selectedTransport = ''
  selectedNumDuration = ''
  selectedDuration = ''
  attractionNote = ""
  notes =""
  selectedEndDate :any ={}
  selectedStartDate:any ={}


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
    valuestoAddPlan :any[] =[]

     
  constructor( private service:AppService){}

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
  
}



