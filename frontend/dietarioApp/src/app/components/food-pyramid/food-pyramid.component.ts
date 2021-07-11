import { Component, OnInit } from '@angular/core';

export interface Celda {
  colums: number;
  filas: number;
  texto: string;
}

@Component({
  selector: 'app-food-pyramid',
  templateUrl: './food-pyramid.component.html',
  styleUrls: ['./food-pyramid.component.css']
})

export class FoodPyramidComponent implements OnInit {

  celdas: Celda[] = [
    {texto: '', colums: 1, filas: 1},
    {texto: 'Alimentos', colums: 1, filas: 1},
    {texto: 'Cantidad', colums: 1, filas: 1},
    {texto: 'Alimentos de consumo diario', colums: 1, filas: 5},
    {texto: 'Pasta, arroz, pan y patatas', colums: 1, filas: 1},
    {texto: '4-6 raciones', colums: 1, filas: 1},
    {texto: 'Verduras y hortalizas', colums: 1, filas: 1},
    {texto: '2+ raciones', colums: 1, filas: 1},
    {texto: 'Frutas', colums: 1, filas: 1},
    {texto: '3+ raciones', colums: 1, filas: 1},
    {texto: 'Aceite de oliva', colums: 1, filas: 1},
    {texto: '3-6 raciones', colums: 1, filas: 1},
    {texto: 'Leche y derivados', colums: 1, filas: 1},
    {texto: '2-4 raciones', colums: 1, filas: 1},

    {texto: 'Alimentos de consumo semanal', colums: 1, filas: 4},
    {texto: 'Pescado', colums: 1, filas: 1},
    {texto: '3-4 raciones', colums: 1, filas: 1},
    {texto: 'Carnes magras, aves y huevo', colums: 1, filas: 1},
    {texto: '3-4 raciones', colums: 1, filas: 1},
    {texto: 'Legumbres', colums: 1, filas: 1},
    {texto: '3-4 raciones', colums: 1, filas: 1},
    {texto: 'Frutos secos', colums: 1, filas: 1},
    {texto: '3-7 raciones', colums: 1, filas: 1},

    {texto: 'Alimentos de consumo ocasional', colums: 1, filas: 3},
    {texto: 'Embutidos y carnes grasas', colums: 1, filas: 1},
    {texto: 'Consumo ocasional y moderado', colums: 1, filas: 1},
    {texto: 'Dulces, snacks y refescos', colums: 1, filas: 1},
    {texto: 'Consumo ocasional y moderado', colums: 1, filas: 1},
    {texto: 'Mantequilla, margarina y bollería', colums: 1, filas: 1},
    {texto: 'Consumo ocasional y moderado', colums: 1, filas: 1},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
