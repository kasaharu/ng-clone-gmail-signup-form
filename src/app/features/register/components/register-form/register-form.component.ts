import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, ValidatorFn } from '@ngneat/reactive-forms';
import { Address, BasicInformation } from '../../domain/models';

// tslint:disable-next-line:cyclomatic-complexity
const fullNameValidator: ValidatorFn<BasicInformation> = (control) => {
  const name = control.get('name');
  const firstName = name?.get('firstName');
  const familyName = name?.get('familyName');

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

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent implements OnInit {
  constructor(private readonly fb: FormBuilder) {}
  checked = false;

  basicForm: FormGroup<BasicInformation> = this.fb.group(
    {
      name: new FormGroup({
        firstName: new FormControl(''),
        familyName: new FormControl(''),
      }),
      gender: [null],
      birthday: new FormGroup({
        year: new FormControl(null),
        month: new FormControl(null),
        day: new FormControl(null),
      }),
      emailAdress: [''],
      password: [''],
      passwordConfirmation: [''],
    },
    { validators: [fullNameValidator] },
  );

  addressFrom: FormGroup<Address> = this.fb.group({
    zipCode: [null, Validators.required],
    prefecture: [''],
    municipality: [''],
    street: [''],
    room: [''],
  });

  registrationForm = new FormGroup({
    basic: this.basicForm,
    address: this.addressFrom,
  });

  ngOnInit(): void {}

  onSubmit(): void {
    this.checked = true;
    console.log(this.registrationForm.value);
  }
}
