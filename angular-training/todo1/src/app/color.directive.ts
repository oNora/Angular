import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {


  @Input() set appColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

  // Since we want to be able to run Angular on different environmets we don't want to access the DOM directly because
  // DOM only exists in the browser and it doesnt on the Server or inside a Web Worker. This is the reason why we use
  // Renderer to apply changes on the DOM.
  constructor(private el: ElementRef, private renderer: Renderer2) { }

}
