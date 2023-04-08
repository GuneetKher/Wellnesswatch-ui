import { Component, EventEmitter, Output } from '@angular/core';
import { LoggedinService } from '../../services/service.service';
import { Post } from 'src/app/models/endpoints/postModel';
@Component({
  selector: 'app-dash-component',
  templateUrl: './dash-component.component.html',
  styleUrls: ['./dash-component.component.scss']
})
export class DashComponent {
  @Output() postsEmitter = new EventEmitter<Post[]>();
  public posts: Post[];
  public username;
  public loadPost = false;
  public Post_Content: any;

  constructor(private service: LoggedinService){
    this.posts= []
    this.username = localStorage.getItem('name')
    document.documentElement.style.setProperty('--background-image', 'url(../../../../assets/bg2.png) no-repeat left center / contain');

    // this.posts = [
    //   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
    //   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
    //   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
    //   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
    //   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
    //   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
    //   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
    //   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
    // ]
    this.getFeed();
  }

  public getFeed() {
    this.service.get('Post?userId='+localStorage.getItem('nameidentifier')).subscribe({
      next: response=>{
        this.posts = response;
        this.postsEmitter.emit(this.posts);
      },
      error: err =>{

      }
    })
  }

  public makepost() {
    this.loadPost = true;
    let data={
      "author": localStorage.getItem('nameidentifier'),
      "authorName": localStorage.getItem('name'),
      "text": this.Post_Content,
      "timestamp": new Date().toISOString(),
      "parentID": null,
      "isMod": false,
      "flaggedBy": [
      ]
    }
    this.service.post('Post',data).subscribe({
      next: response =>{
        this.loadPost = false;
        this.Post_Content = "";
        this.getFeed();
      },
      error: err =>{
        this.loadPost = false;
        this.Post_Content = "";
      }
    })
    }
}
