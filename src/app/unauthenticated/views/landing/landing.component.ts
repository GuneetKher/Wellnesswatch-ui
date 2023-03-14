import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { AuthEndpoints } from 'src/app/models/endpoints/auth-endpoints';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  login_username: any;
  login_password: any;
  signup_username: any;
  signup_password: any;
  signup_email: any;

  constructor(private session: SessionService, private authservice: AuthService) {
  }

  public login(){
    console.log("inLogin")
    let request = {
      "username": String(this.login_username).toLowerCase(),
      "password": this.login_password,
      "email":""
    }
    this.session.post(AuthEndpoints.login,request).subscribe({
      next: response => {
        console.log("This is not an error")
        // console.log(response.token);
        localStorage.setItem('Token', response.token);
        this.authservice.login()
      },
      error: error => {
        console.log("Test this is an error")
        console.error("Error",error);
      }
    })
  }

  public register(){
    console.log("inRegister")
    let request = {
      "username": String(this.signup_username).toLowerCase(),
      "password": this.signup_password,
      "email": String(this.signup_email).toLowerCase()
    }
    this.session.post(AuthEndpoints.register,request).subscribe({
      next: response => {
        this.session.post(AuthEndpoints.login,request).subscribe({
          next: response => {
            console.log("This is not an error")
            localStorage.setItem('Token', response.token);
            this.authservice.login()
          },
          error: error => {
            console.log("Test this is an error")
            console.error("Error",error);
          }
        })
      },
      error: error => {
        console.log("Test this is an error")
        console.error("Error",error);
      }
    })
  }
}
