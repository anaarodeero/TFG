import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanDiario } from 'src/app/models/plan';
import { PlanComidaService } from 'src/app/services/plan-comida.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-daily-plan',
  templateUrl: './daily-plan.component.html',
  styleUrls: ['./daily-plan.component.css']
})
export class DailyPlanComponent implements OnInit {

  dias = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO']
  dia: PlanDiario = {
    id: undefined,
    desayuno: undefined,
    almuerzo: undefined,
    comida: undefined,
    merienda: undefined,
    cena: undefined
  }

  constructor(private route: ActivatedRoute, private planComidaService: PlanComidaService, private usuarioService: UsuarioService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get('id');
    let regEx: RegExp = /^[0-9]+$/
    if(regEx.test(param) && (0 <= Number(param)) && (Number(param) <= 6)){
      this.planComidaService.getMyPlan(this.usuarioService.usuarioValue.planComida).subscribe(result => {
        this.dia = result.planesDiarios[Number(param)]
        console.log(result)
      });
    } else {
      this.router.navigateByUrl('/weekly-plan')
    }
  }

  getNombreDia(){
    return this.dias[this.dia.id.valueOf()]
  }

  masInfoR(id: Number){
    this.router.navigateByUrl('/receta/' + id)
  }

  volver(){
    this.location.back();
  }


}


export interface ArrayComidas {
  diaSemana: string;
  desayuno: string[];
  almuerzo: string;
  comida: string[];
  merienda: string;
  cena: string[];
}

const ELEMENT_DATA: ArrayComidas[] = [
  {
    diaSemana: "Lunes",
    desayuno: [
      "Zumo de naranja",
      "Tostada"
    ],
    almuerzo: "Yogur",
    comida: [
      "Fritura de verduras",
      "Pollo a la plancha"
    ],
    merienda: "Batido de frutas",
    cena: [
      "Tortilla francesa"
    ]
  }, {
    diaSemana: "Martes",
    desayuno: [
      "Zumo de naranja",
      "Tostada"
    ],
    almuerzo: "Yogur",
    comida: [
      "Fritura de verduras",
      "Pollo a la plancha"
    ],
    merienda: "Batido de frutas",
    cena: [
      "Tortilla francesa"
    ]
  }, {
    diaSemana: "Miércoles",
    desayuno: [
      "Zumo de naranja",
      "Tostada"
    ],
    almuerzo: "Yogur",
    comida: [
      "Fritura de verduras",
      "Pollo a la plancha"
    ],
    merienda: "Batido de frutas",
    cena: [
      "Tortilla francesa"
    ]
  }, {
    diaSemana: "Jueves",
    desayuno: [
      "Zumo de naranja",
      "Tostada"
    ],
    almuerzo: "Yogur",
    comida: [
      "Fritura de verduras",
      "Pollo a la plancha"
    ],
    merienda: "Batido de frutas",
    cena: [
      "Tortilla francesa"
    ]
  }, {
    diaSemana: "Viernes",
    desayuno: [
      "Zumo de naranja",
      "Tostada"
    ],
    almuerzo: "Yogur",
    comida: [
      "Fritura de verduras",
      "Pollo a la plancha"
    ],
    merienda: "Batido de frutas",
    cena: [
      "Tortilla francesa"
    ]
  }, {
    diaSemana: "Sábado",
    desayuno: [
      "Zumo de naranja",
      "Tostada"
    ],
    almuerzo: "Yogur",
    comida: [
      "Fritura de verduras",
      "Pollo a la plancha"
    ],
    merienda: "Batido de frutas",
    cena: [
      "Tortilla francesa"
    ]
  }, {
    diaSemana: "Domingo",
    desayuno: [
      "Zumo de naranja",
      "Tostada"
    ],
    almuerzo: "Yogur",
    comida: [
      "Fritura de verduras",
      "Pollo a la plancha"
    ],
    merienda: "Batido de frutas",
    cena: [
      "Tortilla francesa"
    ]
  }
]



