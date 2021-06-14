import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FollowersService extends DataService {

  constructor(http: HttpClient) {
    super('https://api.github.com/users/octocat/followers', http);
  }
  
}
