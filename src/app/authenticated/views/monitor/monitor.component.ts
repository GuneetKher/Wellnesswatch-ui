import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/endpoints/postModel';
import { SessionService } from 'src/app/unauthenticated/services/session.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent {

  @Input() post:string | undefined;

  public classifier_out: any | undefined;
  public topic_out: any | undefined;
  public flair_out: any | undefined;
  
  public posts: any;
  topic_list: any;
  is_mh: boolean | undefined;
  constructor(private service:SessionService){
    this.posts = []
    this.getFeed();
  }

  public getFeed() {
    this.service.get_all_posts('Post/allposts').subscribe({
      next: response=>{
        this.posts = response;
      },
      error: err =>{
      }
    })
  }


  show_preds(string: any) {
    this.show_topics(string);
    this.show_flair(string);
    this.service.post_spec_pred('https://ds-6jwegwyhkq-uc.a.run.app/predict',{"post":string}).subscribe({
      next: response=>{
        this.classifier_out = response
        this.is_mh = Boolean(Math.round(this.classifier_out['probability_lax']))
      },
      error:err=>{

      }
    })
    }
  show_flair(string: any) {
    this.service.post_spec_pred('http://35.235.75.91/predict',{"text":string}).subscribe({
      next: response=>{
        this.flair_out=response['class_label'];
      },
      error:err=>{

      }
    })
  }

    show_topics(string: any) {
      this.service.post_spec_pred('http://34.106.248.124/predict',{
        'text':string
      }).subscribe({
        next: response=>{
          this.topic_out = response['topic_label'] 
          if (this.topic_out=='executive dysfunction'){
            this.topic_out = "talks of leisure";
          }
          this.topic_list = response['probabilities']
          this.topic_list["talks of leisure"] = this.topic_list["executive dysfunction"];
          delete this.topic_list["executive dysfunction"];
          this.topic_list = Object.entries(this.topic_list).sort((a:any, b:any) => b[1] - a[1]);
        },
        error:err=>{
          console.log(err)
  
        }
      })
      }

}
