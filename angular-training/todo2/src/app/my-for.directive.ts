import { Directive, TemplateRef, ViewContainerRef, Input, DoCheck } from '@angular/core';

@Directive({
    selector: '[appMyFor]'
})
export class MyForDirective implements DoCheck {

    views: any[];
    items: any[];
    isDirty: boolean;

    // using a setter makes it easy to know when the binding for the directive changes and to do something upon that change.
    @Input() set appMyFor(items: any[]) {
        this.items = items;
        this.isDirty = true;
    }

    // the template is the structure of how we want the things to look and the view container is the location where we want to add things
    constructor(private templateRef: TemplateRef<any>, private vc: ViewContainerRef) { }


    // remove all logic for check changes here
    _applyChanges() {
        this.vc.clear();
        this.views = this.items.map((item, index) => {
            return this.vc.createEmbeddedView(this.templateRef, { $implicit: item, index });
        });
        this.isDirty = false;
    }

    // use livecycle hooks ot activate check for changes
    ngDoCheck() {
        if (this.isDirty || this.items.length !== this.views.length) {
            this._applyChanges();
        }
    }
}
