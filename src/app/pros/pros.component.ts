import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pros',
  templateUrl: './pros.component.html',
  styleUrls: ['./pros.component.css']
})
export class ProsComponent {
  @Input() data: any;
  @Output() onRemove = new EventEmitter<string>();

  constructor() {
  }

  notifyDelete(index) {
    this.onRemove.emit(index);
  }

}
