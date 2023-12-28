import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-pw',
  templateUrl: './forgot-pw.component.html',
  styleUrls: ['./forgot-pw.component.css']
})
export class ForgotPwComponent {
  forgotpwForm! : FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit() {
    this.forgotpwForm = this.formBuilder.group({
      
      email: ['', [Validators.required, Validators.email]],
      
      
    })
  }
  

  onSubmit(){
    this.submitted = true
    if (this.forgotpwForm.invalid){
      return;
    }
    alert("Success")
  }
}
