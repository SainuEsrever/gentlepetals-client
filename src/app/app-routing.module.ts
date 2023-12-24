import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartEmptyComponent } from './components/shopping-cart-empty/shopping-cart-empty.component';
import { OrderComponent } from './components/order/order.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DashboardDashboardComponent } from './components/dashboard-dashboard/dashboard-dashboard.component';
import { DashboardEditProfileComponent } from './components/dashboard-edit-profile/dashboard-edit-profile.component';
import { DashboardChangepasswordComponent } from './components/dashboard-changepassword/dashboard-changepassword.component';




const routes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path : 'home', component: HomepageComponent},
  { path : 'shopping-cart', component: ShoppingCartComponent},
  { path: 'empty-cart', component:ShoppingCartEmptyComponent},
  { path: 'order', component:OrderComponent},
  { path: 'payment', component:PaymentComponent},
  { path: 'edit-profile', component:DashboardEditProfileComponent},
  { path: 'dashboard', component:DashboardDashboardComponent},
  { path: 'change-password', component:DashboardChangepasswordComponent}
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
