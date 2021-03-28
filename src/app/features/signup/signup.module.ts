import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignupComponent } from './containers/signup/signup.component';
import { SignupPageComponent } from './pages/signup/signup.component';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
  declarations: [SignupPageComponent, SignupComponent, SignupFormComponent],
  imports: [CommonModule, ReactiveFormsModule, SignupRoutingModule],
})
export class SignupModule {}
