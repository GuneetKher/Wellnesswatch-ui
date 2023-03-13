import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { DashComponent } from './views/dash-component/dash-component.component';


@NgModule({
  declarations: [
    DashComponent
  ],
  imports: [
    CommonModule,
    AuthenticatedRoutingModule
  ]
})
export class AuthenticatedModule { 

}
