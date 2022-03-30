import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-datos-cuenta',
  templateUrl: './datos-cuenta.component.html',
  styleUrls: ['./datos-cuenta.component.css']
})
export class DatosCuentaComponent implements OnInit {

  @Input() firstFormGroup: FormGroup;
  @Input() usuario: Usuario;
  hide = true;
  hide_2 = true;

  constructor() { }

  ngOnInit() {
    this.firstFormGroup.addControl('password_repeat', new FormControl('', [Validators.required, this.validatePassword.bind(this)]))
    this.firstFormGroup.get('password').addValidators(this.validatePassword.bind(this));
    this.firstFormGroup.get('email').addValidators(this.validateEmail.bind(this));
  }

  actualizar(){
    this.firstFormGroup.get('password').updateValueAndValidity();
    this.firstFormGroup.get('password_repeat').updateValueAndValidity();
  }

  validateEmail(control: AbstractControl): ValidationErrors | null{
    let regEx = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
    if(!control.value.match(regEx)) return {'errorEmail': true}
    return null;
  }

  validatePassword(control: AbstractControl): ValidationErrors | null{
    if(this.firstFormGroup.get('password')?.value == '' || this.firstFormGroup.get('password_repeat')?.value == ''){
      return null;
    } else if(this.firstFormGroup.get('password')?.value != this.firstFormGroup.get('password_repeat')?.value){
      return {'errorPasswd': true}
    }
    return null;
  }

  getErrorMessage() {
    return 'Este campo es obligatorio';
  }

  getErrorMessagePasswd() {
    return 'Las contraseñas no coinciden';
  }

  getErrorMessageEmail() {
    return 'El formato no es válido'
  }

}
