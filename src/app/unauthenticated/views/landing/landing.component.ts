import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { AuthEndpoints } from 'src/app/models/endpoints/auth-endpoints';
import { AuthService } from 'src/app/services/auth-service.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  public showSpin = false;
  public error = false;
  login_username: any;
  login_password: any;
  signup_username: any;
  signup_password: any;
  signup_email: any;

  constructor(private session: SessionService, private authservice: AuthService) {
    document.documentElement.style.setProperty('--background-image', 'url(../../../../assets/bg1.png) no-repeat left center / contain');
  }

  public setUser(token : string){
    const decodedToken:any = jwt_decode(token);
    localStorage.setItem('name',decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'])
    localStorage.setItem('emailaddress',decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'])
    localStorage.setItem('role',decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"])
    localStorage.setItem('nameidentifier',decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'])
  }

  public login(){
    console.log("inLogin")
    let request = {
      "username": String(this.login_username).toLowerCase(),
      "password": this.login_password,
      "email":""
    }
    this.showSpin = true;
    this.error = false;
    this.session.post(AuthEndpoints.login,request).subscribe({
      next: response => {
        console.log("This is not an error")
        // console.log(response.token);
        localStorage.setItem('Token', response.token);
        this.session.usertoken = response.token;
        this.authservice.login()
        this.showSpin = false;
        this.setUser(response.token)
      },
      error: error => {
        this.showSpin = false;
        this.error = true;
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
    this.showSpin = true;
    this.error = false;
    this.session.post(AuthEndpoints.register,request).subscribe({
      next: response => {
        this.session.post(AuthEndpoints.login,request).subscribe({
          next: response => {
            console.log("This is not an error")
            localStorage.setItem('Token', response.token);
            this.session.usertoken = response.token
            this.authservice.login()
            this.showSpin = false;
            this.setUser(response.token)
          },
          error: error => {
          this.showSpin = false;
          this.error = true;
            console.log("Test this is an error")
            console.error("Error",error);
          }
        })
      },
      error: error => {
        this.showSpin = false;
        this.error = true;
        console.log("Test this is an error")
        console.error("Error",error);
      }
    })
  }
}
