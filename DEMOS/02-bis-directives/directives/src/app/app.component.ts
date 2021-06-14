import { Component } from '@angular/core';
import { faStar as sStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as rStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directives';

  //ngif
  list = [1, 2];
  // list = [];


  //switch case :
  viewMode = "map";


  //ngfor
  // courses = [
  //   { id:1, name: 'course 1' },
  //   { id:2, name: 'course 2' },
  //   { id:3, name: 'course 3' }
  // ]

  // onAdd() {
  //   this.courses.push({id:4, name: 'course 4'})
  // }

  // onRemove(course) {
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index, 1);
  // }

  // onChange(course) {
  //   course.name= "UPDATED";
  // }

  courses;
  loadCourses() {
    this.courses = [
      { id:1, name: 'course 1' },
      { id:2, name: 'course 2' },
      { id:3, name: 'course 3' }
    ]
  }

  trackCourse(index, course) {
    course ? course.id : undefined;
  }

  // ngClass :
  sStar = sStar;
  rStar = rStar;
  isSelected : boolean;

  onClick() {
    this.isSelected = !this.isSelected;
  }

  // ngStyle
  canSave = true;


  // ----
  // task = {
  //   title: 'Review applications',
  //   assignee: {
  //     name: 'John Smith'
  //   }
  // }

  task = {
    title: 'Review applications',
    assignee: null //simuler objet complexe qui met du temps à charger au complet
  }

}
