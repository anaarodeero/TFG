import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fithFormGroup: FormGroup;
  panelOpenState = false;
  hide = true;
  //usuario: Usuario;
  usuario: Usuario = {
    alergias : [ 
        "sesamo"
    ],
    nombre : "hhhhh",
    apellidos : "aa",
    email : "ana@um.es",
    password : "aa",
    fecha_nacimiento : new Date("2021-06-30T22:00:00:00"),
    sexo : "Mujer",
    altura : 0,
    peso : 0,
    dieta: "Ninguna"
  }

  constructor(private _formBuilder: FormBuilder, private usuarioService: UsuarioService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.usuarioService.getUser().subscribe((usr: Usuario)=>{
      this.usuario = usr;
    });


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

  getAlergia(alergia: String){
    // console.log(alergia);
    return "../../../assets/" + alergia + ".png";
  }

}