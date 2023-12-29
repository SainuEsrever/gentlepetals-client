import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartEmptyComponent } from './components/shopping-cart-empty/shopping-cart-empty.component';
import { OrderComponent } from './components/order/order.component';
import { PaymentComponent } from './components/payment/payment.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPwComponent } from './components/forgot-pw/forgot-pw.component';
import { DashboardDashboardComponent } from './components/dashboard-dashboard/dashboard-dashboard.component';
import { DashboardEditProfileComponent } from './components/dashboard-edit-profile/dashboard-edit-profile.component';
import { DashboardChangePasswordComponent } from './components/dashboard-change-password/dashboard-change-password.component';


const routes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path : 'home', component: HomepageComponent},
  { path : 'cart', component: ShoppingCartComponent},
  { path: 'empty-cart', component:ShoppingCartEmptyComponent},
  { path: 'order', component:OrderComponent},
  { path: 'payment', component:PaymentComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "forgotpw", component: ForgotPwComponent},
  {path: "dashboard", component: DashboardDashboardComponent},
  {path: "edit-profile", component: DashboardEditProfileComponent},
  {path: "change-password", component: DashboardChangePasswordComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }

export const RoutingComponents = [LoginComponent, RegisterComponent, ForgotPwComponent]