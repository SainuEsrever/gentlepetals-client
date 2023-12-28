import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_sevices/change-password.service';

@Component({
  selector: 'app-dashboard-change-password',
  templateUrl: './dashboard-change-password.component.html',
  styleUrls: ['./dashboard-change-password.component.css']
})
export class DashboardChangePasswordComponent {
  changePasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
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
        const formData = this.changePasswordForm.value;
  
        // Call the changePassword method from the AuthService
        this.authService.changePassword(formData).subscribe(
          (response) => {
            console.log('Password changed successfully:', response);
            // You can optionally reset the form or perform other actions
            this.changePasswordForm.reset();
          },
          (error) => {
            console.error('Password change failed:', error);
            // Handle error, display a message, etc.
          }
        );
      }
    }
}
