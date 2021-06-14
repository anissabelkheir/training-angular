import { Component } from '@angular/core';
import { faStar as sS} from '@fortawesome/free-solid-svg-icons';
import { faStar as sR} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {

  starS = sS;
  starR = sR;
  isFavorite: boolean = false;

  onFavorite() {
    this.isFavorite = !this.isFavorite;
  }


}
