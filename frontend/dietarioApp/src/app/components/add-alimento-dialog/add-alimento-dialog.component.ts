import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Alimento } from 'src/app/models/alimento';
import { AlimentoService } from 'src/app/services/alimento.service';

@Component({
  selector: 'app-add-alimento-dialog',
  templateUrl: './add-alimento-dialog.component.html',
  styleUrls: ['./add-alimento-dialog.component.css']
})
export class AddAlimentoDialogComponent implements OnInit {

  firstFormGroup: FormGroup;
  hide = true;
  numberPattern = "^[0-9]+([.,][0-9]+)?$"

  constructor(private _formBuilder: FormBuilder, private alimentoService: AlimentoService, public dialogRef: MatDialogRef<AddAlimentoDialogComponent>) { }

  getErrorMessage() {
    return 'Este campo es obligatorio';
  }

  getErrorNumberMessage() {
    return 'Debe ser un numero';
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      alimento: ['', Validators.required],
      calorias: ['', Validators.required],
      carbohidratos: ['', Validators.required],
      proteinas: ['', Validators.required],
      grasas: ['', Validators.required],
      estado: ['']
    });
    this.firstFormGroup.get('calorias').addValidators(Validators.pattern(this.numberPattern))
    this.firstFormGroup.get('carbohidratos').addValidators(Validators.pattern(this.numberPattern))
    this.firstFormGroup.get('proteinas').addValidators(Validators.pattern(this.numberPattern))
    this.firstFormGroup.get('grasas').addValidators(Validators.pattern(this.numberPattern))
  }

  addAlimento(){
    if(!this.firstFormGroup.invalid){
      let alimentoNuevo: Alimento = {
        idAlimento: 0,
        nombre: this.firstFormGroup.get('alimento').value,
        cal: this.firstFormGroup.get('calorias').value,
        pr: this.firstFormGroup.get('proteinas').value,
        gr: this.firstFormGroup.get('grasas').value,
        hc: this.firstFormGroup.get('carbohidratos').value,
        estado: this.firstFormGroup.get('estado').value
      }
      this.alimentoService.createAlimento(alimentoNuevo).subscribe();
      this.dialogRef.close();
    } else {
      this.firstFormGroup.markAllAsTouched();
    }
  }

}
