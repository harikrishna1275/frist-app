import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ChildrenDetailsComponent } from '../children-details/children-details.component';

@Component({
  selector: 'app-wife-details',
  templateUrl: './wife-details.component.html',
  styleUrls: ['./wife-details.component.scss']
})
export class WifeDetailsComponent implements OnInit,AfterViewInit,AfterViewChecked {
  private prevHero = '';
  @ViewChild(ChildrenDetailsComponent) childrenDetails: ChildrenDetailsComponent;

  constructor() { }
  ngAfterViewInit(): void {
    console.log("view child is started");
    console.log(this.childrenDetails);
    console.log("view child is completed");
  }
  ngAfterViewChecked(): void {
    console.log("view checked started");
    if (this.prevHero === this.childrenDetails.hero) {
      console.log('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.childrenDetails.hero;
      console.log('AfterViewChecked'+this.prevHero);
    }
    console.log("view checked completed");
  }

  ngOnInit(): void {
  }

}
