import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  /* ----------------------------- Etape #1 - read ---------------------------- */
  // posts;
  // constructor(http: HttpClient) {
  //   http.get('http://localhost:3000/posts')
  //     .subscribe(response => {
  //       // console.log(response)
  //       this.posts = response;
  //     })
  // }

/* ---------------------------- Etape #2 - create --------------------------- */

  // posts;
  // private url = 'http://localhost:3000/posts'; // créer la variable pour la rendre accessible dans le create
  // constructor(private http: HttpClient) { // ajouter le private pour le rendre accessible dans le create
  //   http.get(this.url)
  //     .subscribe(response => {
  //       this.posts = response;
  //       this.posts.reverse();
  //     })
  // }

  // createPost(input: HTMLInputElement) {
  //   let post = { title : input.value }
  //   input.value = ''; // vider le champ une fois qu'on a récupéré ce qu'il contenait
  //   this.http.post(this.url, post)
  //     .subscribe(response => {
  //       // console.log(response)
  //     })
  // }

/* ---------------------------- Etape #3 - update --------------------------- */

  // updatePost(post) {
  //   // this.http.patch() // modifie en partie
  //   // this.http.put() // modifie tout !
  //   // Toutes les api ne supportent pas put et patch. Donc vérifier la doc de l'api.
  //   this.http.patch(this.url + '/' + post.id, {isRead : !post.isRead})
  //     .subscribe(response => {
  //       console.log(response)
  //     })
  // }

/* ---------------------------- Etape #4 - delete --------------------------- */

  // deletePost(post) {
  //   this.http.delete(this.url + '/' + post.id)
  //     .subscribe(response => {
  //       console.log(response)
  //     })
  // }


/* ---------------------------- Etape #5 - OnInit --------------------------- */

  // posts;
  // private url = 'http://localhost:3000/posts';

  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.readPosts();
  // }

  // createPost(input: HTMLInputElement) {
  //   let post = { title : input.value }
  //   input.value = '';
  //   this.http.post(this.url, post)
  //     .subscribe(() => {
  //       this.readPosts();
  //     })
  // }

  // updatePost(post) {
  //   this.http.patch(this.url + '/' + post.id, {isRead : !post.isRead})
  //     .subscribe(() => {
  //       this.readPosts();
  //     })
  // }

  // deletePost(post) {
  //   this.http.delete(this.url + '/' + post.id)
  //     .subscribe(() => {
  //       this.readPosts();
  //     })
  // }

  // readPosts() {
  //   this.http.get(this.url)
  //     .subscribe(response => {
  //       this.posts = response;
  //       this.posts.reverse();
  //     })
  // }

/* --------------------------- Etape #6 - service --------------------------- */

  // posts;
  // constructor(private service: PostsService) {}

  // ngOnInit() {
  //   this.readPosts();
  // }

  // createPost(input: HTMLInputElement) {
  //   let post = { title : input.value }
  //   input.value = '';
  //   this.service.createPost(post)
  //     .subscribe(() => {
  //       this.readPosts();
  //     })
  // }

  // updatePost(post) {
  //   this.service.updatePost(post)
  //     .subscribe(() => {
  //       this.readPosts();
  //     })
  // }

  // deletePost(post) {
  //   this.service.deletePost(post)
  //     .subscribe(() => {
  //       this.readPosts();
  //     })
  // }

  // readPosts() {
  //   this.service.readAll()
  //     .subscribe(response => {
  //       this.posts = response;
  //       this.posts.reverse();
  //     })
  // }

/* --------------------- Etape #7 - gestion des erreurs --------------------- */

  // posts;
  // constructor(private service: PostsService) {}

  // ngOnInit() {
  //   this.readPosts();
  // }

  // createPost(input: HTMLInputElement) {
  //   let post = { title : input.value }
  //   input.value = '';
  //   this.service.createPost(post)
  //     .subscribe(
  //       () => {
  //         this.readPosts();
  //       },
  //       error => { // un exemple d'erreur "unexpected"
  //         alert("Unexpected Error") // dans une vraie app, ceci prendra la forme d'une petite notif qui pop sur la page côté user
  //         console.error(error) // dans une vraie app, ceci sera loggué côté server dans un fichier .log
  //       }
  //       )
  // }

  // updatePost(post) {
  //   this.service.updatePost(post)
  //     .subscribe(
  //       () => {
  //         this.readPosts();
  //       },
  //       (error: Response) => {
  //         if (error.status == 404) {
  //           alert("Not Found");
  //         } else {
  //           alert("Unexpected Error")
  //         }

  //         console.error(error);
  //       })
  // }

  // deletePost(post) {
  //   this.service.deletePost(post)
  //     .subscribe(() => {
  //       this.readPosts();
  //     })
  // }

  // readPosts() {
  //   this.service.readAll()
  //     .subscribe(response => {
  //       this.posts = response;
  //       this.posts.reverse();
  //     })
  // }

/* ------------- Etape #8 - Gestion des erreurs dans le service ------------- */

  // posts;
  // constructor(private service: PostsService) {}

  // ngOnInit() {
  //   this.readPosts();
  // }

  // createPost(input: HTMLInputElement) {
  //   let post = { title : input.value }
  //   input.value = '';
  //   this.service.createPost(post)
  //     .subscribe(() => {
  //       this.readPosts();
  //     })
  // }

  // updatePost(post) {
  //   this.service.updatePost(post)
  //     .subscribe(() => {
  //       this.readPosts();
  //     })
  // }

  // deletePost(post) {
  //   this.service.deletePost(post)
  //     .subscribe(() => {
  //       this.readPosts();
  //     })
  // }

  // readPosts() {
  //   this.service.readAll()
  //     .subscribe(response => {
  //       this.posts = response;
  //       this.posts.reverse();
  //     })
  // }

/* ----------------- Etape #9 - passage dans le data service ---------------- */

  posts;
  constructor(private service: PostsService) {}

  ngOnInit() {
    this.readPosts();
  }

  createPost(input: HTMLInputElement) {
    let post = { title : input.value }
    input.value = '';
    this.service.create(post)
      .subscribe(() => {
        this.readPosts();
      })
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(() => {
        this.readPosts();
      })
  }

  deletePost(post) {
    this.service.delete(post)
      .subscribe(() => {
        this.readPosts();
      })
  }

  readPosts() {
    this.service.readAll()
      .subscribe(response => {
        this.posts = response;
        this.posts.reverse();
      })
  }

}
