import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faStar as sS } from '@fortawesome/free-solid-svg-icons';
import { faStar as sR } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {

  starS = sS;
  starR = sR;

/* -------------------------------- Etape #1 -------------------------------- */

  @Input('isFavorite') isFav : boolean;
  // setFavorite() {
  //   this.isFav = !this.isFav;
  // }

/* -------------------------------- Etape #2 -------------------------------- */

  @Output('change') change = new EventEmitter();
  // setFavorite() {
  //   this.isFav = !this.isFav;
  //   this.change.emit();
  // }

/* -------------------------------- Etape #3 -------------------------------- */

  // setFavorite() {
  //   this.isFav = !this.isFav;
  //   this.change.emit(this.isFav);
  // }

/* -------------------------------- Etape #4 -------------------------------- */

  setFavorite() {
    this.isFav = !this.isFav;
    this.change.emit({newValue : this.isFav});
  }


}


/* -------------------------------- Etape #6 -------------------------------- */
export interface FavoriteChangedEventArgs {
  newValue : boolean
}
