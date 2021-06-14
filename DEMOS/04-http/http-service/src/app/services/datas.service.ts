import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatasService {
  constructor(private http: HttpClient, private url: string) { }

    readAll() {
      return this.http
        .get(this.url)
        .pipe(
          retry(1),
          catchError(this.handleError)
        );
    }

    create(resource) {
      return this.http
        .post(this.url, resource)
        .pipe(
          retry(1),
          catchError(this.handleError)
        );
    }

    update(resource) {
      return this.http
        .patch(this.url + '/' + resource.id, {isRead : !resource.isRead})
        .pipe(
          retry(1),
          catchError(this.handleError)
        );
    }

    delete(resource) {
      return this.http
        .delete(this.url + '/' + resource.id)
        .pipe(
          retry(1),
          catchError(this.handleError)
        );
    }

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json'
        'Content-Type': 'application/vnd.api+json'
      })
    };

    // Handle API errors
    handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: `, error);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    }

}
