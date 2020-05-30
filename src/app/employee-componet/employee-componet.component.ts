import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { passwordValidator } from '../custom-validators/password.directive';

@Component({
  selector: 'app-employee-componet',
  templateUrl: './employee-componet.component.html',
  styleUrls: ['./employee-componet.component.scss'],
})
export class EmployeeComponetComponent implements OnInit {
  userForm: FormGroup;
  displayObject = {};
  company = "Google";
  employeeStep=0;
  @Output() step = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) {

    this.userForm = this.formBuilder.group({
      company: new FormControl({value : this.company, disabled: true }),
      firstName: new FormControl({ value: '', disabled: false }, Validators.required),
      password: new FormControl({ value: '', disabled: false }, Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,9}')])),
      confirmPassword: new FormControl({ value: '', disabled: false }, Validators.required),
      email: new FormControl({ value: '', disabled: false }, Validators.compose([Validators.required, Validators.email])),
      address: this.formBuilder.group(
        {
          street: new FormControl({ value: '', disabled: false }, Validators.required),
          landMark: new FormControl({ value: '', disabled: false }),
          city: new FormControl({ value: '', disabled: false }, Validators.required)
        }
      ),
      aliases: this.formBuilder.array([
      ])
    },{ validators: passwordValidator });
    console.log(this.userForm);
  }
  ngOnInit() {
  }
  addAlias() {
    this.aliases.push(this.formBuilder.control('',Validators.required));
  }
  get aliases() {
    return this.userForm.get('aliases') as FormArray;
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
    this.step.emit(1);
    this.employeeStep=1;
  }
  resetForm() {
    this.userForm.reset();
  }
}

