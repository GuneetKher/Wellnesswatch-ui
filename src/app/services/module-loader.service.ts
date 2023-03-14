import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleLoaderService {
  private isAuthenticatedSubscription?: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  loadModule() {
    this.isAuthenticatedSubscription = this.authService.getIsAuthenticated().subscribe(isAuthenticated => {
      if (isAuthenticated) {
        import('../authenticated/authenticated.module').then(m => {
          this.router.navigate(['/dashboard']);
        });
      } else {
        import('../unauthenticated/unauthenticated.module').then(m => {
          this.router.navigate(['']);
        });
      }
    });
  }

  ngOnDestroy() {
    this.isAuthenticatedSubscription?.unsubscribe();
  }
}

