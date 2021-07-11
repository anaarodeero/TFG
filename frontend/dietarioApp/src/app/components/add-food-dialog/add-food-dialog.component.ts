import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-food-dialog',
  templateUrl: './add-food-dialog.component.html',
  styleUrls: ['./add-food-dialog.component.css']
})
export class AddFoodDialogComponent implements OnInit {

  firstFormGroup: FormGroup;
  hide = true;

  constructor(private _formBuilder: FormBuilder) { }

  getErrorMessage() {
    return 'Este campo es obligatorio';
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      alimento: ['', Validators.required],
      carbohidratos: ['', Validators.required],
      proteinas: ['', Validators.required],
      grasas: ['', Validators.required]
    });
  }

}
