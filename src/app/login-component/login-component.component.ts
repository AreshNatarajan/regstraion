import { Component } from '@angular/core';
import {Validator, FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  // submitForm!: FormGroup;

  // constructor(){
  //   this.submitForm = new FormGroup({
  //     email: new FormControl(null, [Validators.email,Validators.required]),
  //     password: new FormGroup(null, Validators.required)
  //   })
    
  // }

  // submit(){
  //   console.log(this.submitForm.get('email')?.value);
  // }

}
