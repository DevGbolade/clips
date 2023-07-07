import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  @Input() color = 'blue'
  constructor() { }

  ngOnInit(): void {
  }


  get bgColor() {
    return `bg-${this.color}-400`
  }

}
