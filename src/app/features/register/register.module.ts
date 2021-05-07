import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegisterPageComponent } from './pages/register/register.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [CommonModule, RegisterRoutingModule],
})
export class RegisterModule {}
