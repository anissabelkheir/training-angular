import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

/* -------------------------------- Etape #1 -------------------------------- */

  // form = new FormGroup({
  //   username : new FormControl(), // ou new FormGroup()
  //   password : new FormControl()
  // })

/* ------------------- Etape #2 - ajouter de la validation ------------------ */

// form = new FormGroup({
//   username : new FormControl('', Validators.required), // Validators est natif, l'importer. Du coup, il contient tous les validateurs qu'on pouvait trouver dans l'html
//   password : new FormControl('', Validators.required)
// })

/* ----------------------- Etape #3 - créer un getter ----------------------- */

// form = new FormGroup({
//   username : new FormControl('', Validators.required),
//   password : new FormControl('', Validators.required)
// })

// get username() {
//   return this.form.get('username');
// }

/* -------------------- Etape #4 - validateurs multiples -------------------- */
// form = new FormGroup({
//   username : new FormControl('', [
//     Validators.required,
//     Validators.minLength(3)
//   ]),
//   password : new FormControl('', Validators.required)
// })

// get username() {
//   return this.form.get('username');
// }

/* ---------------------- Etape #5 - custom validation ---------------------- */

// créer un username.validators.ts dans le dossier du composant et y créer un validateur
// mais dans une application + complexe, on ne mettra pas ça là, mais on mettra tous les validateurs dans un dossier commun (ex: src>app>commons>validators)
// form = new FormGroup({
//   username : new FormControl('', [
//     Validators.required,
//     Validators.minLength(3),
//     UsernameValidators.cannotContainSpace
//   ]),
//   password : new FormControl('', Validators.required)
// })

// get username() {
//   return this.form.get('username');
// }



/* -------------------------------- Etape #7 - async validator function ------------------------------- */

// form = new FormGroup({
//   username : new FormControl('', [
//     Validators.required,
//     Validators.minLength(3),
//     UsernameValidators.cannotContainSpace
//     ],
//     UsernameValidators.shouldBeUnique), // en 3eme argument je peux appeler un asyncValidatorFn
//   password : new FormControl('', Validators.required)
// })

// get username() {
//   return this.form.get('username');
// }


/* ---------------------------- Etape #8 - loader --------------------------- */

  // form = new FormGroup({
  //   username : new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3),
  //     UsernameValidators.cannotContainSpace
  //     ],
  //     UsernameValidators.shouldBeUnique),
  //   password : new FormControl('', Validators.required)
  // })

  // get username() {
  //   return this.form.get('username');
  // }

/* ---------------------- Etape #9 - valider qd on soumet --------------------- */

  // form = new FormGroup({
  //   username : new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3),
  //     UsernameValidators.cannotContainSpace
  //     ],
  //     UsernameValidators.shouldBeUnique),
  //   password : new FormControl('', Validators.required)
  // })

  // get username() {
  //   return this.form.get('username');
  // }

  // login() {
  //    // quand on a créé un service pour faire ça
  //   // let isValid = authService.login(this.form.value);
  //   // if (!isValid) {
  //   //   this.form.setErrors({
  //   //     invalidLogin: true,
  //   //   })
  //   // }

  //   // vu qu'on n'a pas de service, on va juste mettre les erreurs d'office :
  //   this.form.setErrors({
  //     invalidLogin: true
  //   })
  // }

/* -------------------------------- Etape 10 - formgroup imbriqués ------------------------------- */

  form = new FormGroup({
    account: new FormGroup({ // ajouter un groupe de champs -> dans l'html changer le formcontrolname
      username : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
        ],
        UsernameValidators.shouldBeUnique),
      password : new FormControl('', Validators.required)
    })
  })

  get username() {
    return this.form.get('account.username'); // changer ça ici aussi
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    })
  }

}
