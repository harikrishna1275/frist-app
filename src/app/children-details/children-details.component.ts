import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-children-details',
  templateUrl: './children-details.component.html',
  styleUrls: ['./children-details.component.scss']
})
export class ChildrenDetailsComponent implements OnInit {
  hero:string;

  constructor() { }


  ngOnInit(): void {
  }

}
