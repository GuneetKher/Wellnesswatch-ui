import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent {
@Input() posts: string[] | undefined;
public  comment: string | undefined ;
public loadingComment = false
}
