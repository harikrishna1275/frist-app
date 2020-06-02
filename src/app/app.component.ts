import { Component, OnInit, ViewChild, AfterViewInit, SimpleChanges, OnChanges, DoCheck } from '@angular/core';
import { Employee } from './model/employee';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { EmployeeComponetComponent } from './employee-componet/employee-componet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements  OnInit,DoCheck {
  ngDoCheck(): void {
    console.log("do check is called");
  }
  // ngAfterViewInit(): void {
  //   console.log('Values on ngAfterViewInit():');
  //   console.log("employee component:", this.employee);
  //   this.employee.show();
  //   }
  companyStep=0;
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
  item ={ "name": "Telephone",
  "manufactureDate": "1980-02-25T05:00:00.000Z",
  "price": 98
   };
   item1 ={ "name": null,
   "manufactureDate":null,
   "price": 98
    };
  events: string[] = [];
  step = 0;
  // @ViewChild(EmployeeComponetComponent) employee;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  addItem(newItem: string) {
    this.items.push(newItem);
  }


  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }


  crossOffItem(item: number) {
   this.count=item;
  }
  display() {
    console.log('hello hair,I am pressed');
    this.hari = 'hello hari,I am pressed';
    // this.employee.show();
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
    console.log("ng onit is called");
    this.setCurrentStyles();
    this.setCurrentClasses();
    this.setEmployeeDetails();
  }
  stepUpdate(event){
    this.companyStep=event;

  }

}
