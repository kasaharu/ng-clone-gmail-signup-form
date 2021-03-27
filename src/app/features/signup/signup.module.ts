import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SignupPageComponent } from './pages/signup/signup.component';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
  declarations: [SignupPageComponent],
  imports: [CommonModule, SignupRoutingModule],
})
export class SignupModule {}
