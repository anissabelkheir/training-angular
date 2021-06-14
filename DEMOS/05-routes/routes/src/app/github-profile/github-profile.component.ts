import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { } // j'ajoute le router qd je fais le submit

  username: string;
  ngOnInit() {
    // this.route.paramMap
    //   .subscribe(params => {
    //     // console.log(params)
    //     let username = params.get('username') // astuce si on veut bosser avec number : let id = +params.get('id')
    //     // console.log(username)
    //     this.username = username;
    //   });

    // Montrer exemple avec un console.log('tralalalalal') :
    // quand je change de page et que je reviens -> un nouveau console.log
    // si j'utilise le bouton "next" -> pas de nouveau console.log

    //Si je suis absolument sûre que mon visiteur doit changer de page, choisir un autre follower et revenir sur cette page, je peux faire :
    this.username = this.route.snapshot.paramMap.get('username');
  }


  // si je veux naviguer par bouton :
  submit() {
    this.router.navigate(['/followers'],{
      queryParams : { page: 1, order: "newest" }
    });
  }

}
