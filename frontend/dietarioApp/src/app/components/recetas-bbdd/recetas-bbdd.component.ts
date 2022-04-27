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

  // displayedColumns: string[] = ['nombre', 'cal', 'pr', 'gr', 'hc'];
  displayedColumns: string[] = ['nombre', 'action'];
  dataSource: MatTableDataSource<Receta>;
  recetasBBDD: Receta[];
  expandedElement: Receta | null;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  openDialog() {
    // const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '800px'

    // const dialogRef = this.dialog.open(AddFoodDialogComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private recetaService: RecetaService, private router: Router) {}

  masInfo(element: any){
    this.router.navigateByUrl('/receta/'+element.idReceta)
  }

  ngOnInit() {
    this.recetaService.getAll().subscribe(response => {
      this.recetasBBDD = response
      this.dataSource = new MatTableDataSource(this.recetasBBDD);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(response)
    })
  }



}
