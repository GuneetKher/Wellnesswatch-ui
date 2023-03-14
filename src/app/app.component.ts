import { Component } from '@angular/core';
import { ModuleLoaderService } from './services/module-loader.service';
import { AuthService } from './services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wellness Watch';
  showNavbar = true;

  constructor(private moduleLoader: ModuleLoaderService, private authService: AuthService,private router: Router) {
    this.router.events.subscribe(event => {
        this.showNavbar = this.router.url !== '/';
      });
    this.moduleLoader.loadModule();
    this.authService.getTokenVerify().subscribe()
  }
}
