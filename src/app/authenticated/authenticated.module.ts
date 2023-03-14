import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { DashComponent } from './views/dash-component/dash-component.component';
import { CardModule } from 'primeng/card';
import {AvatarModule} from 'primeng/avatar';

@NgModule({
  declarations: [
    DashComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
    CardModule,
    AuthenticatedRoutingModule
  ]
})
export class AuthenticatedModule { 

}
