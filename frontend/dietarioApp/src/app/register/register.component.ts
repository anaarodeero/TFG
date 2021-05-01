import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  hide = true;
  objetivosSeleccionados = [];
  indice = 0;
  objetivos: string[] = ['Perder peso', 'Mantener mi peso', 'Ganar peso'];

  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      apellidos: ['', Validators.required],
      password: ['', Validators.required],
      nombre: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      sexo: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      altura: ['', Validators.required],
      peso: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      objetivo: ['', Validators.required],
    });
    
  }
  getErrorMessage() {
    return 'Este campo es obligatorio';
  }

  getErrorMessageEmail() {
    if (this.firstFormGroup.get('email').hasError('required')) {
      return 'Este campo es obligatorio';
    }
    return this.firstFormGroup.get('email').hasError('email') ? 'No es valido este email' : '';
  }

}
