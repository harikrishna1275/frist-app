import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  @Input() companyStep :number;
  @Output() step = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  continue(){
    this.step.emit(2);
  }
}
