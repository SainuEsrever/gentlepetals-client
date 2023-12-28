import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; // <-- Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpModule

<<<<<<< HEAD


=======
>>>>>>> d761ffbe5cf52aea9cb997ed7fa5f76368474c57
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
<<<<<<< HEAD
import { DashboardChangepasswordComponent } from './components/dashboard-changepassword/dashboard-changepassword.component';
import { DashboardEditProfileComponent } from './components/dashboard-edit-profile/dashboard-edit-profile.component';
=======
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPwComponent } from './components/forgot-pw/forgot-pw.component';
>>>>>>> d761ffbe5cf52aea9cb997ed7fa5f76368474c57


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardDashboardComponent,
<<<<<<< HEAD
    DashboardChangepasswordComponent,
    DashboardEditProfileComponent,
=======
    DashboardEditProfileComponent,
    DashboardChangePasswordComponent,
    HomepageComponent,
>>>>>>> d761ffbe5cf52aea9cb997ed7fa5f76368474c57
    HomepageComponent,
    ShoppingCartComponent,
    ShoppingCartEmptyComponent,
    OrderComponent,
    PaymentComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPwComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule, 
    HttpClientModule, 
=======
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
>>>>>>> d761ffbe5cf52aea9cb997ed7fa5f76368474c57
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
