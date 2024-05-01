import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgForOf, RouterLink,RouterOutlet, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
navLabel =["About", "Explore", "Plan"]
enableAboutDetail :boolean =  false
enableExploreDetail:boolean =  false
enablePlanDetail:boolean =  false
textCaption = "Let's Explore the world"

navItemDetails(e:any){
if(e == "About"){
  this.enableAboutDetail = true
  this.enableExploreDetail = false
  this.enablePlanDetail = false


}else if(e == "Explore"){
  this.enableExploreDetail = true
  this.enablePlanDetail = false
  this.enableAboutDetail = false
}else{
  this.enableAboutDetail = false
  this.enableExploreDetail = false
  this.enablePlanDetail = true
}
}
}
