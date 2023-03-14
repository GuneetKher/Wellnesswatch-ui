import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnauthenticatedModule } from './unauthenticated/unauthenticated.module';
import { AuthenticatedModule } from './authenticated/authenticated.module';
import { NavbarComponent } from './views/navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {BadgeModule} from 'primeng/badge';
import {OverlayPanelModule} from 'primeng/overlaypanel';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenubarModule,
    BadgeModule,
    OverlayPanelModule,
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
