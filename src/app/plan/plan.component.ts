import { Component, Input,viewChild } from '@angular/core';
import { NgxDatatableModule , ColumnMode, SelectionType} from '@swimlane/ngx-datatable';
import { AddPlanDetailsComponent } from '../add-plan-details/add-plan-details.component';
import { NgIf, NgStyle } from '@angular/common';
import { ViewPlanDetailComponent } from '../view-plan-detail/view-plan-detail.component';


@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [NgxDatatableModule,AddPlanDetailsComponent, NgIf, NgStyle,
    ViewPlanDetailComponent
  ],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss'
})
export class PlanComponent {

  addFlagValue =false
  ColumnMode = ColumnMode 
  loadingIndicator !:boolean
  selected = [];
  SelectionType = SelectionType;
  planTitle ="Travel Plan"
  columns = [{prop:"checkbox", name:"",   sortable: false,
            canAutoResize: false, draggable: false,
            resizable: false,headerCheckboxable: true,
            checkboxable: true, width: 30},
            {prop:"id", name:"ID"},
            {prop:"place", name:"Place to vist"},
            {prop:"vaccationType", name:"vaccation Type"},
            {prop:"besttime", name:"Best Time"},
            {prop:"modeofTransport", name:"Mode of Transport"},
            {prop:"duration", name:"Duration"},
            {prop:"startdate", name:"Start Date"},
            {prop:"enddate", name:"End Date"},
            {prop:"attraction", name:"Attraction"},
            {prop:"note",name:"Note"}

  ]
  rows=[
    {
      checkbox:"",id:1,place:"India",vaccationType:"Famiy",besttime:"Winter",modeofTransport:"flight",
      duration:"1 Month",startdate:"03-11-2024", enddate:"10-12-2024",
      attraction:"Taj Mahal, Marina Beach", note:"SunScreen"},
    {
      checkbox:"",id:2,place:"Switzerland",vaccationType:"Friends",besttime:"Spring",modeofTransport:"Car",
      duration:"15 Days",startdate:"10-03-2025", enddate:"25-03-2025",
      attraction:"Rhine Falls, Chapel Bridge", note :"Take Sweater"
    },
    {
      checkbox:"",id:3,place:"Thailand",vaccationType:"Solo",besttime:"Summer",modeofTransport:"cruise",
      duration:"1 week",startdate:"15-06-2024", enddate:"21-06-2024",
      attraction:"The Grand Palace", note:"-"
    },
    {
      checkbox:"",id:4,place:"USA",vaccationType:"Friends and Family",besttime:"Winter",modeofTransport:"bike",
      duration:"1 Month",startdate:"07-08-2024", enddate:"10-09-2024",
      attraction:"Niagara Falls", note:"note"
    },
  ]
  ModalHeading =""
  enableAdd = false
  selectRowLength :Number
  selectedRows :any
  enableViewBtn = false
  enableDeleteBtn = false
  deleteModal = false
  constructor(){

  }
  

  onSelect(row:any) {
    console.log("rrrrr", row)

    if(row.selected.length > 0){
    this.selectedRows = row.selected
    }

    if( this.selectedRows.length == 1){
      this.enableViewBtn = true
      this.enableDeleteBtn = true
    }
    else{
      this.enableViewBtn = false
    }
    if(row.selected.length == 0){
      this.enableViewBtn = false
      this.enableDeleteBtn = false
    }
  }
  rowIdentity = (row: any) => {
    return row.place;
    }
    openAddModal() {
      const mymodal = document.getElementById('myModal');
      if(mymodal != null)
      mymodal.style.display = 'block';
      this.enableAdd = true
      this.ModalHeading = "Add Plan"
    }
    openViewModal() {
      const mymodal = document.getElementById('myModal');
      if(mymodal != null)
      mymodal.style.display = 'block';
      this.enableAdd = false
    this.ModalHeading = "View Plan"
    }
    closeModal() {
      const mymodal = document.getElementById("myModal");
      if(mymodal!= null)
      mymodal.style.display = "none";
    }
    AddPlanModal(){
      this.addFlagValue = true
      console.log("AddFlag add btn",this.addFlagValue)

      this.closeModal()
    }

    deletePlan(){
      this.deleteModal = true
      
      for (const deleterow of this.selectedRows){

   for (const [i,row] of this.rows.entries()){
    // console.log("row indexx",i)

          if(row.id === deleterow.id){
           this.rows.splice(row.id,1)
          
          console.log("indexxxxx",i)
          console.log("rowwww", deleterow.id)
          }
      }
      }
      this.closeDeleteModal()
    }
    GetChildData(e:any){
      console.log("ADDDVALJUE", e)
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
