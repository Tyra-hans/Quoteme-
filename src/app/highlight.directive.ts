import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = 'white';






  }

}
