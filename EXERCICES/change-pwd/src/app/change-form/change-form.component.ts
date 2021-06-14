import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { changePassValidator } from './change-form.validators';

@Component({
  selector: 'change-form',
  templateUrl: './change-form.component.html',
  styleUrls: ['./change-form.component.scss']
})
export class ChangeFormComponent  {

  // version avec formgroup sans sous-groupes : attention à adapter les getters et la class d'erreur
  // form = new FormGroup({
  //   old: new FormControl('', Validators.required, changePassValidator.passIsInvalid),
  //   first: new FormControl('', Validators.required),
  //   second: new FormControl('', Validators.required)
  //   },
  //   {
  //     validators: changePassValidator.pwdMustMatch
  //   });


  // version avec le formbuilder et un sous-groupe :
  form;
  constructor(fb : FormBuilder) {
    this.form = fb.group({
      old: ['', Validators.required, changePassValidator.passIsInvalid],
      new: fb.group({
        first: ['', Validators.required],
        second: ['', Validators.required]
      },
      {
        validators: changePassValidator.pwdMustMatch
      })
    })
  }

  get old() {
    return this.form.get('old');
  }

  get first() {
    return this.form.get('new.first');
  }

  get second() {
    return this.form.get('new.second');
  }

  get new() {
    return this.form.get('new');
  }
}
