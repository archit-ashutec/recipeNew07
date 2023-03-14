import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]',
})
export class placeholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
