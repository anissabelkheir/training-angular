import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MoviesService {
    constructor() { }

/* --------------------------------- Etape 3 -------------------------------- */

    getMovies() {
        return ["Film 1", "Film 2", "Film 3"];
    }

}