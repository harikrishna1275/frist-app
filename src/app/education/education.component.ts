import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() companyStep :number;


  constructor() { }

  ngOnInit(): void {
  }

}
