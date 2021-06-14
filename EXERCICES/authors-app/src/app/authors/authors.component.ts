import { ListeService } from './../liste.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  title: string = "Auteurs";
  authors: string[];

  constructor(service: ListeService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {
    // this.title = this.authors.length + " auteurs";
  }

}
