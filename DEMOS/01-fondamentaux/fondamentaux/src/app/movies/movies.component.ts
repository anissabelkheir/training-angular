import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service'; // à l'étape 3

@Component({
  selector: 'movies', // <movies> => "movies", <div class="movies"> => .movies, <div id="movies"> => #movies
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

/* --------------------------------- Etape 1 -------------------------------- */

// export class MoviesComponent {

//   title: string = "My Movies"

//   getTitle() {
//       return "My Movies";
//   }

// }

/* --------------------------------- Etape 2 -------------------------------- */
// export class MoviesComponent {

//   title: string = "My Movies"
//   movies: string[] = ["Film 1", "Film 2", "Film 3"] // ngFor dans HTML

// }

/* --------------------------------- Etape 3 -------------------------------- */

// export class MoviesComponent {

//   title: string = "My Movies"
//   movies: string[];

//   constructor() {
//     let service = new MoviesService()
//     this.movies = service.getMovies();
//   }

// }

/* --------------------------------- Etape 4 -------------------------------- */

// export class MoviesComponent {

//   title: string = "My Movies"
//   movies: string[];

//   constructor(service : MoviesService) { // singleton
//     this.movies = service.getMovies();
//   }

// }

/* ------------------------ Etape 5 -property binding ------------------------- */

// export class MoviesComponent {

//   imgUrl = "https://picsum.photos/400/200";

// }

/* ----------------------- Etape 6 - property binding ------------------------ */

// export class MoviesComponent {

//   imgUrl = "https://picsum.photos/400/200";
//   cols = 2;

// }

/* --------------------------------- Etape 7 -------------------------------- */
// installation bootstrap

/* ------------------------- Etape 8 - 9 class/style------------------------- */
// export class MoviesComponent {

//   isActive: boolean = true;

// }

/* ---------------------------- Etape 10 - events --------------------------- */
// export class MoviesComponent {

//   onSave() {
//     console.log("Le bouton a été cliqué")
//   }

// }

/* -------------------------------- Etape 11 -------------------------------- */

// export class MoviesComponent {

//   onSave($event) {
//     console.log("Le bouton a été cliqué", $event);
//   }

// }


/* --------------------------- Etape 12 - bubbling -------------------------- */

// export class MoviesComponent {

//   onSave($event) {
//     console.log("Le bouton a été cliqué", $event);
//   }

//   onDivClicked() {
//     console.log("La div a été cliquée")
//   }

// }

/* ----------------------- Etape 13 - stopPropagation------------------------ */

// export class MoviesComponent {

//   onSave(t) {
//     t.stopPropagation();
//     console.log("Le bouton a été cliqué", t);
//   }

//   onDivClicked() {
//     console.log("La div a été cliquée")
//   }

// }


/* ----------------------- Etape 14 - event filtering ----------------------- */


// export class MoviesComponent {

//   onKeyUp($event) {
//     if ($event.keyCode == 13) console.log('ENTER')
//   }

// }


/* -------------------------------- Etape 15 -------------------------------- */

// export class MoviesComponent {

//   onKeyUp() {
//     console.log('ENTER')
//   }

// }

/* ---------------------- Etape 16 - template variables --------------------- */

// export class MoviesComponent {

//   onKeyUp($event) {
//       console.log($event.target.value)
//   }

// }

/* -------------------------------- Etape 17 -------------------------------- */

// export class MoviesComponent {

//   onKeyUp(mail) {
//       console.log(mail)
//   }

// }


/* ----------------------- Etape 18 - two way binding ----------------------- */
// Avec le two-way binding, plus besoin de passer des params dans les ()

// export class MoviesComponent {

//   // email
//   email = "monmail.com";
//   onKeyUp() { // comportement
//       console.log(this.email)
//   }

// }


/* ----------------------------- Etape 19 PIPES ----------------------------- */

// export class MoviesComponent {
//     course = {
//       title: 'Tout connaître sur Angular de A à Z',
//       rating: 4.859,
//       students: 32901,
//       price: 199.99,
//       releaseDate: new Date(2020, 1, 1)
//   }
// }
/* -------------------------- Etape 20 CUSTOM PIPES ------------------------- */
export class MoviesComponent {
  text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae excepturi cumque dolor dignissimos eligendi enim illo numquam? Sint at optio maxime asperiores reiciendis nostrum eius, quo incidunt maiores molestias nemo.'
}

