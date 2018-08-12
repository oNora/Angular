import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  // the template is the structure of how we want the things to look and the view container is the location where we want to add things
  constructor(private vc: ViewContainerRef, private template: TemplateRef<any>) { }

  // using a setter makes it easy to know when the binding for the directive changes and to do something upon that change.
  @Input() set appMyIf(value: boolean) {
    if (value) {
      this.vc.createEmbeddedView(this.template, { name: 'Ivan' });
    } else {
      this.vc.clear();
    }
  }
}
