import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm! : FormGroup
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
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
    if (this.loginForm.invalid){
      return;
    }
    

  }
}
