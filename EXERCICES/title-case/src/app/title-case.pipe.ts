import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return null;

    let words = value.split(" ");
    return words.map((word, index) => {
      if (index > 0 && this.isPreposition(word)) {
        word = word.toLowerCase();
      } else {
        word = this.toTitleCase(word);
      }

      return word;
    }).join(" ");
  }

  isPreposition(word: string): boolean {
    let prepositions = ["le", "la", "les", "of", "the", "in", "a", "dans", "un", "une"];
    return prepositions.includes(word.toLowerCase());
  }

  toTitleCase(word) {
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  }

}
