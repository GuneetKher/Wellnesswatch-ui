import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/models/endpoints/postModel';
import { SessionService } from 'src/app/unauthenticated/services/session.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent {

  @Input() posts: Post[];
  @Input() parent: string | undefined;
  @Output() commentsEmitter = new EventEmitter<Post[]>();
  @Output() predEmitter = new EventEmitter<string>();

  public localStore = localStorage;

  public comment: string | undefined;
  public loadingComment = false
  comments: Post[];
  public activeIndex: MyObject;
  public loadingFlag = false;
  public loadingMod = false;

  constructor(private session: SessionService) {
    this.posts = []; // Initialize the posts array
    // Other initialization code here
    this.activeIndex = {};
    this.comments = []
  }

  getActive(id: string) {
    Object.keys(this.activeIndex).forEach(key => {
      if (key === id) {
        this.activeIndex[key] = 0;
      } else {
        this.activeIndex[key] = -1;
      }
    });
  }

  public load_comments(id: string) {
    this.getActive(id);
    this.session.get('Post/comments/' + id).subscribe({
      next: response => {
        this.comments = response
        this.commentsEmitter.emit(this.comments)
      }
    })
  }

  post_comment(post: Post) {
    this.loadingComment = true;
    let data = {
      "author": localStorage.getItem('nameidentifier'),
      "authorName": localStorage.getItem('name'),
      "text": this.comment,
      "timestamp": new Date().toISOString(),
      "parentID": post.id,
      "isMod": false,
      "flaggedBy": [
      ]
    }
    let notif = {
      "UserID":post.author,
      "PostID":post.id,
      "PostText":this.comment?.slice(0,10),
      "CommentUsername":localStorage.getItem('name'),
      "Timestamp":new Date().toISOString(),
      "Seen":false
  }
    this.session.post('Post', data).subscribe({
      next: response => {
        this.loadingComment = false;
        this.comment = ""
        this.load_comments(post.id);
        if(post.author!=data.author){
          this.session.post("Notifications",notif).subscribe({
            next:response=>{

            },
            error: err=>{

            }
          })
        }
      },
      error: err => {
        this.loadingComment = false;
        this.comment = ""
      }
    })
  }

  mark_flagged(post: Post) {
    this.loadingFlag=true;
    this.session.post('Mod/' + localStorage.getItem('nameidentifier') + "/flag", post).subscribe({
      next: response => {
        this.loadingFlag=false;
        this.load_comments(post.parentId);
      },
      error: err => {
        this.loadingFlag=false;
        this.load_comments(post.parentId);
      }
    })
  }

  mark_modded(id: string) {
    this.loadingMod = true;
    this.session.post('Mod/'+id+"/moderate",null).subscribe({
      next: response=>{
        this.loadingMod = false;
      },
      error: err=>{
        this.loadingMod = false;
      }
    })
  }

  get_preds(string: string) {
    
    this.predEmitter.emit(string);
    console.log(string);
}

}

interface MyObject {
  [key: string]: any;
}