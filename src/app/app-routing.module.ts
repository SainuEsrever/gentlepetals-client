import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPwComponent } from './components/forgot-pw/forgot-pw.component';

const routes: Routes = [
  
  {path:"", redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "forgotpw", component: ForgotPwComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule { }

export const RoutingComponents = [LoginComponent, RegisterComponent, ForgotPwComponent]