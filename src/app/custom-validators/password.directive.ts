import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS, ValidatorFn, FormGroup } from '@angular/forms';
import { Directive } from '@angular/core';

export const passwordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value ? { 'passwordRevealed': true } : null;
};


@Directive({
  selector: '[appPasswordRevealed]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PassworValidatorDirective, multi: true }]
})
export class PassworValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return passwordValidator(control)
  }
}
