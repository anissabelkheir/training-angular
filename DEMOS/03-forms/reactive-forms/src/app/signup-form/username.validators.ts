/* -------------------------------- Etape #5 -------------------------------- */

import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true }; // je peux utiliser un objet plus complexe à la place de true, comme pour le minlength
        }
        return null;
    }


/* -------------------------------- Etape #6 - async operations -------------------------------- */
    // static shouldBeUnique(control: AbstractControl) : ValidationErrors | null {
    //     // appel au serveur via service (get) - simulation ici, parce qu'on n'a pas encore vu cmt le faire
    //     setTimeout(() => {
    //         if (control.value == "anissa") {
    //             return { shouldBeUnique : true }
    //         }
    //         return null;
    //     }, 2000)

    //     // CA VA GENERER UNE ERREUR ! PARCE QU'ON NE RETOURNE RIEN...   => On ne va pas pouvoir utiliser cette méthode là -> utiliser un asynvalidator function, cf la suite
    // }

/* ----------------------- Etape #7 - async validators ---------------------- */

    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> { // je passe une promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "anissa") {
                    resolve({ shouldBeUnique : true });
                } else {
                    resolve(null);
                }
            }, 2000)
        });
    }



}