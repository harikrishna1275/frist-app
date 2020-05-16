import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

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
      company: new FormControl({value: 'Google', disabled: true}),
      firstName: new FormControl({value: '', disabled: false},Validators.required),
      password: new FormControl({value: '', disabled: false},Validators.compose(
        [Validators.minLength(8),Validators.maxLength(10), Validators.required])),
      confirmPassword: new FormControl({value: 'Bhaskar', disabled: false}),
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

