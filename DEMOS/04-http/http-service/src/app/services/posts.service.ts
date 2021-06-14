import { DatasService } from './datas.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/* --------------------------- Etape #6 - service --------------------------- */
// export class PostsService {
//   private url = 'http://localhost:3000/posts';
//   constructor(private http: HttpClient) {}

//   readAll() {
//     return this.http.get(this.url);
//   }

//   createPost(post) {
//     return this.http.post(this.url, post);
//   }

//   updatePost(post) {
//     return this.http.post(this.url + '/' + post.id, {isRead : !post.isRead});
//   }

//   deletePost(post) {
//     return this.http.delete(this.url + '/' + post.id);
//   }

/* --------------------- Etape #8 - Gestion des erreurs dans le service --------------------- */

// export class PostsService {
//   private url = 'http://localhost:3000/posts';
//   constructor(private http: HttpClient) {}

//   readAll() {
//     return this.http
//       .get(this.url)
//       .pipe(
//         retry(1),
//         catchError(this.handleError)
//       );
//   }

//   createPost(post) {
//     return this.http
//       .post(this.url, post)
//       .pipe(
//         retry(1),
//         catchError(this.handleError)
//       );
//   }

//   updatePost(post) {
//     return this.http
//       .post(this.url + '/' + post.id, {isRead : !post.isRead})
//       .pipe(
//         retry(1),
//         catchError(this.handleError)
//       );
//   }

//   deletePost(post) {
//     return this.http
//       .delete(this.url + '/' + post.id)
//       .pipe(
//         retry(1),
//         catchError(this.handleError)
//       );
//   }

//   // Http Options
//   httpOptions = {
//     headers: new HttpHeaders({
//       // 'Content-Type': 'application/json'
//       'Content-Type': 'application/vnd.api+json'
//     })
//   };

//   // Handle API errors
//   handleError(error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//       // A client-side or network error occurred. Handle it accordingly.
//       console.error('An error occurred:', error.error.message);
//     } else {
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong,
//       console.error(
//         `Backend returned code ${error.status}, ` +
//         `body was: `, error);
//     }
//     // return an observable with a user-facing error message
//     return throwError(
//       'Something bad happened; please try again later.');
//   }

/* ------------------------ Etape #8 - Datas Service ------------------------ */

export class PostsService extends DatasService{
  constructor(http: HttpClient) {
    super(http, 'http://localhost:3000/posts')
  }

}
