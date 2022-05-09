import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dieta } from 'src/app/models/enums';
import { PlanSemanal } from 'src/app/models/plan';
import { Usuario } from 'src/app/models/usuario';
import { PlanComidaService } from 'src/app/services/plan-comida.service';
import { UsuarioService } from 'src/app/services/usuario.service';

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

  constructor(private planComidaService: PlanComidaService, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    if(this.usuarioService.usuarioActual.planComida){
      console.log("cogerlo")
      this.planComidaService.getMyPlan(this.usuarioService.usuarioActual.planComida).subscribe(result => {
        this.planSemanal = result
      });
    } else {
      console.log("crealo")
      this.planComidaService.createMyPlan(Dieta.REGULAR, this.usuarioService.usuarioActual._id).subscribe((result:any) => {
        this.usuarioService.updateUsuarioValue()
        this.planSemanal = result.data as PlanSemanal
      })
    }
  }

  cambiar(){
    this.planComidaService.createMyPlan(Dieta.REGULAR, this.usuarioService.usuarioActual._id).subscribe((result:any) => {
      this.usuarioService.updateUsuarioValue()
      this.planSemanal = result.data as PlanSemanal
    })
  }

  infoDia(index: number){
    console.log("ir a dia " + index)
    this.router.navigateByUrl('/daily-plan/' + index)
  }

}





