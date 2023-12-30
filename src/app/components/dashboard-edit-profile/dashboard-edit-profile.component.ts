import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-edit-profile',
  templateUrl: './dashboard-edit-profile.component.html',
  styleUrls: ['./dashboard-edit-profile.component.css']
})
export class DashboardEditProfileComponent {
  model: any = {};


  onSubmit() {
    console.log('Form submitted:', this.model);
}

}
