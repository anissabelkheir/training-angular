import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  log(x) {
    console.log(x.value)
  }

  submit(f) {
    console.log(f.value)
  }

/* -------------------------------- etape #3 -------------------------------- */
  contactMethods = [
    { id: 1, name: 'mail'},
    { id: 2, name: 'phone'},
    { id: 3, name: 'sms'}
  ]


  data = {
    start: "11:40",
    end: "14:30"
  }


}
