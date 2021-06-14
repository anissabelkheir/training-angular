import { FavoriteChangedEventArgs } from './favorite/favorite.component'; // à l'étape 6
import { Component } from '@angular/core';

/* -------------------------------- Etape #5 -------------------------------- */
//dans l'étape 6 mettre cette interface dans le component et l'exporter ici
// interface FavoriteChangedEventArgs {
//   newValue : boolean
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components';


/* -------------------------------- Etape #1 -------------------------------- */
  post = {
    title : "My first post",
    isFave : true
  }

/* -------------------------------- Etape #2 -------------------------------- */
  // onFavoriteChange() {
  //   console.log('Favorite is changed')
  // }

/* -------------------------------- Etape #3 -------------------------------- */

  // onFavoriteChange(favoris) {
  //   console.log('Favorite is changed : ' + favoris);
  // }

/* -------------------------------- Etape #4 -------------------------------- */

  // onFavoriteChange(eventArgs) {
  //   console.log('Favorite is changed : ', eventArgs);
  // }


/* -------------------------------- Etape #5 -------------------------------- */
// va de pair avec l'interface ajoutée en haut de cette page
// à l'étape 6 transférer l'interface vers le component et l'importer ici

  onFavoriteChange(eventArgs : FavoriteChangedEventArgs) {
    console.log('Favorite is changed : ', eventArgs);
  }

}
