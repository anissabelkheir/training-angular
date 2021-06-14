import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'listComponent',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input('elements') elements;

  constructor() { }

  ngOnInit() {
    console.log(this.elements)
  }

}
