import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-change-password',
  templateUrl: './dashboard-change-password.component.html',
  styleUrls: ['./dashboard-change-password.component.css']
})
export class DashboardChangePasswordComponent {
  changePasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.changePasswordForm = this.fb.group(
      {
        currentPassword: ['', Validators.required],
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }
    passwordMatchValidator(control: FormGroup) {
      const newPassword = control.get('newPassword')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
  
      return newPassword === confirmPassword ? null : { passwordMismatch: true };
    }
    onSubmit() {
      if (this.changePasswordForm.valid) {
        console.log('Form submitted:', this.changePasswordForm.value);
      }
    }
}
