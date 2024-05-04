import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Output, EventEmitter , Input, OnChanges, SimpleChanges, Injectable } from '@angular/core';
import {  FormGroup, FormsModule, NgForm } from '@angular/forms';
import { NgbDateStruct, NgbModule, NgbDatepickerModule , NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { PlanComponent } from '../plan/plan.component';


@Component({
  selector: 'app-view-plan-detail',
  standalone: true,
  imports: [FormsModule,NgFor,NgbModule,NgbDatepickerModule, PlanComponent],
  templateUrl: './view-plan-detail.component.html',
  styleUrl: './view-plan-detail.component.scss'
})
export class ViewPlanDetailComponent  implements OnInit{


  selectedPlaceName =""
  vaccationType = ''
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

ngOnInit(): void {
  

  this.selectedPlaceName ="Switzerland"
  this.selectedTrip = 'Friends'
  this.selectedBestTime = 'Spring'
  this.selectedTransport = 'Car'
  this.selectedNumDuration = "15"
  this.selectedDuration = "Day"
  this.attractionNote = 'Rhine Falls, Chapel Bridge'
  this.notes ="Take Sweater"
  this.selectedEndDate = {"day": 25,  "month": 3,"year": 2025,}
  this.selectedStartDate =  {"day": 10,  "month": 3,"year": 2025,}
}
  
}
