import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Dieta, Frecuencia } from 'src/app/models/enums';
import { DistribucionCategoriaAlimento, Piramide } from 'src/app/models/piramide';
import { Usuario } from 'src/app/models/usuario';
import { AlimentoService } from 'src/app/services/alimento.service';
import { PiramideService } from 'src/app/services/piramide.service';
import { RecetaService } from 'src/app/services/receta.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-food-pyramid-veg',
  templateUrl: './food-pyramid-veg.component.html',
  styleUrls: ['./food-pyramid-veg.component.css']
})
export class FoodPyramidVegComponent implements OnInit {

  piramideVegetariana: Piramide;
  piramideVegana: Piramide;
  categoriaDiaria: DistribucionCategoriaAlimento[] = [];
  categoriaSemanal: DistribucionCategoriaAlimento[] = [];
  categoriaOcasional: DistribucionCategoriaAlimento[] = [];

  categoriaDiariaVegana: DistribucionCategoriaAlimento[] = [];
  categoriaSemanalVegana: DistribucionCategoriaAlimento[] = [];
  categoriaOcasionalVegana: DistribucionCategoriaAlimento[] = [];
  dietaRegular: boolean = true;

  constructor(private piramideService: PiramideService, private usuarioService: UsuarioService, private location: Location) { }

  ngOnInit(): void {
    this.usuarioService.getUser().subscribe(usr => {
      let usuario: Usuario = usr
      console.log("usr", usuario)
      this.cargarPiramides();
    })
  }

  volver(){
    this.location.back();
  }


  cargarPiramides(){
    this.piramideService.getPiramideByDieta(Dieta.VEGETARIANA).subscribe(elemento => {
      console.log("pir", elemento)
      this.piramideVegetariana = elemento
      elemento.piramide.forEach(elem => {
        if(elem.frecuencia === Frecuencia.DIARIA){
          this.categoriaDiaria.push(elem)
        } else if(elem.frecuencia === Frecuencia.SEMANAL){
          this.categoriaSemanal.push(elem)
        } else {
          this.categoriaOcasional.push(elem)
        }
      })
    })

    this.piramideService.getPiramideByDieta(Dieta.VEGANA).subscribe(elemento => {
      console.log("pir", elemento)
      this.piramideVegana = elemento
      elemento.piramide.forEach(elem => {
        if(elem.frecuencia === Frecuencia.DIARIA){
          this.categoriaDiariaVegana.push(elem)
        } else if(elem.frecuencia === Frecuencia.SEMANAL){
          this.categoriaSemanalVegana.push(elem)
        } else {
          this.categoriaOcasionalVegana.push(elem)
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

}
