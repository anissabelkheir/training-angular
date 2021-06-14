import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories = [
    {id : 1, name: "Development" },
    {id : 2, name: "Art" },
    {id : 3, name: "Language" }
  ]

  submit(f) {
    console.log(f)
  }
}
