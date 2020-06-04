import { Component, OnInit, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { FamilyComponent } from '../family/family.component';
import { SalaryComponent } from '../salary/salary.component';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  // @ContentChild(FamilyComponent) contentChild: FamilyComponent;
  // @ContentChildren(FamilyComponent) contentChildren : QueryList<FamilyComponent>


  constructor() { }

  ngOnInit(): void {
  }

}
