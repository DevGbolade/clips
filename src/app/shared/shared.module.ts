import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertsComponent } from './alerts/alerts.component';
import { EventBlockerDirective } from './directives/event-blocker.directive';
import { ClickEventEmitterDirective } from './directives/click-event-emitter.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    
  ],
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertsComponent,
    ClickEventEmitterDirective,
    EventBlockerDirective,
    
  ],
  exports: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertsComponent,
    ClickEventEmitterDirective,
    EventBlockerDirective,
  ]
})
export class SharedModule { }
