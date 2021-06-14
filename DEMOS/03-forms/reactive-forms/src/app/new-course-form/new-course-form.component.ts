import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent {
  // form = new FormGroup({
  //   topics : new FormArray([])
  // })

  // addTopic(topic: HTMLInputElement) {
  //   (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
  //   topic.value = "";
  // }


  // REFACTORING (et faire le même dans l'html) :
  form = new FormGroup({
    topics : new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  // Ajout d'un click pour remove :
  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }


/* ---------------------------- Etape FormBuilder --------------------------- */

  // approche #1
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics : new FormArray([])
  // })

  // form;

  // // approche #2
  // constructor(fb : FormBuilder) {
  //   this.form = fb.group({
  //     name: ['', Validators.required],
  //     contact: fb.group({
  //       email: [],
  //       phone: []
  //     }),
  //     topics: fb.array([])
  //   })
  // }


}
