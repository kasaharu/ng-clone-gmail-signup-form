import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup, ValidatorFn } from '@ngneat/reactive-forms';
import { User } from '../../../../domain/user';

// tslint:disable-next-line:cyclomatic-complexity
const fullNameValidator: ValidatorFn<User> = (control) => {
  const firstName = control.get('firstName');
  const familyName = control.get('familyName');

  if (firstName?.value === '' && familyName?.value === '') {
    return { emptyFullName: true };
  }

  if (firstName?.value === '') {
    return { emptyFirstName: true };
  }

  if (familyName?.value === '') {
    return { emptyFamilyName: true };
  }

  return null;
};

// tslint:disable-next-line:cyclomatic-complexity
const passwordConfirmationValidator: ValidatorFn<User> = (control) => {
  const password = control.get('password');
  const passwordConfirmation = control.get('passwordConfirmation');

  if (password === null || passwordConfirmation === null) {
    return null;
  }

  return password.errors !== null || password.value === passwordConfirmation.value ? null : { unmatchPassword: true };
};

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupFormComponent implements OnInit {
  constructor(private readonly fb: FormBuilder) {}
  form: FormGroup<User> = this.fb.group(
    {
      firstName: ['', Validators.required],
      familyName: ['', Validators.required],
      userName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirmation: [''],
    },
    { validators: [fullNameValidator, passwordConfirmationValidator] },
  );

  get userName() {
    return this.form.get('userName');
  }

  get password() {
    return this.form.get('password');
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.valid) {
      // tslint:disable-next-line:no-console
      console.log(this.form.value);
      return;
    }
    // tslint:disable-next-line:no-console
    console.log('this form is invalid. this.form.invalid = ', this.form.invalid);
  }
}
