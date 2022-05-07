import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
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

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  orientation: StepperOrientation;
  editMode: boolean;
  disabledActivated: boolean = false;

  firstFormGroup: FormGroup;
  secondFormGroup_no: FormGroup;
  thirdFormGroup_no: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  hide = true;
  // objetivosSeleccionados = [];
  indice = 0;
  objetivos: string[] = ['Perder peso', 'Mantener mi peso', 'Ganar peso'];
  usuario: Usuario = {
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    alergias: [],
    dieta: undefined
  };
  alergias = ['gluten', 'sesamo', 'nueces', 'crustaceos', 'huevos', 'pescado', 'mostaza', 'lacteos', 'apio', 'cacahuetes', 'soja', 'marisco', 'altramuces', 'sulfatos'];
  grupo = new FormControl();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  gruposAlimentos: string[] = ['Todos', 'Cereales', 'Carne', 'Pescado', 'Vegetales'];
  displayedColumns: string[] = ['select', 'name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @HostListener('window:resize') onWindowResize() {

    if (window.innerWidth <= 768) {
      this.orientation = 'vertical'
    } else {
      this.orientation = 'horizontal'
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private _formBuilder: FormBuilder, private usuarioService: UsuarioService, private cookieService: CookieService, private router: Router) {
  }

  getAlergia(alergia: String){
    // console.log(alergia);
    return "../../../assets/" + alergia + ".png";
  }

  ngOnInit() {
    if (window.innerWidth <= 768) {
      this.orientation = 'vertical'
    } else {
      this.orientation = 'horizontal'
    }
    this.usuarioService.isLoggedIn().subscribe(result => {

      if(result){
        this.editMode = true;
        if (/register/.test(this.router.url)){
          this.router.navigate(['/dashboard']);
        }
        this.usuarioService.getUser().subscribe(
          (user) => {
            this.usuario = user
          }
        );
      } else {
        console.log("no logeadooooo")
        this.editMode = false;
      }
    })

    this.firstFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      apellidos: ['', Validators.required],
      password: ['', Validators.required],
      nombre: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      alergia: this._formBuilder.group({
        gluten: false,
        sesamo: false,
        nueces: false,
        crustaceos: false,
        huevos: false,
        pescado: false,
        mostaza: false,
        lacteos: false,
        apio: false,
        cacahuetes: false,
        soja: false,
        marisco: false,
        altramuces: false,
        sulfatos: false,
      })
    });
    this.thirdFormGroup = this._formBuilder.group({
      dieta: ['', Validators.required]
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

  registrarUsuario(){
    this.usuario.alergias = [];
    for (let index = 0; index < this.alergias.length; index++) {
      const element = this.alergias[index];
      if(this.secondFormGroup.get('alergia')?.get(element)?.value == true){
        this.usuario.alergias.push(element);
      }

    }
    if(this.editMode){
      this.usuarioService.update(this.usuario).subscribe((data:any)=>{
        this.cookieService.set('CookieSesion', data.token);
        this.router.navigateByUrl('/login')
      });
    } else {
      this.usuarioService.register(this.usuario).subscribe((data:any)=>{
        this.cookieService.set('CookieSesion', data.token);
        this.router.navigateByUrl('/login')
      });
    }
  }

}

const ELEMENT_DATA = ['Arándanos', 'Frambuesas', 'Fresas', 'Moras', 'Limón', 'Pomelos', 'Mandarinas', 'Lechugas', 'Espinacas', 'Brócoli', 'Acelga', 'Cebollas', 'Apio', 'Rábanos', 'Berros', 'Guisantes arveja', 'Judías', 'Alubias', 'Porotos', 'Garbanzos'];
