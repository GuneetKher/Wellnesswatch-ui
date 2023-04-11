import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public usertoken: string |undefined;

  // private baseUrl = 'https://authservice-42pm2bswzq-uc.a.run.app';
  private baseUrl = 'https://wellnesswatch-b62qapbl.uc.gateway.dev'; // serverless
  // private baseUrl = 'https://wellnesswatch-aema1bi7.uc.gateway.dev'; // serverful
  // private baseUrl = 'http://localhost:5288';
  
  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    // const jwtToken = localStorage.getItem('Token');
    const jwtToken = this.usertoken!=undefined? this.usertoken : localStorage.getItem('Token');
  
    if (jwtToken) {
      headers = headers.set('Authorization', `Bearer ${jwtToken}`);
    }
  
    return headers;
  }

  public get(endpoint: string): Observable<any> {
    return new Observable(observer => {
      this.http.get(`${this.baseUrl}/${endpoint}`)
        .subscribe({
          next: response => {
            observer.next(response);
            observer.complete();
          },
          error: error => {
            observer.error(error);
          }
        });
    });
  }

  public post(endpoint: string, data: any): Observable<any> {
    return new Observable(observer => {
      this.http.post(`${this.baseUrl}/${endpoint}`, data)
        .subscribe({
          next: response => {
            observer.next(response);
            observer.complete();
          },
          error: error => {
            observer.error(error);
          }
        });
    });
  }



  public auth_get(endpoint: string): Observable<any> {
    return new Observable(observer => {
      const headers = this.getHeaders();
      this.http.get(`${this.baseUrl}/${endpoint}`,{ headers })
        .subscribe({
          next: response => {
            observer.next(response);
            observer.complete();
          },
          error: error => {
            observer.error(error);
          }
        });
    });
  }

  public auth_post(endpoint: string, data: any): Observable<any> {
    return new Observable(observer => {
      const headers = this.getHeaders();
      console.log('Headers:', headers);
      this.http.post(`${this.baseUrl}/${endpoint}`, data, { headers })
        .subscribe({
          next: response => {
            observer.next(response);
            observer.complete();
          },
          error: error => {
            observer.error(error);
          }
        });
    });
  }

  get_all_posts(endpoint: string) {
    return new Observable(observer => {
      this.http.get(`${'https://postservice-42pm2bswzq-uc.a.run.app'}/${endpoint}`)
        .subscribe({
          next: response => {
            observer.next(response);
            observer.complete();
          },
          error: error => {
            observer.error(error);
          }
        });
    });
  }

  public post_spec_pred(endpoint: string, data: any): Observable<any> {
    return new Observable(observer => {
      this.http.post(`${endpoint}`, data)
        .subscribe({
          next: response => {
            observer.next(response);
            observer.complete();
          },
          error: error => {
            observer.error(error);
          }
        });
    });
  }

}
