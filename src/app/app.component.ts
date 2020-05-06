import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hari';
  hari=""
  mycolor="color: blue;"
  states: string[] = ['andhra','telagana','tamilnadu'];
  hello = 'bhaskar'
  display(){
    console.log("hello hair,I am pressed");
    this.hari="hello hari,I am pressed";
  }
}
