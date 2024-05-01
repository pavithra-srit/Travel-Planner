import { Component, Input } from '@angular/core';
import { NgxDatatableModule , ColumnMode, SelectionType} from '@swimlane/ngx-datatable';
import { AddPlanDetailsComponent } from '../add-plan-details/add-plan-details.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [NgxDatatableModule,AddPlanDetailsComponent, NgIf],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss'
})
export class PlanComponent {
  ColumnMode = ColumnMode 
  loadingIndicator !:boolean
  selected = [];
  SelectionType = SelectionType;
  planTitle ="Travel Plan"
  columns = [{prop:"checkbox", name:"",   sortable: false,
            canAutoResize: false, draggable: false,
            resizable: false,headerCheckboxable: true,
            checkboxable: true, width: 30},
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
      checkbox:"",place:"India",vaccationType:"Famiy",besttime:"Winter",modeofTransport:"flight",
      duration:"1 Month",startdate:"03-11-2024", enddate:"10-12-2024",
      attraction:"Taj Mahal, Marina Beach", note:"SunScreen"},
    {
      checkbox:"",place:"Swizerland",vaccationType:"Friends",besttime:"Spring",modeofTransport:"car",
      duration:"15 Days",startdate:"10-03-2025", enddate:"25-03-2025",
      attraction:"Rhine Falls, Chapel Bridge", note :"Take Sweater"
    },
    {
      checkbox:"",place:"Thailand",vaccationType:"Solo",besttime:"Summer",modeofTransport:"cruise",
      duration:"1 week",startdate:"15-06-2024", enddate:"21-06-2024",
      attraction:"The Grand Palace", note:"-"
    },
    {
      checkbox:"",place:"USA",vaccationType:"Friends and Family",besttime:"Winter",modeofTransport:"bike",
      duration:"1 Month",startdate:"07-08-2024", enddate:"10-09-2024",
      attraction:"Niagara Falls", note:"note"
    },
  ]
  ModalHeading = "Add Plan"
  enableAdd = false
  currentItem = 'Television';

  constructor(){

  }
  

  onSelect(row:any) {
  }
  rowIdentity = (row: any) => {
    return row.place;
    }
    openModal() {
      const mymodal = document.getElementById('myModal');
      if(mymodal != null)
      mymodal.style.display = 'block';
    }
    closeModal() {
      const mymodal = document.getElementById("myModal");
      if(mymodal!= null)
      mymodal.style.display = "none";
    }
    AddPlanModal(){
      this.enableAdd = true

      this.closeModal()
    }
    GetChildData(e:any){
console.log("eeee", e)
    }
}
