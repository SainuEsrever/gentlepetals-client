import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { AlertService } from '../_services/alert.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm! : FormGroup
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
    ){}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      
    })
  }

  get email(){return this.loginForm.controls['email']}
  get password(){return this.loginForm.controls['password']}

  onSubmit(){
    this.submitted = true
    this.alertService.clear();

    if (this.loginForm.invalid){
      return;
    }
    
    this.loading=true;
    this.accountService.login(this.email.value, this.password.value)
    .pipe(first())
    .subscribe({
      next: ()=> {
        this.router.navigate(['/home'])
      },
      error: error => {
        this.alertService.error(error);
        this.loading = false;
      }
    })
  }
}
