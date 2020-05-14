import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-employee-componet',
  templateUrl: './employee-componet.component.html',
  styleUrls: ['./employee-componet.component.scss'],
})
export class EmployeeComponetComponent implements OnInit {
  userForm: FormGroup;
  displayObject={};

  constructor(private formBuilder: FormBuilder) {

    this.userForm = this.formBuilder.group({
      firstName: '',
      password: '',
      confirmPassword: ''
    });

    console.log(this.userForm);
  }
  ngOnInit(){
  }

  saveUser() {
    this.displayObject={
      "firstName":this.userForm.get('firstName').value,
      "password":this.userForm.get('password').value,
      "confirmPassword":this.userForm.get('confirmPassword').value,
    }
    // this.userForm.setValue({firstName:"katakam",password:"Mar@2020",confirmPassword:"Sep@2020"})
    this.userForm.patchValue({firstName: 'Mahesh'});
  }
  resetForm() {
    this.userForm.reset();
}
}

