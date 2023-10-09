import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appEventBlocker]'
})
export class EventBlockerDirective {

  @HostListener('drop', ['$event'])
  @HostListener('dragover', ['$event'])
  @HostListener('dragleave', ['$event'])
  @HostListener('dragenter', ['$event'])
  public handleEvent(event: Event) {
    event.preventDefault();
    event.stopPropagation()
    console.log('it got here and we celebrate')
  
  }

  

}
