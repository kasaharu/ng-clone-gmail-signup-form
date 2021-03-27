import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SignupComponent } from './containers/signup/signup.component';
import { SignupPageComponent } from './pages/signup/signup.component';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
  declarations: [SignupPageComponent, SignupComponent],
  imports: [CommonModule, SignupRoutingModule],
})
export class SignupModule {}
