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
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProductDetailComponent } from './components/productdeta/product_details.component';
import { CategoriesComponent } from './components/categories/categories';
import { LienheComponent } from './components/lienhe/lienhe.component';
import { CauhoithuonggapComponent } from './components/cauhoithuonggap/cauhoithuonggap.component';
import { BlogComponent } from './components/blog/blog.component';
import { Blog2Component } from './components/blog2/blog2.component';
import { SearchResultComponent } from './components/search-result/search-result.component';




const routes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'empty-cart', component: ShoppingCartEmptyComponent },
  { path: 'order', component: OrderComponent },
  { path: 'payment', component: PaymentComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgotpw", component: ForgotPwComponent },
  { path: "dashboard", component: DashboardDashboardComponent },
  { path: "edit-profile", component: DashboardEditProfileComponent },
  { path: "change-password", component: DashboardChangePasswordComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "products/:_id", component: ProductDetailComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "categories/:_id", component: CategoriesComponent },
  { path: "lienhe", component: LienheComponent },
  { path: "cauhoithuonggap", component: CauhoithuonggapComponent },
  { path: "blog", component: BlogComponent },
  { path: "blogs/:id", component: Blog2Component },
  { path: 'search', component: SearchResultComponent },
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