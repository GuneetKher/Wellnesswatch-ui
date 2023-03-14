import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { DashComponent } from './views/dash-component/dash-component.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';

@NgModule({
  declarations: [
    DashComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BadgeModule,
    AvatarModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    AuthenticatedRoutingModule
  ]
})
export class AuthenticatedModule { 

}
