import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PictureService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll(type) {
      return this.http.get(this.url+'/'+type + '?_sort=id&_order=desc')
  }

  create(resource) {
    return this.http.post(this.url +"/author", resource)
  } 

}