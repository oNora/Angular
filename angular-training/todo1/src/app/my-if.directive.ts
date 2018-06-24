import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(private vc: ViewContainerRef, private template: TemplateRef<any>) { }

  @Input() set appMyIf(value: boolean) {
    if (value) {
      this.vc.createEmbeddedView(this.template, { name: 'Ivan' });
    } else {
      this.vc.clear();
    }
  }
}
