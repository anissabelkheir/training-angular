import { Directive, HostListener, ElementRef, Input } from '@angular/core';
// HostListener : nous fait écouter aux éléments qui ont cet attribut
@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @Input('format') format;
  @Input('appInputFormat') format;

  //best practice de mettre constructeur en premier
  constructor(private el: ElementRef) { // référence à un élément, service défini dans angular qui donne accès à l'objet DOM

  }

  // @HostListener('focus') onFocus() {
  //   console.log('onFocus')
  // }

  @HostListener('blur') onBlur() {
    // console.log('onBlur')
    let value = this.el.nativeElement.value;

    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase(); // qd je tape un texte dans l'input ça me le met en minuscules
    else
      this.el.nativeElement.value = value.toUpperCase();
  }


}