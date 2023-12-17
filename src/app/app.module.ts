import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpModule


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardDashboardComponent } from './components/dashboard-dashboard/dashboard-dashboard.component';
<<<<<<< HEAD
import { DashboardEditProfileComponent } from './components/dashboard-edit-profile/dashboard-edit-profile.component';
import { DashboardChangePasswordComponent } from './components/dashboard-change-password/dashboard-change-password.component';
=======
import { HomepageComponent } from './components/homepage/homepage.component';

>>>>>>> a0dd573f4c8bad5d9901b0700006aff6f1f13a58

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
<<<<<<< HEAD
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,
    DashboardComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    DashboardDashboardComponent,
    DashboardEditProfileComponent,
    DashboardChangePasswordComponent
=======
    DashboardDashboardComponent
    HomepageComponent
>>>>>>> a0dd573f4c8bad5d9901b0700006aff6f1f13a58
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
