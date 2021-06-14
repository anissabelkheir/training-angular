import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListeService {

  getAuthors() {
    const list = ["Auteur 1", "Auteur 2", "Auteur 3"]
    return list;
  }
}
