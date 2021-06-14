import { Component, OnInit } from '@angular/core';
import { PictureService } from '../rest.service';

@Component({
  selector: 'archives-list',
  templateUrl: './archives-list.component.html',
  styleUrls: ['./archives-list.component.scss']
})
export class ArchivesListComponent implements OnInit {

  constructor(private service : PictureService) { }

  ngOnInit() {
    this.service.getAll('author')
      .subscribe(response => {
        console.log(response)
      });
  }

  addElem() {
    let test = {
      "id": 3,
      "age" : 45,
      "name" : "Test"
    };
    this.service.create(test)
      .subscribe(response => {
        console.log(response)
      })
  }


  archivesList = [
    { id: 1, year: 2019, month: 1 },
    { id: 2, year: 2019, month: 2 },
    { id: 3, year: 2019, month: 3 },
    { id: 4, year: 2019, month: 4 },
    { id: 5, year: 2019, month: 5 },
  ]

}
