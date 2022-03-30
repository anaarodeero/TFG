import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-alergias',
  templateUrl: './alergias.component.html',
  styleUrls: ['./alergias.component.css']
})
export class AlergiasComponent implements OnInit {

  @Input() secondFormGroup: FormGroup;
  @Input() usuario: Usuario;

  alergias = ['gluten', 'sesamo', 'nueces', 'crustaceos', 'huevos', 'pescado', 'mostaza', 'lacteos', 'apio', 'cacahuetes', 'soja', 'marisco', 'altramuces', 'sulfatos'];

  getAlergia(alergia: String){
    // console.log(alergia);
    return "../../../assets/" + alergia + ".png";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
