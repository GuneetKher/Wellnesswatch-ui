import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/endpoints/postModel';
import { SessionService } from 'src/app/unauthenticated/services/session.service';

@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.scss']
})
export class ModComponent {
  @Output() postsEmitter = new EventEmitter<Post[]>();
  public posts: Post[];
  constructor(private service: SessionService){
    this.posts = [];
    this.getModPosts();
  }

  public getModPosts() {
    this.service.get('Mod').subscribe({
      next: response=>{
        this.posts = response;
        this.postsEmitter.emit(this.posts);
      },
      error: err =>{

      }
    })
  }
}
