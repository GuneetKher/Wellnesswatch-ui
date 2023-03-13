import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthenticatedRoutingModule } from './unauthenticated-routing.module';

import { LandingComponent } from './views/landing/landing.component';
import { NopageComponent } from './views/nopage/nopage.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    LandingComponent,
    NopageComponent
  ],
  imports: [
    CommonModule,
    UnauthenticatedRoutingModule,
    NbCardModule,
  ],
})
export class UnauthenticatedModule { }
