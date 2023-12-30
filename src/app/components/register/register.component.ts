import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customValidator, passwordValidator } from '../_services/check.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm! : FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder){

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
  

  onSubmit(){
    this.submitted = true

    

    if (this.registerForm.invalid){
      return;
    }
    alert("Success")
  }
}
