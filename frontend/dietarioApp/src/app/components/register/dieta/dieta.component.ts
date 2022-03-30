import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.component.html',
  styleUrls: ['./dieta.component.css']
})
export class DietaComponent implements OnInit {

  @Input() thirdFormGroup: FormGroup;
  @Input() usuario: Usuario;

  constructor() { }

  ngOnInit(): void {
  }

}
