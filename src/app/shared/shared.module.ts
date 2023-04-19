import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent, ModalComponent],
  exports: [
    ModalComponent
  ]
})
export class SharedModule { }
