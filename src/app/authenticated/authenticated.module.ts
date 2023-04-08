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
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ModComponent } from './views/mod/mod.component';

@NgModule({
  declarations: [
    DashComponent,
    UserComponent,
    PostsComponent,
    PostContainerComponent,
    ModComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ScrollPanelModule,
    InputTextareaModule,
    InputTextModule,
    ButtonModule,
    AvatarModule,
    CardModule,
    AuthenticatedRoutingModule,
    AccordionModule
  ]
})
export class AuthenticatedModule { 

}
