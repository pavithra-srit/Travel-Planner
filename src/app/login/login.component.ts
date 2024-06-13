import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Observable } from 'rxjs';
import { AppService} from '../app.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HomeComponent, LoginComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit{

    constructor(private router: Router, private route: ActivatedRoute,
      private service:AppService){}
    userName=""
    userPassword =""

    ngOnInit(): void {
      
  }
  
  loginNameEvent(value:any){
      this.userName = value
    }

  loginPasswordEvent(value:any){
      this.userPassword = value
    }  

  loginPlan(e:any){
    // if(e){
      // this.service.getUser().subscribe(res=>{
      //   console.log("resss", res)
      // })
      const data ={
           "name":this.userName,
           "password":this.userPassword
      }

      this.service.getUserDetail(data).subscribe(res=>{
        sessionStorage.setItem('userToken',this.userName )
        this.router.navigate(['user/home'])      })
    
    // }
  }
}
