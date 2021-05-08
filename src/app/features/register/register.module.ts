import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicInformationFormComponent } from './components/basic-information-form/basic-information-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterComponent } from './containers/register/register.component';
import { RegisterPageComponent } from './pages/register/register.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [RegisterPageComponent, RegisterComponent, RegisterFormComponent, BasicInformationFormComponent],
  imports: [CommonModule, ReactiveFormsModule, RegisterRoutingModule],
})
export class RegisterModule {}
