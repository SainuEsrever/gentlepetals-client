import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../_sevices/account.service';
import { AlertService } from '../_sevices/alert.service';
import { first } from 'rxjs';
import { User } from '../_models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form!: FormGroup;
  loading = false;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
) { }
    // loginModel = new User("",'','','','')
  ngOnInit(){
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  
  get email() { return this.form.controls['emai'] }
  get password() { return this.form.controls['password'] }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        
        // this.loading = true;
        // this.accountService.login(this.email.value,this.password.value)
        //     .pipe(first())
        //     .subscribe({
        //         next: () => {
        //             // get return url from query parameters or default to home page
        //             const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        //             this.router.navigateByUrl(returnUrl);
        //         },
        //         error: error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         }
        //     });
    }
}
