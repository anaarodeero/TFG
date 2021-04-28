import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-plan-diario',
  templateUrl: './plan-diario.component.html',
  styleUrls: ['./plan-diario.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class PlanDiarioComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['nombre', 'carbohidratos', 'proteinas', 'grasas', 'icono'];
  expandedElement: ArrayComidas | null;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }
}

export interface ArrayAlimentos {
  alimento: string;
  carbohidratos: string;
  proteinas: string;
  grasas: string;
}

  export interface ArrayComidas {
    nombre: string;
    carbohidratos: string;
    proteinas: string;
    grasas: string;
    description: string;
    alimentos: ArrayAlimentos[];
  }
  
  const ELEMENT_DATA: ArrayComidas[] = [
    {
      nombre: 'Desayuno',
      carbohidratos: "X carbohidratos",
      proteinas: "X proteinas",
      grasas: "X grasas",
      description: `Desayuno blablabla`,
      alimentos: [
        {
          alimento: "Tostadas con tomate",
          carbohidratos: "X",
          proteinas: "X",
          grasas: "X"
        },
        {
          alimento: "Zumo de naranja",
          carbohidratos: "X",
          proteinas: "X",
          grasas: "X"
        }
    ]}, {
      nombre: 'Comida',
      carbohidratos: "X carbohidratos",
      proteinas: "X proteinas",
      grasas: "X grasas",
      description: `Comida blablabla`,
      alimentos: [
        {
          alimento: "Espinacas con queso",
          carbohidratos: "X",
          proteinas: "X",
          grasas: "X"
        },
        {
          alimento: "Pollo a la plancha",
          carbohidratos: "X",
          proteinas: "X",
          grasas: "X"
        }
      ]
    }, {
      nombre: 'Cena',
      carbohidratos: "X carbohidratos",
      proteinas: "X proteinas",
      grasas: "X grasas",
      description: `Cena blablabla`,
      alimentos: [
        {
          alimento: "Tortilla francesa",
          carbohidratos: "X",
          proteinas: "X",
          grasas: "X"
        },
        {
          alimento: "Crema de verduras",
          carbohidratos: "X",
          proteinas: "X",
          grasas: "X"
        }
      ]
    }
  ];


