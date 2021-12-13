import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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

  getErrorMessage() {
    if (this.firstFormGroup.get('password').hasError('required')) {
      return 'Este campo es obligatorio';
    }
  }

  getErrorMessageEmail() {
    if (this.firstFormGroup.get('email').hasError('required')) {
      return 'Este campo es obligatorio';
    }
    return this.firstFormGroup.get('email').hasError('email') ? 'No es valido este email' : '';
  }
  constructor(private _formBuilder: FormBuilder, private usuarioService: UsuarioService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    if(this.usuarioService.isLoggedIn()){
      this.router.navigateByUrl('/dashboard');
    }
    
    this.firstFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login(){
    this.usuarioService.login(this.email, this.password).subscribe((data:any)=>{
      this.cookieService.set('CookieSesion', data.token);
      this.router.navigateByUrl('/dashboard');
    });
  }

}
