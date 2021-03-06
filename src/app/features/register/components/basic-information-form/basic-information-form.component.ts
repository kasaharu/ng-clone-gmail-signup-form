import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@ngneat/reactive-forms';
import { BasicInformation } from '../../domain/models';

@Component({
  selector: 'app-basic-information-form',
  templateUrl: './basic-information-form.component.html',
  styleUrls: ['./basic-information-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInformationFormComponent {
  @Input()
  model!: FormGroup<BasicInformation>;

  @Input()
  checked = false;
}
