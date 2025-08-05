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
    passwordError: string = "";
    usernameError: string = "";

    ngOnInit(): void {
      
  }
  
  loginNameEvent(value:any){
      this.userName = value
    }

  loginPasswordEvent(value:any){
      this.userPassword = value
    }  

  validateUsername() {
    if (!this.userName) {
      this.usernameError = "Username is required.";
      return false;
    }
    if (this.userName.length < 3) {
      this.usernameError = "Username must be at least 3 characters.";
      return false;
    }
    if (!/^[a-zA-Z0-9_]+$/.test(this.userName)) {
      this.usernameError = "Username can only contain letters, numbers, and underscores.";
      return false;
    }
    this.usernameError = "";
    return true;
  }
  validatePassword() {
    if (!this.userPassword) {
      this.passwordError = "Password is required.";
      return false;
    }
    if (this.userPassword.length < 8) {
      this.passwordError = "Password must be at least 8 characters.";
      return false;
    }
    this.passwordError = "";
    return true;
  }
  loginPlan(e:any){
    // Validate username
    if (!this.validateUsername()) {
      return;
    }
    // Validation: check if password is filled
    if (!this.validatePassword) {
      return;
    }
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
