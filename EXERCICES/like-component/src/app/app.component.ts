import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'like-component';

  // tweet = {
  //   body : "...",
  //   likesCount: 10,
  //   isLiked : true
  // }

  tweets = [
    {
      body : "Premier tweet",
      likesCount: 40,
      isLiked : true
    },
    {
      body : "Deuxième tweet",
      likesCount: 23,
      isLiked : false
    },
    {
      body : "Troisième tweet",
      likesCount: 10,
      isLiked : false
    }
  ]

}
