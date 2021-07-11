import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-plan',
  templateUrl: './weekly-plan.component.html',
  styleUrls: ['./weekly-plan.component.css']
})
export class WeeklyPlanComponent implements OnInit {

  semana = ELEMENT_DATA;
  comidas = ['desayuno', 'almuerzo', 'comida', 'merienda', 'cena']

  constructor() { }

  ngOnInit(): void {
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



