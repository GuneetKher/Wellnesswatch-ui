import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { AuthEndpoints } from '../models/endpoints/auth-endpoints';
import { SessionService } from '../unauthenticated/services/session.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  public isAuthenticatedSubject = new BehaviorSubject<boolean>(this.isAuthenticated);

  constructor(private session : SessionService) { 
    this.getTokenVerify().subscribe(isVerified => {
      if (isVerified) {
        // token is valid, set isAuthenticated to true
        this.isAuthenticated = true;
      } else {
        // token is invalid, set isAuthenticated to false
        this.isAuthenticated = false;
      }
      this.isAuthenticatedSubject.next(this.isAuthenticated);
    })
  }

  getToken(){
    return localStorage.getItem('Token');
  }

  getTokenVerify(){
    return this.session.auth_get(AuthEndpoints.verify).pipe(
      map(response => {
        // assuming the response contains a success boolean property
        return true
      }),
      catchError(error => {
        // handle error
        console.error(error);
        return of(false);
      })
    );
  }

  login() {
    // make API call to server to authenticate user
    // if authentication successful, set isAuthenticated to true
    this.isAuthenticated = true;
    this.isAuthenticatedSubject.next(this.isAuthenticated);

  }

  logout() {
    // make API call to server to log out user
    // if logout successful, set isAuthenticated to false
    this.isAuthenticated = false;
    this.isAuthenticatedSubject.next(this.isAuthenticated);

  }

  checkAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  getIsAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
}