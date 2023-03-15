import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthenticatedRoutingModule } from './unauthenticated-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { LandingComponent } from './views/landing/landing.component';
import { NopageComponent } from './views/nopage/nopage.component';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import { FormsModule } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    LandingComponent,
    NopageComponent
  ],
  imports: [
    FormsModule,
    ProgressSpinnerModule,
    PasswordModule,
    HttpClientModule,
    CommonModule,
    UnauthenticatedRoutingModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    TabViewModule
  ],
})
export class UnauthenticatedModule { }
