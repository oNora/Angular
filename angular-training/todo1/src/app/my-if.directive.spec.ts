import { MyIfDirective } from './my-if.directive';
import { TemplateRef, ViewContainerRef } from '@angular/core';

describe('MyIfDirective', () => {
  it('should create an instance', () => {
    const directive = new MyIfDirective(ViewContainerRef, TemplateRef);
    expect(directive).toBeTruthy();
  });
});
