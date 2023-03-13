import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleLoaderService {

  constructor(private authService: AuthService, private router: Router) {}

  loadModule() {
    if (this.authService.checkAuthenticated()) {
      import('../authenticated/authenticated.module').then(m => {
        this.router.navigate(['/dashboard']);
      });
    } else {
      import('../unauthenticated/unauthenticated.module').then(m => {
        this.router.navigate(['']);
      });
    }
  }
}
