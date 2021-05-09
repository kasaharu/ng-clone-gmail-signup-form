import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@ngneat/reactive-forms';
import { Address } from '../../domain/models';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressFormComponent implements OnInit {
  @Input()
  model!: FormGroup<Address>;

  @Input()
  checked = false;

  constructor() {}

  ngOnInit(): void {}

  get zipCode() {
    return this.model.get('zipCode');
  }
}
