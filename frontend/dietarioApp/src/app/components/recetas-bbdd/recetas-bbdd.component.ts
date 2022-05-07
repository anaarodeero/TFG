import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Receta } from 'src/app/models/receta';
import { AlimentoService } from 'src/app/services/alimento.service';
import { RecetaService } from 'src/app/services/receta.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Router } from '@angular/router';
import { RecetaSimple } from 'src/app/models/recetaSimple';
import { Alimento } from 'src/app/models/alimento';

@Component({
  selector: 'app-recetas-bbdd',
  templateUrl: './recetas-bbdd.component.html',
  styleUrls: ['./recetas-bbdd.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class RecetasBBDDComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'action'];
  dataSource: MatTableDataSource<Receta>;
  dataSourceSimple: MatTableDataSource<RecetaSimple>;
  recetasBBDD: Receta[];
  recetasSimplesBBDD: RecetaSimple[];
  expandedElement: Receta | null;
  alimentosNombres: Map<Number, String>
  alimentosIds: number[] = []


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterSimple(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceSimple.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild('MatPaginator', {static: true}) paginator: MatPaginator;
  @ViewChild('MatSort') sort: MatSort;

  @ViewChild('MatPaginator2', {static: true}) paginatorSimple: MatPaginator;
  @ViewChild('MatSort2') sortSimple: MatSort;

  constructor(public dialog: MatDialog, private recetaService: RecetaService, private router: Router, private alimentoService: AlimentoService) {}

  masInfo(element: any){
    this.router.navigateByUrl('/receta/'+element.idReceta)
  }

  ngOnInit() {
    this.alimentosNombres = new Map();
    this.recetaService.getAll().subscribe(response => {
      this.recetasBBDD = response
      this.dataSource = new MatTableDataSource(this.recetasBBDD);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log("todas", response)
    })
    this.recetaService.getAllSimples().subscribe(response => {
      this.recetasSimplesBBDD = response
      this.dataSourceSimple = new MatTableDataSource(this.recetasSimplesBBDD);
      this.dataSourceSimple.sort = this.sortSimple;
      this.dataSourceSimple.paginator = this.paginatorSimple;
      console.log("simples: ", response)

      let idsAll = this.recetasSimplesBBDD.map(function(item) { return item.alimentos; }).flat(1);
      let idsUnique = [...new Set(idsAll)];
      console.log("flatmap: ", idsUnique)

      // this.recetasSimplesBBDD.forEach(recetaSimple => {
      //   recetaSimple.alimentos.filter(alimentoId => alimentoId != 0).forEach(alimentoId => {

      //     if(!this.alimentosIds.includes(alimentoId.valueOf())){
      //       this.alimentosIds.push(alimentoId.valueOf())
      //     }
      //   })
      // })
      this.alimentoService.getMultipleAlimentoByIds(idsUnique).subscribe(response => {
        console.log("multiple alimentos", response)
        response.forEach(alimento => {
          this.alimentosNombres.set(alimento.idAlimento, alimento.nombre)
        });
        this.alimentosNombres.set(0, "Cualquiera")
        console.log("nom,bres: ", this.alimentosNombres)
      });


    })
  }

  // getNombreAlimento(alimentoId: number){
  //   let alimento:String;
  //   this.alimentoService.getAlimentoNombreById(alimentoId).subscribe(response => {
  //     alimento = response
  //     console.log("nombre", response)
  //   })
  //   return alimento;
  // }



}
