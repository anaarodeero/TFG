import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dieta } from 'src/app/models/enums';
import { PlanSemanal } from 'src/app/models/plan';
import { Usuario } from 'src/app/models/usuario';
import { PlanComidaService } from 'src/app/services/plan-comida.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-weekly-plan',
  templateUrl: './weekly-plan.component.html',
  styleUrls: ['./weekly-plan.component.css']
})
export class WeeklyPlanComponent implements OnInit {

  dias = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO']
  planSemanal: PlanSemanal = {
    id: undefined,
    dieta: undefined,
    planesDiarios: []
  };

  constructor(private planComidaService: PlanComidaService, private usuarioService: UsuarioService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    console.log("usr", this.usuarioService, this.usuarioService.usuarioValue, this.usuarioService.usuarioValue)
    if(this.usuarioService.usuarioValue.planComida){
      console.log("cogerlo")
      this.planComidaService.getMyPlan(this.usuarioService.usuarioValue.planComida).subscribe(result => {
        this.planSemanal = result
      });
    } else {
      console.log("crealo")
      this.planComidaService.createMyPlan(Dieta.REGULAR, this.usuarioService.usuarioValue._id).subscribe((result:any) => {
        this.usuarioService.updateUsuarioValue()
        this.planSemanal = result.data as PlanSemanal
      })
    }
  }

  volver(){
    this.location.back();
  }

  cambiar(){
    this.planComidaService.createMyPlan(Dieta.REGULAR, this.usuarioService.usuarioValue._id).subscribe((result:any) => {
      this.usuarioService.updateUsuarioValue()
      this.planSemanal = result.data as PlanSemanal
    })
  }

  infoDia(index: number){
    console.log("ir a dia " + index)
    this.router.navigateByUrl('/daily-plan/' + index)
  }

}





