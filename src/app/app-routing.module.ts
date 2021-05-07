import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule) },
  { path: 'signup', loadChildren: () => import('./features/signup/signup.module').then((m) => m.SignupModule) },
  { path: 'register', loadChildren: () => import('./features/register/register.module').then((m) => m.RegisterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
