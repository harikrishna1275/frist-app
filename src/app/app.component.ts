import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hari';
  hari="";
  imageDisplay = true;
  font="xxx-large";
  styleExpr="color: orange;";
  classExpr="female-sex2 position-movement";
  states: string[] = ['andhra','telagana','tamilnadu'];
  hello = 'bhaskar'
  itemImageUrl="../assets/Spring-Promo.jpg";
  display(){
    console.log("hello hair,I am pressed");
    this.hari="hello hari,I am pressed";
  }
  radioChange($event){
    this.font="large";

  }
  vijayawadaChange($event){
    this.styleExpr="color: blue;font-size: xxx-large;";
  }
}
