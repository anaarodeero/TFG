import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fithFormGroup: FormGroup;
  hide = true;
  objetivosSeleccionados = [];
  indice = 0;
  objetivos: string[] = ['Perder peso', 'Mantener mi peso', 'Ganar peso'];
  usuario: Usuario = {
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    sexo: '',
    altura: 0,
    peso: 0,
    fecha_nacimiento: new Date(),
    //objetivo: '',
    alergias: [],
    dieta: ''
  };
  alergias = ['gluten', 'sesamo', 'nueces', 'crustaceos', 'huevos', 'pescado', 'mostaza', 'lacteos', 'apio', 'cacahuetes', 'soja', 'marisco', 'altramuces', 'sulfatos'];
  grupo = new FormControl();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  gruposAlimentos: string[] = ['Todos', 'Cereales', 'Carne', 'Pescado', 'Vegetales'];
  displayedColumns: string[] = ['select', 'name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  constructor(private _formBuilder: FormBuilder, private usuarioService: UsuarioService, private cookieService: CookieService) {
  }

  getAlergia(alergia: String){
    // console.log(alergia);
    return "../../../assets/" + alergia + ".png";
  }

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
    this.fourthFormGroup = this._formBuilder.group({
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
    this.fithFormGroup = this._formBuilder.group({
      dieta: ['', Validators.required]
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

  registrarUsuario(){
    for (let index = 0; index < this.alergias.length; index++) {
      const element = this.alergias[index];
      if(this.fourthFormGroup.get('alergia').get(element).value == true){
        this.usuario.alergias.push(element);
      }
      
    }
    let data = this.usuarioService.register(this.usuario).subscribe((data:any)=>{
      this.cookieService.set('CookieSesion', data.token);
    });
  }

}

const ELEMENT_DATA = ['Arándanos', 'Frambuesas', 'Fresas', 'Moras', 'Limón', 'Pomelos', 'Mandarinas', 'Lechugas', 'Espinacas', 'Brócoli', 'Acelga', 'Cebollas', 'Apio', 'Rábanos', 'Berros', 'Guisantes arveja', 'Judías', 'Alubias', 'Porotos', 'Garbanzos'];