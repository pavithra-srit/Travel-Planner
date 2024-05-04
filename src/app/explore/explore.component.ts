import { NgIf } from '@angular/common';
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [NgIf],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {

  enableSwitz =false
  enableUsa =false
  enableIndia =false
  enableItaly =false
  enableAus =false
  enableJapan =false
  enableFrance =false
  enableChina =false
  enableThailand =false
  enablecanada =false
  modalTitle =""
  openExploreModal(e:any){
    console.log(e.srcElement.alt)
    if(e.srcElement.alt == "switzerland"){
      this.enableSwitz = true
      this.modalTitle = "Switzerland"
    }
    if(e.srcElement.alt == "USA"){
      this.enableUsa = true
      this.modalTitle = "USA"
    }
    if(e.srcElement.alt == "India"){
      this.enableIndia = true
      this.modalTitle = "India"
    }

    if(e.srcElement.alt == "Italy"){
      this.enableItaly = true
      this.modalTitle = "Italy"
    }

    if(e.srcElement.alt == "australia"){
      this.enableAus = true
      this.modalTitle = "Australia"
    }
    if(e.srcElement.alt == "Japan"){
      this.enableJapan = true
      this.modalTitle = "Japan"
    }

    if(e.srcElement.alt == "France"){
      this.enableFrance = true
      this.modalTitle = "France"
    }

    if(e.srcElement.alt == "China"){
      this.enableChina = true
      this.modalTitle = "China"
    }
    if(e.srcElement.alt == "Thailand"){
      this.enableThailand = true
      this.modalTitle = "Thailand"
    }

    if(e.srcElement.alt == "canada"){
      this.enablecanada = true
      this.modalTitle = "canada"
    }

  
    const modalDiv = document.getElementById('exampleModal');
    if(modalDiv != null){
          modalDiv.style.display = 'block'
    }
  }

  closeExploreModal(){
    const modalDiv = document.getElementById('exampleModal');
    if(modalDiv != null){
      modalDiv.style.display = 'none'
    }
    this.enableSwitz =false
    this.enableUsa =false
    this.enableIndia =false
    this.enableItaly =false
    this.enableAus =false
    this.enableJapan =false
    this.enableFrance =false
    this.enableChina =false
    this.enableThailand =false
    this.enablecanada =false
  }
}
