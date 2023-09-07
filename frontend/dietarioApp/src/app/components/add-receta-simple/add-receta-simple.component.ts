import { Component, OnInit } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import { Alimento } from 'src/app/models/alimento';
import { AlimentoService } from 'src/app/services/alimento.service';
import { RecetaService } from 'src/app/services/receta.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { RecetaSimple } from 'src/app/models/recetaSimple';
import { Categoria, Dieta } from 'src/app/models/enums';
import { PlanComidaService } from 'src/app/services/plan-comida.service';
import { PiramideService } from 'src/app/services/piramide.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-add-receta-simple',
  templateUrl: './add-receta-simple.component.html',
  styleUrls: ['./add-receta-simple.component.css']
})
export class AddRecetaSimpleComponent implements OnInit {


  public Dieta = Dieta
  public Categoria = Categoria
  medidas: string[] = ['unidad','kg', 'gr', 'l', 'ml', 'tbs', 'tbsp', 'taza(s)']

  optionSelected: Alimento
  options: Alimento[] = []
  filteredOptions: Observable<Alimento[]>;

  alimentos: Alimento[] = []
  alimentosIds: number[] = []
  categorias: Categoria[] = [];

  firstFormGroup: FormGroup;
  addIngredienteFormGroup: FormGroup;

  addAlimento: boolean = false

  constructor(private _formBuilder: FormBuilder, private location: Location, private alimentoService: AlimentoService, private recetaService: RecetaService, private planComidaService: PlanComidaService, private piramideService: PiramideService) {
    this.firstFormGroup = this._formBuilder.group({});
    this.addIngredienteFormGroup = this._formBuilder.group({});
  }

  ngOnInit(): void {
    // this.recetaService.getRecetasByCategoria(Categoria.PESCADO).subscribe(response => {
    //   console.log("recetas pescado: ", response)
    // })
    // this.planComidaService.createMyPlan(Dieta.REGULAR).subscribe();
    // this.piramideService.getPiramideByDieta(Dieta.REGULAR).subscribe();
    this.alimentoService.getAll().subscribe(response => {
      this.options = response
      console.log(response)
    })

    // this.dietas = Dieta.

    this.firstFormGroup.addControl('titulo', new FormControl('', [Validators.required]))
    this.firstFormGroup.addControl('categoria', new FormControl('', [Validators.required]))
    // this.firstFormGroup.addControl('ingredientes', new FormControl([], [Validators.required]))
    this.addIngredienteFormGroup.addControl('alimento', new FormControl('', [Validators.required, this.validateSelector.bind(this)]))

    this.filteredOptions = this.addIngredienteFormGroup.get('alimento').valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.nombre)),
      map(nombre => (nombre ? this._filter(nombre) : this.options.slice()))
    );
    this.filteredOptions.subscribe(elem => this.optionSelected = elem[0])

    console.log("form", this.addIngredienteFormGroup)
  }

  volver(){
    this.location.back();
  }

  displayFn(alimento: Alimento): string {
    return alimento && alimento.nombre ? alimento.nombre.toString() : '';
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
    console.log("alimento: ", this.addIngredienteFormGroup.get('alimento').value)
    this.alimentos.push(this.addIngredienteFormGroup.get('alimento').value)
    this.alimentosIds.push(this.addIngredienteFormGroup.get('alimento').value.idAlimento);
    this.addIngredienteFormGroup.reset();
    this.addAlimento = false;
  }



  formValido(){
    return this.firstFormGroup.valid && this.alimentos.length > 0
  }

  crearReceta(){
    // console.log("añadior", this.firstFormGroup.get('dieta').value)
    let nuevaReceta: RecetaSimple = {
      id: undefined,
      nombre: this.firstFormGroup.get('titulo').value,
      alimentos: this.alimentosIds,
      categorias: this.firstFormGroup.get('categoria').value
    }

    console.log("nueva receta", nuevaReceta)
    this.recetaService.createRecetaSimple(nuevaReceta).subscribe(result => {
      if(result){
        this.location.back();
      }
    });
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
