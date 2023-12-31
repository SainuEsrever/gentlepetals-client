import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; // <-- Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpModule

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardDashboardComponent } from './components/dashboard-dashboard/dashboard-dashboard.component';
import { DashboardEditProfileComponent } from './components/dashboard-edit-profile/dashboard-edit-profile.component';
import { DashboardChangePasswordComponent } from './components/dashboard-change-password/dashboard-change-password.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartEmptyComponent } from './components/shopping-cart-empty/shopping-cart-empty.component';
import { OrderComponent } from './components/order/order.component';
import { PaymentComponent } from './components/payment/payment.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPwComponent } from './components/forgot-pw/forgot-pw.component';
import { AlertComponent } from './components/alert/alert.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProductDetailComponent } from './components/productdeta/product_details.component';
import { CategoriesComponent } from './components/categories/categories';
import { LienheComponent } from './components/lienhe/lienhe.component';
import { CauhoithuonggapComponent } from './components/cauhoithuonggap/cauhoithuonggap.component';
import { BlogComponent } from './components/blog/blog.component';
import { Blog2Component } from './components/blog2/blog2.component';
import { SearchResultComponent } from './components/search-result/search-result.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardDashboardComponent,
    DashboardEditProfileComponent,
    DashboardChangePasswordComponent,
    HomepageComponent,
    HomepageComponent,
    ShoppingCartComponent,
    ShoppingCartEmptyComponent,
    OrderComponent,
    PaymentComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPwComponent,
    AlertComponent,
    AboutusComponent,
    ProductDetailComponent,
    CategoriesComponent,
    CauhoithuonggapComponent,
    LienheComponent,
    BlogComponent,
    Blog2Component,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
