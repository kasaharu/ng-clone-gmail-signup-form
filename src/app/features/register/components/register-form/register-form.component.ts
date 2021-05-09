import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@ngneat/reactive-forms';
import { Address, BasicInformation } from '../../domain/models';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent implements OnInit {
  constructor(private readonly fb: FormBuilder) {}

  basicForm: FormGroup<BasicInformation> = this.fb.group({
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
  });

  addressFrom: FormGroup<Address> = this.fb.group({
    zipCode: [null],
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
}
