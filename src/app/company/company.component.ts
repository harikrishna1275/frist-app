import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit,OnChanges {

  @Input() companyStep :number;
  @Input() power:string;
  @Output() step = new EventEmitter<number>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ng on changes Called");
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnInit(): void {
    console.log("called ngOnit method");
  }
  continue(){
    this.step.emit(2);
  }
}
