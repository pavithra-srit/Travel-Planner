import { Component,EventEmitter,OnInit, Output, signal } from '@angular/core';
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
    userName= signal("");
    userPassword =signal("");
    passwordError=signal<string>("");
    usernameError = signal<string>("");

    ngOnInit(): void {
      
  }
  
  loginNameEvent(value:any){
      this.userName.set(value)
    }

  loginPasswordEvent(value:any){
      this.userPassword.set(value)
    }  

  validateUsername() {
    if (!this.userName()) {
      this.usernameError.set("Username is required.");
      return false;
    }
    if (this.userName().length < 3) {
      this.usernameError.set("Username must be at least 3 characters.");
      return false;
    }
    if (!/^[a-zA-Z0-9_]+$/.test(this.userName())) {
      this.usernameError.set("Username can only contain letters, numbers, and underscores.");
      return false;
    }
    this.usernameError.set("");
    return true;
  }
  validatePassword() {
    if (!this.userPassword()) {
      this.passwordError.set("Password is required.");
      return false;
    }
    if (this.userPassword().length < 8) {
      this.passwordError.set("Password must be at least 8 characters.");
      return false;
    }
    this.passwordError.set("");
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
        sessionStorage.setItem('userToken',this.userName() )
        this.router.navigate(['user/home'])      })
    
    // }
  }
}
