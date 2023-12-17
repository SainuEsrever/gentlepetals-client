import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpModule


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { Dashboard1Component } from './components/dashboard/dashboard1/dashboard1.component';
import { Dashboard2Component } from './components/dashboard/dashboard2/dashboard2.component';
import { Dashboard3Component } from './components/dashboard/dashboard3/dashboard3.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { EditProfileComponent } from './components/dashboard/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';
import { DashboardDashboardComponent } from './components/dashboard-dashboard/dashboard-dashboard.component';
import { DashboardEditProfileComponent } from './components/dashboard-edit-profile/dashboard-edit-profile.component';
import { DashboardChangePasswordComponent } from './components/dashboard-change-password/dashboard-change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,
    DashboardComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    DashboardDashboardComponent,
    DashboardEditProfileComponent,
    DashboardChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
    HttpClientModule, // <-- Include module in our AppModules,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
