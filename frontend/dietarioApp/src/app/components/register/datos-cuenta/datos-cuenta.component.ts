import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-datos-cuenta',
  templateUrl: './datos-cuenta.component.html',
  styleUrls: ['./datos-cuenta.component.css']
})
export class DatosCuentaComponent implements OnInit {

  @Input() firstFormGroup: FormGroup;
  @Input() usuario: Usuario;
  @Input() modoEdicion: boolean;

  @Output() cambioActivado = new EventEmitter<boolean>();

  public cambioForm: FormGroup;
  public cambioPassword: boolean = false;
  hide = true;
  hide_2 = true;

  emailPattern = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder) {
    // this.cambioForm = this.formBuilder.group({});
  }

  ngOnInit() {
    this.firstFormGroup.addControl('password_repeat', new FormControl('', [Validators.required, this.validatePassword.bind(this)]))
    this.firstFormGroup.get('password').addValidators(this.validatePassword.bind(this));
    this.firstFormGroup.get('email').addValidators(Validators.pattern(this.emailPattern));

    this.cambioForm = this.formBuilder.group({
      password_antigua: [''],
      password_nueva1: [''],
      password_nueva2: [''],
    })

    console.log(this.firstFormGroup)
  }

  datosCuentaDisabled(){
    if(this.modoEdicion){
      this.firstFormGroup.get('password').setValidators([])
      this.firstFormGroup.get('password_repeat').setValidators([])
    }
    return this.firstFormGroup.invalid
  }

  cambiar(){
    this.cambioPassword = true;
    this.cambioActivado.emit(true);
    this.cambioForm.get('password_antigua').addValidators([Validators.required, this.validatePasswordAntigua.bind(this)])
    this.cambioForm.get('password_nueva1').addValidators([Validators.required, this.validatePasswordNueva.bind(this)])
    this.cambioForm.get('password_nueva2').addValidators([Validators.required, this.validatePasswordNueva.bind(this)])
  }

  actualizar(){
    this.firstFormGroup.get('password').updateValueAndValidity();
    this.firstFormGroup.get('password_repeat').updateValueAndValidity();
  }

  actualizarEdicion(){
    this.cambioForm.get('password_nueva1').updateValueAndValidity();
    this.cambioForm.get('password_nueva2').updateValueAndValidity();
  }

  validateEmail(control: AbstractControl): ValidationErrors | null{
    let regEx = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
    if(!control.value.match(regEx)) return {'errorEmail': true}
    else return null;
  }

  existeUsuario(){
    if(this.firstFormGroup.get('email').valid){
      let email = this.firstFormGroup.get('email').value;
      this.usuarioService.getUserByEmail(email).subscribe((data: any)=>{
        if(data && (data[0]._id != this.usuario._id)) {
          this.firstFormGroup.get('email').setErrors({'usrYaExite': true});
        }
      });
    }
  }

  cancelarCambio(){
    this.cambioForm.reset();
    this.cambioForm.markAsUntouched();
    this.cambioPassword = false;
    this.cambioActivado.emit(false);
  }

  guardarCambio(){
    if(this.cambioForm.valid){
      let nuevaPasswd = this.cambioForm.get('password_nueva1').value;
      this.usuario.password = nuevaPasswd;
      this.cambioForm.reset();
      this.cambioPassword = false;
      this.cambioActivado.emit(false);
    } else {
      this.cambioForm.markAllAsTouched();
      console.log("form", this.cambioForm as FormGroup)
    }
  }

  validatePasswordAntigua(control: AbstractControl): ValidationErrors | null{
    if(control.value && (control.value != this.usuario.password)){
      return {"error": true};
    }
    return null;
  }

  validatePasswordNueva(control: AbstractControl): ValidationErrors | null{
    if(this.cambioForm.get('password_nueva1')?.value == '' || this.cambioForm.get('password_nueva2')?.value == ''){
      return null;
    } else if(this.cambioForm.get('password_nueva1')?.value != this.cambioForm.get('password_nueva2')?.value){
      return {'errorPasswd': true}
    }
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

  getErrorMessagePasswdActual() {
    return 'La contraseña actual no coincide con esta';
  }

  getErrorMessagePasswd() {
    return 'Las contraseñas no coinciden';
  }

  getErrorFormatoEmail() {
    return 'El formato no es válido'
  }

  getErrorEmailExistente() {
    return 'Este email ya esta registrado'
  }

}
