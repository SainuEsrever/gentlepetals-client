import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpModule



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardDashboardComponent } from './components/dashboard-dashboard/dashboard-dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartEmptyComponent } from './components/shopping-cart-empty/shopping-cart-empty.component';
import { OrderComponent } from './components/order/order.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DashboardChangepasswordComponent } from './components/dashboard-changepassword/dashboard-changepassword.component';
import { DashboardEditProfileComponent } from './components/dashboard-edit-profile/dashboard-edit-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardDashboardComponent,
    DashboardChangepasswordComponent,
    DashboardEditProfileComponent,
    HomepageComponent,
    ShoppingCartComponent,
    ShoppingCartEmptyComponent,
    OrderComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
