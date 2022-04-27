import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CoreModule } from '@angular/flex-layout';
import { firstValueFrom } from 'rxjs';
import { Alimento } from 'src/app/models/alimento';
import { DistribucionCategoriaAlimento, Frecuencia, Piramide } from 'src/app/models/piramide';
import { AlimentoService } from 'src/app/services/alimento.service';
import { PiramideService } from 'src/app/services/piramide.service';
import { RecetaService } from 'src/app/services/receta.service';

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

  piramide: Piramide;
  categoriaDiaria: DistribucionCategoriaAlimento[] = [];
  categoriaSemanal: DistribucionCategoriaAlimento[] = [];

  constructor(private piramideService: PiramideService, private alimentoService: AlimentoService, private recetaService: RecetaService) { }

  ngOnInit(): void {
    // this.getPiramide();
    // this.getAlimento();
    // let alimento = this.getAlimento();
    // console.log("numero:", this.getNumeroAlimentos())
    // this.getRecetas();
    this.cargarPiramide();
  }


  cargarPiramide(){
    this.piramideService.getPiramideById(1).subscribe(elemento => {
      this.piramide = elemento
      elemento.piramide.forEach(elem => {
        if(elem.frecuencia === Frecuencia.DIARIA){
          this.categoriaDiaria.push(elem)
        } else {
          this.categoriaSemanal.push(elem)
        }
      })
    })
  }

  getNumeroRaciones(alimento: DistribucionCategoriaAlimento){
    if(alimento.limiteSuperior == alimento.limiteInferior) {
      if(alimento.limiteSuperior == 1) return "1 ración"
      return alimento.limiteSuperior + " raciones"
    } else {
      return alimento.limiteInferior + " - " + alimento.limiteSuperior + " raciones";
    }
  }








  getRecetas(){
    this.recetaService.getAll().subscribe(response => {
      console.log("Todas recetas: ", response)
    })
    this.recetaService.getNumeroRecetas().subscribe(response => {
      console.log("Numero recetas: ", response)
    })

    this.recetaService.getRecetaById(34).subscribe(response => {
      console.log("Receta 34: ", response)
    })
  }

  getPiramide(){
    let piramides: Piramide[];
    this.piramideService.getAll().subscribe(response => {
      console.log("PIRAMIDES: ", response)
    })

    this.piramideService.getPiramideById(1).subscribe(response => {
      console.log("PIRAMIDE: ", response)
    })
  }

  // async getAlimento(){
  //   let piramides: Piramide[];
  //   let num = this.alimentoService.getNumeroAlimentos()
  //   console.log("TAMAÑO: ", num)

  //   let alimento: Alimento;
  //   await this.alimentoService.getAlimentoById(345).subscribe(response => {
  //     console.log("ALIMENTO dentro: ", response)
  //     alimento = response
  //   })
  //   console.log("ALIMENTO fuera: ", alimento)

  //   // let alim: Alimento = {
  //   //   idAlimento
  //   // }


  // }

  getNumeroAlimentos(){
    this.alimentoService.getNumeroAlimentos()
    // return this.alimentoService.getNumeroAlimentos().subscribe(numero => {
    //   console.log("numero:", numero)
    //   return numero
    // });
  }

  getAlimento(){
    this.alimentoService.getAlimentoById(345).subscribe(alimento => {
      console.log("alimento:", alimento)
    });

    // let alim: Alimento = {
    //   idAlimento
    // }


  }

}
