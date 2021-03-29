import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupFormComponent implements OnInit {
  constructor(private readonly fb: FormBuilder) {}
  form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    familyName: ['', Validators.required],
    userName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    passwordConfirmation: [''],
  });

  get firstName() {
    return this.form.get('firstName');
  }

  get familyName() {
    return this.form.get('familyName');
  }

  get userName() {
    return this.form.get('userName');
  }

  get password() {
    return this.form.get('password');
  }

  get passwordConfirmation() {
    return this.form.get('passwordConfirmation');
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
