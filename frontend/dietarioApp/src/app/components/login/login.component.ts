import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  firstFormGroup: FormGroup;
  email: string;
  password: string;
  emailPattern = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

  constructor(private _formBuilder: FormBuilder, private usuarioService: UsuarioService, private cookieService: CookieService, private router: Router) {
    this.firstFormGroup = this._formBuilder.group({});
  }

  ngOnInit(): void {
    if(this.usuarioService.usuarioValue){
      this.router.navigateByUrl('/dashboard');
    }

    this.firstFormGroup.addControl('email', new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]))
    this.firstFormGroup.addControl('password', new FormControl('', [Validators.required]))

    // this.firstFormGroup = this._formBuilder.group({
    //   email: ['', Validators.required, this.validateEmail.bind(this)],
    //   password: ['', Validators.required]
    // });
    // console.log("a ver", this.firstFormGroup.get('email'))
    // this.firstFormGroup.get('email').addValidators([this.validateEmail.bind(this)]);

  }

  getErrorMessage() {
    return 'Este campo es obligatorio';
  }

  getErrorMessageEmail() {
    return 'El formato no es válido';
  }

  getErrorUsuarioNoExiste() {
    return 'Este usuario no tiene cuenta';
  }

  getErrorPasswdIncorrecta() {
    return 'La contraseña es incorrecta';
  }

  login(){
    if(this.email && this.password && !this.firstFormGroup.get('email').hasError("pattern")){
      this.firstFormGroup.get('email').updateValueAndValidity()
      this.firstFormGroup.get('password').updateValueAndValidity()
      this.usuarioService.login(this.email, this.password).subscribe({
        next: (data:any)=>{
          this.cookieService.set('CookieSesion', data.token);
          this.router.navigateByUrl('/dashboard');
        },
        error: (error) => {
          if(error.status == 401){
            this.firstFormGroup.get('password').setErrors({"passwdIncorrecta": true})
          } else if(error.status == 404){
            this.firstFormGroup.get('email').setErrors({"usuarioNoExiste": true})
          }
        }
      });
    }
  }

}
