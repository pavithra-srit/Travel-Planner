import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet} from '@angular/router';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ HomeComponent,RouterOutlet,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private router: Router){}


  logout(){
    sessionStorage.removeItem('userToken')
    this.router.navigate(['/'])
  }

}
