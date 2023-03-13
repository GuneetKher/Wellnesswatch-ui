import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-component',
  templateUrl: './dash-component.component.html',
  styleUrls: ['./dash-component.component.scss']
})
export class DashComponent {
  constructor(){
    document.documentElement.style.setProperty('--background-image', '#f43f43');
  }
}
