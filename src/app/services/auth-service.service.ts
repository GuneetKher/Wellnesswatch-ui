import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() { }

  login(username: string, password: string) {
    // make API call to server to authenticate user
    // if authentication successful, set isAuthenticated to true
    this.isAuthenticated = true;
  }

  logout() {
    // make API call to server to log out user
    // if logout successful, set isAuthenticated to false
    this.isAuthenticated = false;
  }

  checkAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}