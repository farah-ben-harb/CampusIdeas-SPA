import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

  formUsers = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]),
    tel: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8}$')]),
    address: new FormControl('', [Validators.required, Validators.minLength(10)]),
    age: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,3}$'), Validators.min(18), Validators.max(100)])
  });

  submit(){
  
    console.log(this.formUsers.value);
  }

  get f(){
    return this.formUsers.controls;
  }

}
