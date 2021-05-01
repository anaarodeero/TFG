import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  getErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Este campo es obligatorio';
    }
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    return this.email.hasError('email') ? 'No es valido este email' : '';
  }
  constructor() { }

  ngOnInit(): void {

  }

}
