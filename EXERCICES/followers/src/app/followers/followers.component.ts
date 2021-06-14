import { FollowersService } from './../common/services/followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  constructor(private service: FollowersService) { }

  followers;
  
  ngOnInit() {
    this.service.getAll()
      .subscribe(response => {
        this.followers = response;
      });
  }

}
