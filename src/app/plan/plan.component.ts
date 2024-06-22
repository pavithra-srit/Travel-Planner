import { Component, Input,OnInit,viewChild } from '@angular/core';
import { NgxDatatableModule , ColumnMode, SelectionType} from '@swimlane/ngx-datatable';
import { AddPlanDetailsComponent } from '../add-plan-details/add-plan-details.component';
import { NgIf, NgStyle } from '@angular/common';
import { ViewPlanDetailComponent } from '../view-plan-detail/view-plan-detail.component';
import { AppService} from '../app.service';
import moment from 'moment';
import { EditPlanDetailsComponent } from '../edit-plan-details/edit-plan-details.component';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [NgxDatatableModule,AddPlanDetailsComponent, NgIf, NgStyle,
    ViewPlanDetailComponent, EditPlanDetailsComponent
  ],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss'
})
export class PlanComponent implements OnInit {

  addFlagValue : any
  startDateFormat:any
  endDateFormat:any
  editFlagValue = false
  resetFlag = false
  ColumnMode = ColumnMode 
  loadingIndicator !:boolean
  selected = [];
  SelectionType = SelectionType;
  generateRandNum : number
  responseMsg =""
  responseErrMsg =""
  planTitle ="Travel Plan"
  columns = [{prop:"checkbox", name:"",   sortable: false,
            canAutoResize: false, draggable: false,
            resizable: false,headerCheckboxable: true,
            checkboxable: true, width: 30},
            {prop:"id", name:"ID"},
            {prop:"place", name:"Place to vist"},
            {prop:"vacationType", name:"Vacation Type"},
            {prop:"besttime", name:"Best Time"},
            {prop:"modeofTransport", name:"Mode of Transport"},
            {prop:"duration", name:"Duration"},
            {prop:"startdate", name:"Start Date"},
            {prop:"enddate", name:"End Date"},
            {prop:"attraction", name:"Attraction"},
            {prop:"note",name:"Note"}

  ]
  rows=[]
  // rows=[
  //   {
  //     checkbox:"",id:1,place:"India",vacationType:"Famiy",besttime:"Winter",modeofTransport:"flight",
  //     duration:"1 Month",startdate:"03-11-2024", enddate:"10-12-2024",
  //     attraction:"Taj Mahal, Marina Beach", note:"SunScreen"},
  //   {
  //     checkbox:"",id:2,place:"Switzerland",vacationType:"Friends",besttime:"Spring",modeofTransport:"Car",
  //     duration:"15 Days",startdate:"10-03-2025", enddate:"25-03-2025",
  //     attraction:"Rhine Falls, Chapel Bridge", note :"Take Sweater"
  //   },
  //   {
  //     checkbox:"",id:3,place:"Thailand",vacationType:"Solo",besttime:"Summer",modeofTransport:"cruise",
  //     duration:"1 week",startdate:"15-06-2024", enddate:"21-06-2024",
  //     attraction:"The Grand Palace", note:"-"
  //   },
  //   {
  //     checkbox:"",id:4,place:"USA",vacationType:"Friends and Family",besttime:"Winter",modeofTransport:"bike",
  //     duration:"1 Month",startdate:"07-08-2024", enddate:"10-09-2024",
  //     attraction:"Niagara Falls", note:"note"
  //   },
  // ]
  ModalHeading =""
  enableAdd = false
  selectRowLength :Number
  selectedRows : any[] = [];
  enableViewBtn = false
  enableDeleteBtn = false
  enableEditBtn = false
  deleteModal = false
  deleteRowsId :any
  alertCond = false
  alertErrCond = false
  enableSaveBtn = false
  enableView = false
  
  constructor( private service:AppService){

  }
  
  ngOnInit(): void {
    this.viewPlans()
  }

  viewPlans(){
    this.service.getPlanDetail().subscribe(res=>{
      console.log("resss", res)
      this.rows = res
    })
  }
  onSelect(row:any) {

    if(row.selected.length > 0){
    this.selectedRows = row.selected
    }

    if( this.selectedRows.length == 1){
      this.enableViewBtn = true
      this.enableDeleteBtn = true
      this.enableEditBtn = true
    }
    else{
      this.enableViewBtn = false
      this.enableEditBtn = false
    }
    if(row.selected.length == 0){
      this.enableViewBtn = false
      this.enableDeleteBtn = false
      this.enableEditBtn = false

    }
  }
  rowIdentity = (row: any) => {
    return row.id;
    }
    openAddModal() {
      const mymodal = document.getElementById('myModal');
      if(mymodal != null)
      mymodal.style.display = 'block';
      this.enableAdd = true
      this.enableSaveBtn = false
      this.enableView = false
      this.ModalHeading = "Add Plan"
    }
    openViewModal() {
      const mymodal = document.getElementById('myModal');
      if(mymodal != null)
      mymodal.style.display = 'block';
      this.enableView = true
      this.enableSaveBtn = false
      this.enableAdd = false
    this.ModalHeading = "View Plan"
    }
    openEditModal(){
      const myModal = document.getElementById('myModal');
      if(myModal != null)
        myModal.style.display = 'block';
      this.enableAdd = false
      this.enableSaveBtn = true
      this.enableView = false
    this.ModalHeading = "Edit Plan"
    }
    closeModal() {
      const mymodal = document.getElementById("myModal");
      if(mymodal!= null)
      mymodal.style.display = "none";
    }
   
    GetChildData(createValue:any){
      // randomIntFromInterval(min, max) { // min and max included 
      //   return Math.floor(Math.random() * (max - min + 1) + min);
      // }

      this.generateRandNum = Math.floor(Math.random() * 1000);
      for (const val of createValue) {

        if(val.startdate !== null){
         this.startDateFormat =  moment(val.startdate).month(moment(val.startdate).month()-1).format("YYYY-MM-DD")
        }
        if(val.enddate !== null){
          this.endDateFormat =  moment(val.enddate).month(moment(val.enddate).month()-1).format("YYYY-MM-DD")
         }

      const obj={
        id : this.generateRandNum,
        place : val.place  ?? '-' ,
        vacationType : val.vacationType ??'-',
        besttime : val.besttime ??'-',
        modeofTransport : val.modeofTransport ??'-',
        duration : val.duration ?? '-',
        startdate : this.startDateFormat   ??'-',
        enddate :  this.endDateFormat ??'-',
        attraction : val.attraction ??'-',
        note : val.note ??'-'
      }
    
      this.service.createPlanDetail(obj).subscribe(res=>{
        if(res.status == 200){
            this.alertCond = true
            this.responseMsg = res.msg      
      }
        else  {
          this.alertErrCond = true
          this.responseErrMsg = res.msg
        }
        
          this.viewPlans()
          setTimeout(() => {
            this.alertCond = false
          }, 3000);
      })

    }

    }

    GetEditData(saveData:any){
      for (const val of saveData) {
        
        let updateID = this.selectedRows.map(val => val.id)

        const obj={
          id : updateID[0],
          place : val.place  ?? '-' ,
          vacationType : val.vacationType ??'-',
          besttime : val.besttime ??'-',
          modeofTransport : val.modeofTransport ??'-',
          duration : val.duration ?? '-',
          startdate :  moment(val.startdate).month(moment(val.startdate).month()-1).format("YYYY-MM-DD") ??'-',
          enddate :  moment(val.enddate).month(moment(val.enddate).month()-1).format("YYYY-MM-DD") ??'-',
          attraction : val.attraction ??'-',
          note : val.note ??'-'
        }
        console.log('const obj', obj)

        this.service.updatePlanDetail(obj).subscribe(res=>{
          if(res.status == 200){
              this.alertCond = true
              this.responseMsg = res.msg      
        }
          else  {
            this.alertErrCond = true
            this.responseErrMsg = res.msg
          }
          
            this.viewPlans()
            setTimeout(() => {
              this.alertCond = false
            }, 3000);
        })
  
      }

    }
    AddPlanModal(...args: any[]){
      this.addFlagValue = true
      console.log("AddFlag add btn",this.addFlagValue)

      this.closeModal()
      this.resetFlag = true
    }

    SavePlan(){
      this.editFlagValue = true
      this.closeModal()
    }

    deletePlan(){
      this.deleteModal = true
     
      this.deleteRowsId = this.selectedRows.map( (delRow) => delRow.id );
     
      const obj ={
        "id" : this.deleteRowsId
      }

       this.service.deletePlanDetail(obj).subscribe(res=>{
        if(res.status == 200){
            this.responseMsg = res.msg
            this.alertCond = true        
          this.viewPlans()
        }
          else{
              this.alertErrCond = true
              this.responseErrMsg = res.msg
        }

        })
      this.closeDeleteModal()
      setTimeout(() => {
        this.alertCond = false
      }, 3000);
        this.enableViewBtn = false
        this.enableDeleteBtn = false
        this.enableEditBtn = false
        this.selected =[]
        console.log("del rows", this.selected)
    }
  
     
  openDeleteModal(){
 
    const modalDiv = document.getElementById('deleteModal');
    if(modalDiv != null){
          modalDiv.style.display = 'block'
    }
  }

  closeDeleteModal(){
    const modalDiv = document.getElementById('deleteModal');
    if(modalDiv != null){
      modalDiv.style.display = 'none'
    }
  }
}
