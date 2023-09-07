import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation, StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { DatosCuentaComponent } from './datos-cuenta/datos-cuenta.component';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  orientation: StepperOrientation;
  editMode: boolean = true;
  disabledActivated: boolean = false;
  usrYaExiste: boolean = false;

  firstFormGroup: FormGroup;
  hide = true;
  indice = 0;
  usuario: Usuario = {
    nombre: '',
    apellidos: '',
    email: '',
    password: ''
  };


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @HostListener('window:resize') onWindowResize() {

    if (window.innerWidth <= 768) {
      this.orientation = 'vertical'
    } else {
      this.orientation = 'horizontal'
    }
  }

  constructor(private _formBuilder: FormBuilder, private usuarioService: UsuarioService, private cookieService: CookieService, private router: Router) {
  }

  ngOnInit() {
    if (window.innerWidth <= 768) {
      this.orientation = 'vertical'
    } else {
      this.orientation = 'horizontal'
    }
    console.log(this.usuarioService.userLogIn.getValue())
    if(this.usuarioService.userLogIn.getValue()) {

        this.editMode = true;
        if (/register/.test(this.router.url)){
          this.router.navigate(['/dashboard']);
        }
        // this.usuarioService.getUser().subscribe(
        //   (user) => {
        //     console.log(user)
        //     this.usuario = user
        //   }
        // );
        this.usuario = this.usuarioService.usuarioActual
        console.log(this.usuario)
      } else {
        console.log("no logeadooooo")
        this.editMode = false;
      }


    this.firstFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      apellidos: ['', Validators.required],
      password: ['', Validators.required],
      nombre: ['', Validators.required]
    });
  }

  updateDisabled(update: boolean){
    this.disabledActivated = update;

  }

  datosCuentaDisabled(){
    if(this.disabledActivated) return true;
    if(this.editMode){
      this.firstFormGroup.get('password').setValidators([])
      this.firstFormGroup.get('password_repeat').setValidators([])
      return false;
    }
    return this.firstFormGroup.invalid
  }

  getErrorMessage() {
    return 'Este campo es obligatorio';
  }

  getErrorMessageEmail() {
    if (this.firstFormGroup.get('email')?.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    return this.firstFormGroup.get('email')?.hasError('email') ? 'No es valido este email' : '';
  }

  registrarUsuario(stepper: MatStepper){
    if(this.editMode){
      console.log("editar", this.usuario, this.firstFormGroup)
      this.usuario.nombre = this.firstFormGroup.get('nombre').value;
      this.usuario.apellidos = this.firstFormGroup.get('apellidos').value;
      this.usuario.email = this.firstFormGroup.get('email').value;
      this.usuario.password = "ee"
      this.usuarioService.update(this.usuario).subscribe((data:any)=>{
        this.cookieService.set('CookieSesion', data.token);
        this.router.navigateByUrl('/dashboard')
      }, (error)=> {
        this.usrYaExiste = true;
        console.log("ya existe")
        stepper.previous();
      }
    );
    } else {
      this.usuarioService.register(this.usuario).subscribe((data: any)=>{

          console.log("data", data)
          this.cookieService.set('CookieSesion', data.token);
          setTimeout(() => {
            this.router.navigateByUrl('/login')
          }, 2000)
          this.usrYaExiste = false;
      }, (error)=> {
          this.usrYaExiste = !this.usrYaExiste;
          console.log("ya existe")
          stepper.previous();
        }
      );
    }
  }

  getTexto(){
    if(this.editMode) return "Editar"
    else return "Registrar"
  }


}
