import { Component } from '@angular/core';
@Component({
  selector: 'app-dash-component',
  templateUrl: './dash-component.component.html',
  styleUrls: ['./dash-component.component.scss']
})
export class DashComponent {
  public username;
  constructor(){
    this.username = localStorage.getItem('name')
    document.documentElement.style.setProperty('--background-image', 'url(../../../../assets/bg2.png) no-repeat left center / contain');
  }
}
