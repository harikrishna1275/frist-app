import { Component, OnInit } from '@angular/core';
import { Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hari';
  hari = '';
  imageDisplay = true;
  font = 'xxx-large';
  styleExpr = 'color: orange;';
  classExpr = 'female-sex2 position-movement';
  states: string[] = ['andhra', 'telagana', 'tamilnadu'];
  hello = 'bhaskar';
  itemImageUrl = '../assets/Spring-Promo.jpg';
  isSpecial = true;
  canSave = true;
  isUnchanged = true;
  currentStyles: {};
  currentEmployee: Employee;
  items = [];
  count:number;
  addItem(newItem: string) {
    this.items.push(newItem);
  }

  crossOffItem(item: number) {
   this.count=item;
  }
  display() {
    console.log('hello hair,I am pressed');
    this.hari = 'hello hari,I am pressed';
  }
  radioChange($event) {
    this.font = 'large';
  }
  vijayawadaChange($event) {
    this.styleExpr = 'color: blue;font-size: xxx-large;';
  }

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
      'color':'red'
    };
  }
  currentClasses: {};
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      'saveable': this.canSave,
      'modified': this.isUnchanged
    };
  }
setEmployeeDetails(){
  this.currentEmployee.name="bhaskar";
  this.currentEmployee.id=23423;
  this.currentEmployee.salary=234;
  this.currentEmployee.address="chilakaluripeta"
}

  ngOnInit() {
    this.setCurrentStyles();
    this.setCurrentClasses();
    this.setEmployeeDetails();
  }
}
