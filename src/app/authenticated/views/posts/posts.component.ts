import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/endpoints/postModel';
import { SessionService } from 'src/app/unauthenticated/services/session.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  @Output() postsEmitter = new EventEmitter<Post[]>();
  public posts: Post[];
  constructor(private service: SessionService){
    this.posts = [];
    this.getPosts();
  }

  public getPosts() {
    this.service.get('Post/user/'+localStorage.getItem('nameidentifier')).subscribe({
      next: response=>{
        this.posts = response;
        this.postsEmitter.emit(this.posts);
      },
      error: err =>{

      }
    })
  }
}
