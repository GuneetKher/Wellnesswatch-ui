import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopageComponent } from './unauthenticated/views/nopage/nopage.component';
import { AuthGuard } from './services/auth-guard.service';
import { UnauthenticatedModule } from './unauthenticated/unauthenticated.module';
import { AuthenticatedModule } from './authenticated/authenticated.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => UnauthenticatedModule
  },
  {
    path: 'dashboard',
    loadChildren: () => AuthenticatedModule,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
