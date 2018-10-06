import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cons',
  templateUrl: './cons.component.html',
  styleUrls: ['./cons.component.css']
})
export class ConsComponent {
  @Input() data: any;
  @Output() onRemove = new EventEmitter<string>();

  constructor() {
  }

  notifyDelete(index) {
    this.onRemove.emit(index);
  }

}
