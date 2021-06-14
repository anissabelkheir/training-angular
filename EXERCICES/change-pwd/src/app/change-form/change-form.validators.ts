import { ValidationErrors, AbstractControl } from '@angular/forms';

export class changePassValidator {


    static passIsInvalid(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value != 1234) {
                    resolve({passIsInvalid: true})
                } else {
                    resolve(null)
                }
            }, 200)
        })
    }

    static pwdMustMatch(control: AbstractControl) : ValidationErrors | null {
       let first = control.get('first');
       let second = control.get('second');
       if (first.value != second.value) {
           return { pwdMustMatch : true}
       } else {
           return null
       }
    }
}