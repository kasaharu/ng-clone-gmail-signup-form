import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@ngneat/reactive-forms';
import { Address } from '../../domain/models';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressFormComponent {
  @Input()
  model!: FormGroup<Address>;

  @Input()
  checked = false;

  get zipCode() {
    return this.model.get('zipCode');
  }
}
