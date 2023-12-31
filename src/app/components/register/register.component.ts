import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customValidator, passwordValidator } from '../_services/check.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { AlertService } from '../_services/alert.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm! : FormGroup
  submitted = false;
  loading = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
    ){

  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, customValidator]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      confirmPass: ['', Validators.required]
    }, {validators: [passwordValidator]})
  }
  
  get firstName() {return this.registerForm.controls['firstName']};  
  get lastName() {return this.registerForm.controls['lastName']}  
  get email() {return this.registerForm.controls['email']}  
  get phonenumber() {return this.registerForm.controls['phonenumber']}  
  get password() {return this.registerForm.controls['password']}  
  get confirmPass() {return this.registerForm.controls['confirmPass']} 

  onSubmit(){
    this.submitted = true

    this.alertService.clear();

    if (this.registerForm.invalid){
      return;
    }
    this.loading = true;
        this.accountService.register(this.registerForm.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    this.router.navigate(['/login'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
  }
}
