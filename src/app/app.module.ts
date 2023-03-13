import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './unauthenticated/views/landing/landing.component';
import { NopageComponent } from './unauthenticated/views/nopage/nopage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { UnauthenticatedModule } from './unauthenticated/unauthenticated.module';
import { AuthenticatedModule } from './authenticated/authenticated.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // NbThemeModule.forRoot({ name: 'default' }),
    // NbLayoutModule,
    // NbCardModule,
    // NbEvaIconsModule,
    UnauthenticatedModule,
    AuthenticatedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
