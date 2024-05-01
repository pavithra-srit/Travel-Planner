import { Block } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {


  
  openExploreModal(){
    const modalDiv = document.getElementById('exploreModal');
    if(modalDiv != null){
      modalDiv.style.display = 'block'
    }
  }

  closeExploreModal(){
    const modalDiv = document.getElementById('exploreModal');
    if(modalDiv != null){
      modalDiv.style.display = 'none'
    }
  }
}
