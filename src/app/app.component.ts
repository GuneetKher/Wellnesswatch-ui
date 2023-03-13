import { Component } from '@angular/core';
import { ModuleLoaderService } from './services/module-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wellness Watch';
  constructor(private moduleLoader: ModuleLoaderService) {
    this.moduleLoader.loadModule();
  }
}
