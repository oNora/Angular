import { MyForDirective } from './my-for.directive';
import { TemplateRef, ViewContainerRef } from '@angular/core';

describe('MyForDirective', () => {
  it('should create an instance', () => {
    const directive = new MyForDirective(TemplateRef, ViewContainerRef);
    expect(directive).toBeTruthy();
  });
});
