import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[appMyFor]'
})
export class MyForDirective {

    views: any[];

    // using a setter makes it easy to know when the binding for the directive changes and to do something upon that change.
    @Input() set appMyFor(items: any[]) {
        // we want to check if the lenght of the items changed so we can clear the view container (this is not the best way to implement it)
        // if we don't cleant the container every time the change detection runs we will get a new embeded view added to the container.
        if (this.views && this.views.length !== items.length) {
            this.vc.clear();
            this.views = null;
        }
        // if the views are already rendered skip adding them again
        if (this.views) { return; }
        this.views = items.map((item, index) => {
            return this.vc.createEmbeddedView(this.templateRef, { $implicit: item, index });
        });
    }
    // the template is the structure of how we want the things to look and the view container is the location where we want to add things
    constructor(private templateRef: TemplateRef<any>, private vc: ViewContainerRef) { }

}
