import { Component, OnInit, AfterContentInit, AfterViewInit, ContentChild, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Joke } from '../model/Joke';
import { SalaryComponent } from '../salary/salary.component';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit,AfterContentInit, AfterViewInit {
  hero = 'Magneta';
  jokes: Joke[] = [
    new Joke(
      "What did the cheese say when it looked in the mirror",
      "Hello (bhaskar)"
    ),
        new Joke(
      "What did the cheese say when it looked in the mirror",
      "Hello (katakam)"
    ),
        new Joke(
      "What did the cheese say when it looked in the mirror",
      "Hello (hari)"
    )
  ];
  @ViewChild(SalaryComponent) salaryChild:SalaryComponent;
  @ViewChildren(SalaryComponent) salaryChilder: QueryList<SalaryComponent>;
  @ContentChild(SalaryComponent) salaryContent:SalaryComponent;

  constructor() { }
  ngAfterContentInit(): void {
    console.log("content init started");
    console.log(this.salaryContent);
    console.log("content init completed");
  }
  ngAfterViewInit(): void {
    console.log("content after view started");
    console.log(this.salaryChild);
    let salaryChildren : SalaryComponent[] = this.salaryChilder.toArray();
    console.log(salaryChildren);
    console.log("content after view completed");


  }

  ngOnInit(): void {
    console.log("ng on it called");
  }

}
