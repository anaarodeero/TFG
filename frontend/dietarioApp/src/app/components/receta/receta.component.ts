import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria, Dieta, Receta } from 'src/app/models/receta';
import { RecetaService } from 'src/app/services/receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  receta: Receta;

  constructor(private route: ActivatedRoute, private recetaService: RecetaService, private router: Router) { }

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get('id');
    let regEx: RegExp = /^[0-9]+$/
    if(regEx.test(param)){
      this.recetaService.getRecetaById(Number(param)).subscribe(response => {
        this.receta = response;
      })
    } else {
      this.router.navigateByUrl('/receta')
    }

  }

  volver(){
    this.router.navigateByUrl('/receta')
  }
}
