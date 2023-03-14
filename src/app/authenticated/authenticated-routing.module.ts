import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopageComponent } from '../unauthenticated/views/nopage/nopage.component';
import { DashComponent } from './views/dash-component/dash-component.component';

const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'feed', component:NopageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
