import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<app-register></app-register>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {}
