import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
    transform(value: string, limite: number = 50): any { // obligé d'avoir ça pcq j'implémente l'interface PipeTransform (cf doc angular sur PipeTransform)
        if (!value) // si le texte est vide, return null;
            return null;

        //let actualLimit = limite ? limite : 50;
        return value.substr(0, limite) + '...';
    }
}