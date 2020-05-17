import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-componet',
  templateUrl: './employee-componet.component.html',
  styleUrls: ['./employee-componet.component.scss'],
})
export class EmployeeComponetComponent implements OnInit {
  userForm: FormGroup;
  displayObject = {};
  company = "Google";

  constructor(private formBuilder: FormBuilder) {

    this.userForm = this.formBuilder.group({
      company: new FormControl({value : this.company, disabled: true }),
      firstName: new FormControl({ value: '', disabled: false }, Validators.required),
      password: new FormControl({ value: '', disabled: false }, Validators.compose([Validators.minLength(8), Validators.maxLength(10), Validators.required])),
      confirmPassword: new FormControl({ value: '', disabled: false }, Validators.required),
      email: new FormControl({ value: '', disabled: false }, Validators.compose([Validators.required, Validators.email])),
      address: this.formBuilder.group(
        {
          street: new FormControl({ value: '', disabled: false }, Validators.required),
          landMark: new FormControl({ value: '', disabled: false }),
          city: new FormControl({ value: '', disabled: false }, Validators.required)
        }
      )
    });
    console.log(this.userForm);
  }
  ngOnInit() {
  }

  saveUser() {
    this.displayObject = {
      "firstName": this.userForm.get('firstName').value,
      "password": this.userForm.get('password').value,
      "confirmPassword": this.userForm.get('confirmPassword').value,
      "email": this.userForm.get('email').value,
      "street": this.userForm.get('address').get('street').value,
      "landMark": this.userForm.get('address').get('landMark').value,
      "city": this.userForm.get('address').get('city').value
    }
    // this.userForm.setValue({firstName:"katakam",password:"Mar@2020",confirmPassword:"Sep@2020"})
    // this.userForm.patchValue({ firstName: 'Mahesh' });
  }
  resetForm() {
    this.userForm.reset();
  }
}

