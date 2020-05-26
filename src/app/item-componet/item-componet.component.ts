import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-componet',
  templateUrl: './item-componet.component.html',
  styleUrls: ['./item-componet.component.scss']
})
export class ItemComponetComponent implements OnInit {

  @Input() item1 :string; // decorate the property with @Input()
  @Output() newItemEvent = new EventEmitter<string>();
  lineThrough = '';

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }



}
