import { SelectionModel } from '@angular/cdk/collections';
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable, startWith } from 'rxjs';
import { Alimento } from 'src/app/models/alimento';
import { CategoriaReceta, Dieta } from 'src/app/models/enums';
import { Ingrediente, Receta } from 'src/app/models/receta';
import { AlimentoService } from 'src/app/services/alimento.service';
import { RecetaService } from 'src/app/services/receta.service';

@Component({
  selector: 'app-add-receta',
  templateUrl: './add-receta.component.html',
  styleUrls: ['./add-receta.component.css']
})

export class AddRecetaComponent implements OnInit {

  public Dieta = Dieta
  public Categoria = CategoriaReceta
  medidas: string[] = ['unidad','kg', 'gr', 'l', 'ml', 'tbs', 'tbsp', 'taza(s)']

  optionSelected: Alimento
  options: Alimento[] = []
  filteredOptions: Observable<Alimento[]>;

  ingredientes: Ingrediente[] = []
  pasos: string[] = []

  firstFormGroup: FormGroup;
  addIngredienteFormGroup: FormGroup;
  addPasoFormGroup: FormGroup;

  addAlimento: boolean = false
  addPaso: boolean = false

  constructor(private _formBuilder: FormBuilder, private alimentoService: AlimentoService, private recetaService: RecetaService, private location: Location) {
    this.firstFormGroup = this._formBuilder.group({});
    this.addIngredienteFormGroup = this._formBuilder.group({});
    this.addPasoFormGroup = this._formBuilder.group({});
  }

  ngOnInit(): void {
    this.alimentoService.getAll().subscribe(response => {
      this.options = response
      console.log(response)
    })

    // this.dietas = Dieta.

    this.firstFormGroup.addControl('titulo', new FormControl('', [Validators.required]))
    this.firstFormGroup.addControl('dieta', new FormControl('', [Validators.required]))
    this.firstFormGroup.addControl('categoria', new FormControl('', [Validators.required]))
    // this.firstFormGroup.addControl('ingredientes', new FormControl([], [Validators.required]))
    this.addIngredienteFormGroup.addControl('alimento', new FormControl('', [Validators.required, this.validateSelector.bind(this)]))
    this.addIngredienteFormGroup.addControl('cantidad', new FormControl('', [Validators.required]))
    this.addIngredienteFormGroup.addControl('medida', new FormControl('', [Validators.required]))
    this.addPasoFormGroup.addControl('paso', new FormControl('', [Validators.required]))

    this.filteredOptions = this.addIngredienteFormGroup.get('alimento').valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.nombre)),
      map(nombre => (nombre ? this._filter(nombre) : this.options.slice()))
    );
    this.filteredOptions.subscribe(elem => this.optionSelected = elem[0])

    console.log("form", this.addIngredienteFormGroup)
  }

  displayFn(alimento: Alimento): string {
    return alimento && alimento.nombre ? alimento.nombre.toString() : '';
  }

  volver(){
    this.location.back();
  }

  private _filter(nombre: string): Alimento[] {
    const filterValue = nombre.toLowerCase();

    return this.options.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

  validateSelector(control: AbstractControl): ValidationErrors | null{
    if(control.value == "") return null;
    if(typeof control.value == 'string'){
      return {'errorSeleccion': true}
    } else {
      return null;
    }
  }

  getEstado(alimento: Alimento){
    if(alimento.estado){
      return " (" + alimento.estado + ")"
    } else return ""
  }


  addIngrediente(){
    console.log(this.addIngredienteFormGroup.get('medida').value)
    let medida: string = this.addIngredienteFormGroup.get('medida').value
    let nombreAlimento: string = this.addIngredienteFormGroup.get('alimento').value.nombre;
    if(medida == 'unidad') {
      medida = "";
      // hacer plural de palabra
      let lastCaracter = nombreAlimento.charAt(nombreAlimento.length - 1);
      console.log("ultimo caracter", nombreAlimento.charAt(nombreAlimento.length - 1))
      console.log("es vovl: ", this.isVocal(lastCaracter))
      if(this.isVocal(lastCaracter)){
        nombreAlimento = nombreAlimento + 's'
      } else if(lastCaracter == 'z') {
        nombreAlimento = nombreAlimento.slice(0, -1) + "ces"
      } else {
        nombreAlimento = nombreAlimento + "es"
      }
    } else medida = medida + " de ";


    let nombre:string = this.addIngredienteFormGroup.get('cantidad').value + " " + medida + nombreAlimento
    let nuevoIngrediente: Ingrediente = {
      alimento: this.addIngredienteFormGroup.get('alimento').value.idAlimento,
      ingrediente: nombre
    };
    this.ingredientes.push(nuevoIngrediente)

    console.log("nuevo alimento", nuevoIngrediente)
    this.addIngredienteFormGroup.reset();
    this.addAlimento = false;
  }

  isVocal(x: string) {  return /[aeiouAEIOU]/.test(x); }

  addPasoNuevo(){
    let nuevoPaso:string = this.addPasoFormGroup.get('paso').value
    this.pasos.push(nuevoPaso)

    console.log("nuevo paso", nuevoPaso)
    this.addPasoFormGroup.reset();
    this.addPaso = false;
  }

  formValido(){
    return this.firstFormGroup.valid && this.ingredientes.length > 0 && this.pasos.length > 0
  }

  crearReceta(){
    // console.log("añadior", this.firstFormGroup.get('dieta').value)
    let nuevaReceta: Receta = {
      idReceta: undefined,
      categoria: this.firstFormGroup.get('categoria').value,
      nombre: this.firstFormGroup.get('titulo').value,
      ingredientes: this.ingredientes,
      dieta: this.firstFormGroup.get('dieta').value,
      preparacion: this.pasos
    }

    console.log("nueva receta", nuevaReceta)
    this.recetaService.createReceta(nuevaReceta).subscribe();
  }

  // seleccionar(){
  //   if(this.addIngredienteFormGroup.get('alimento').value == "") return
  //   if(typeof this.addIngredienteFormGroup.get('alimento').value == 'string'){
  //     // let opc: Alimento
  //     // this.addIngredienteFormGroup.get('alimento').setValue(opc)
  //     console.log("no seleccionado", this.optionSelected)
  //     this.addIngredienteFormGroup.get('alimento').setValue(this.optionSelected)
  //   } else console.log("seleccionado")
  // }
  // selec(){
  //   console.log("seleccionamos otra")
  // }

  getErrorMessage(){
    return 'Este campo es obligatorio'
  }

  getErrorMessageAlimento(){
    return 'Selecciona un alimento'
  }


}
