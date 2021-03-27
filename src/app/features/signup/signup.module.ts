import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SignupComponent } from './pages/signup/signup.component';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
  ],
})
export class SignupModule { }
