import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddFoodDialogComponent } from '../add-food-dialog/add-food-dialog.component'
import { Alimento } from 'src/app/models/alimento';
import { AlimentoService } from 'src/app/services/alimento.service';


// export interface ListadoAlimentos {
//   nombre: string;
//   cal: number;
//   pr: number;
//   gr: number;
//   hc: number;
// }

// const alimentosBBDD: ListadoAlimentos[] = [
//   {nombre: 'Albahaca', cal: 111, pr: 111, gr: 111, hc: 111},
//   {nombre: 'Zanahoria', cal: 111, pr: 111, gr: 111, hc: 111},
//   {nombre: 'Tomate', cal: 111, pr: 111, gr: 111, hc: 111},
//   {nombre: 'Seta', cal: 111, pr: 111, gr: 111, hc: 111},
//   {nombre: 'Rúcula', cal: 111, pr: 111, gr: 111, hc: 111},
//   {nombre: 'Repollo', cal: 111, pr: 111, gr: 111, hc: 111},
//   {nombre: 'Remolacha', cal: 111, pr: 111, gr: 111, hc: 111},
//   {nombre: 'Rábano', cal: 111, pr: 111, gr: 111, hc: 111},
//   {nombre: 'Puré de patata', cal: 111, pr: 111, gr: 111, hc: 111},
//   {nombre: 'Puerro', cal: 111, pr: 111, gr: 111, hc: 111},
//   {nombre: 'Pimiento frito', cal: 111, pr: 111, gr: 111, hc: 111},
//   {nombre: 'Pimiento rojo', cal: 111, pr: 111, gr: 111, hc: 111},
//   {nombre: 'Pepino', cal: 111, pr: 111, gr: 111, hc: 111},
//   {nombre: 'Pepinillos en vinagre', cal: 111, pr: 111, gr: 111, hc: 111},
//   {nombre: 'Patata hervida', cal: 111, pr: 111, gr: 111, hc: 111},
//   {nombre: 'Patata cruda', cal: 111, pr: 111, gr: 111, hc: 111},
//   {nombre: 'Patata asada', cal: 111, pr: 111, gr: 111, hc: 111},
// ];

@Component({
  selector: 'app-alimento',
  templateUrl: './alimento.component.html',
  styleUrls: ['./alimento.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AlimentoComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'cal', 'pr', 'gr', 'hc'];
  displayedColumns_sm: string[] = ['nombre', 'action'];
  dataSource: MatTableDataSource<Alimento>;
  alimentosBBDD: Alimento[];
  expandedElement: Alimento | null;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '800px'

    const dialogRef = this.dialog.open(AddFoodDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private alimentoService: AlimentoService) {}

  ngOnInit() {
    this.alimentoService.getAll().subscribe(response => {
      this.alimentosBBDD = response
      this.dataSource = new MatTableDataSource(this.alimentosBBDD);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(response)
    })
  }

  getEstado(alimento: Alimento){
    if(alimento.estado){
      return " (" + alimento.estado + ")"
    } else return ""
  }

}
