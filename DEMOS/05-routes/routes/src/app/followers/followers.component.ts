import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followers; //ne le mettre ici qu'après avoir faire le combineLatest
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // pour récupérer le path je dois donc souscrire à observable ou faire snapshot : 
    // this.route.paramMap.subscribe();
    // let id = this.route.snapshot.paramMap.get('id');

    // pour les query c pareil :
    // this.route.queryParamMap.subscribe();
    // let page = this.route.snapshot.queryParamMap.get('page');


    // si c'est un système de pages, il y a des chances que je reste sur la meme page (pas de rechargement), donc snapshot pas possible
    // comment souscrire aux deux observables plutôt que de faire ça ?

    // this.route.paramMap
    //   .subscribe(params => {

    //   });
    // this.route.queryParamMap
    //   .subscribe(params => {
        
    //   });

    // Observables ne fonctionnent pas.... A RESOUDRE !!!
    // A quoi ça devrait ressembler :
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .subscribe(combine => {
        let id = combine[0].get('id');
        let page = combine[1].get('page');

        //imaginons qu'on ait un service avec ces params, ça donnerait ça :
        // this.service.getAll({id: id, page: page})


        this.followers = [
          { id: 1, img: "https://picsum.photos/id/23/80/80", login: 'toto'},
          { id: 2, img: "https://picsum.photos/id/34/80/80", login: 'tata'},
          { id: 3, img: "https://picsum.photos/id/56/80/80", login: 'youpla'},
          { id: 4, img: "https://picsum.photos/id/45/80/80", login: 'boum'},
          { id: 5, img: "https://picsum.photos/id/67/80/80", login: 'tralala'},
          { id: 6, img: "https://picsum.photos/id/12/80/80", login: 'hey'},
        ]
      })

  }

  // followers = [
  //   { id: 1, img: "https://picsum.photos/id/23/80/80", login: 'toto'},
  //   { id: 2, img: "https://picsum.photos/id/34/80/80", login: 'tata'},
  //   { id: 3, img: "https://picsum.photos/id/56/80/80", login: 'youpla'},
  //   { id: 4, img: "https://picsum.photos/id/45/80/80", login: 'boum'},
  //   { id: 5, img: "https://picsum.photos/id/67/80/80", login: 'tralala'},
  //   { id: 6, img: "https://picsum.photos/id/12/80/80", login: 'hey'},
  // ]

}
