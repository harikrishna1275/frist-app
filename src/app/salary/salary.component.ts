import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../model/Joke';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {
  @Input("joke") data: Joke;

  constructor() { }

  ngOnInit(): void {
  }

}
