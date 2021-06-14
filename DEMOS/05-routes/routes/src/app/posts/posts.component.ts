import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  posts = [
    { id: 1, title : 'hello t etertetr rt etet re t'},
    { id: 2, title : 'hello t etertetr rt etet re t'},
    { id: 3, title : 'hello t etertetr rt etet re t'},
    { id: 4, title : 'hello t etertetr rt etet re t'},
    { id: 5, title : 'hello t etertetr rt etet re t'}
  ]

}
