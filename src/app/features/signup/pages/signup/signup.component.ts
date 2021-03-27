import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  template: `<app-signup></app-signup>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
