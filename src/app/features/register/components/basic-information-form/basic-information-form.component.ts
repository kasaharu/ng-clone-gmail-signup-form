import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-information-form',
  templateUrl: './basic-information-form.component.html',
  styleUrls: ['./basic-information-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInformationFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
