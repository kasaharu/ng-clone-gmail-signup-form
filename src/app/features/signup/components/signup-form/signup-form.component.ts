import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@ngneat/reactive-forms';
import { User } from '../../../../domain/user';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupFormComponent implements OnInit {
  constructor(private readonly fb: FormBuilder) {}

  form: FormGroup<User> = this.fb.group({ firstName: [''], familyName: [''], userName: [''], password: [''], passwordConfirmation: [''] });

  ngOnInit(): void {}
}
