import { Component,OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

    constructor(private router: Router, private route: ActivatedRoute,){}
    ngOnInit(): void {
      
    }
    
  loginPlan(e:any){
    // if(e){
      this.router.navigate(['/home'])
    // }
  }
}