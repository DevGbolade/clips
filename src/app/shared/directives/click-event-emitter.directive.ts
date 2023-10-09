import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickEventEmitter]'
})
export class ClickEventEmitterDirective {

  @HostListener('click', ['$event'])
  public handleClick(event: Event) {
    console.log('clicking!!!')
  }
}
