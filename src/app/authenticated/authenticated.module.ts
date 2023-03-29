import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { DashComponent } from './views/dash-component/dash-component.component';
import { CardModule } from 'primeng/card';
import {AvatarModule} from 'primeng/avatar';
import {ButtonModule} from 'primeng/button';
import { UserComponent } from './views/user/user.component';
import { PostsComponent } from './views/posts/posts.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { PostContainerComponent } from './views/post-container/post-container.component';

@NgModule({
  declarations: [
    DashComponent,
    UserComponent,
    PostsComponent,
    PostContainerComponent,
  ],
  imports: [
    CommonModule,
    ScrollPanelModule,
    InputTextareaModule,
    ButtonModule,
    AvatarModule,
    CardModule,
    AuthenticatedRoutingModule
  ]
})
export class AuthenticatedModule { 

}
