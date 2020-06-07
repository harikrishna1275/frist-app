import { Component, OnInit, ContentChild, ContentChildren, QueryList, AfterContentInit, AfterContentChecked } from '@angular/core';
import { FamilyComponent } from '../family/family.component';
import { SalaryComponent } from '../salary/salary.component';
import { ChildrenDetailsComponent } from '../children-details/children-details.component';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit,AfterContentInit,AfterContentChecked {
  // @ContentChild(FamilyComponent) contentChild: FamilyComponent;
  // @ContentChildren(FamilyComponent) contentChildren : QueryList<FamilyComponent>
  @ContentChild(ChildrenDetailsComponent) childrenDetails: ChildrenDetailsComponent;

  private prevHero = '';


  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    console.log("content init started");
    console.log(this.childrenDetails);
    console.log("content init completed");

  }
  ngAfterContentChecked(): void {
    if (this.prevHero === this.childrenDetails.hero) {
      console.log('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.childrenDetails.hero;
      console.log('AfterContentChecked'+this.prevHero);
    }

  }

}
