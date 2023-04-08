import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopageComponent } from '../unauthenticated/views/nopage/nopage.component';
import { DashComponent } from './views/dash-component/dash-component.component';
import { PostsComponent } from './views/posts/posts.component';
import { UserComponent } from './views/user/user.component';
import { ModComponent } from './views/mod/mod.component';

const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'myposts', component:PostsComponent },
  { path: 'user', component:UserComponent },
  { path: 'mod', component: ModComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
