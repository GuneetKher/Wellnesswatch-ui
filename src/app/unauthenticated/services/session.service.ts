import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private baseUrl = 'https://authservice-42pm2bswzq-uc.a.run.app';
  // private baseUrl = 'http://localhost:5288';
  
  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    const jwtToken = localStorage.getItem('Token');
  
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

}
