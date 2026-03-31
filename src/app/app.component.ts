import { Component, OnInit,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet,Router,NavigationEnd ,ActivatedRoute} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, HomeComponent,
            LoginComponent,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sample';
  textCaption = "Let's Explore the world"
  enableHome = false
  isLogged = false
  constructor(private router: Router, private route: ActivatedRoute,){}

  ngOnInit(): void {
  
  }

  getLoggedInStatus() {
    console.log("LOGINNN---", sessionStorage.getItem('userToken'))
    if (sessionStorage.getItem('userToken') != null) {
        this.isLogged = true  
        }
    else {
      this.isLogged = false    
    }
  }
 
  getHomepage(e:any){
    this.enableHome = true
  }
}
