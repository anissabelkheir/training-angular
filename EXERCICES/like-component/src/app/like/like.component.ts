import { Component, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'likeComponent',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {

  heart = faHeart;

  @Input('isLiked') isLiked: boolean;
  @Input('likesCount') likesCount: number;

  setLikes() {
    this.isLiked = !this.isLiked;
    this.likesCount += this.isLiked ? +1 : -1;
  }

}
