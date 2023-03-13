import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { NopageComponent } from './views/nopage/nopage.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  // { path: '**', component: NopageComponent }
  // { path: 'register', component: RegisterComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class UnauthenticatedRoutingModule { }
