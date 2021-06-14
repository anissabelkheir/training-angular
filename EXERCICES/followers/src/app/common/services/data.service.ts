import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url);
  }

  create(resource) {
    return this.http.post(this.url, resource);
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, {isRead : true});
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id);
  }
}
