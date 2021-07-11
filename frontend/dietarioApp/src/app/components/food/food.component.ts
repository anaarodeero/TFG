import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddFoodDialogComponent } from './../add-food-dialog/add-food-dialog.component'


export interface ListadoAlimentos {
  nombre: string;
  carbohidratos: number;
  proteinas: number;
  grasas: number;
}

const ELEMENT_DATA: ListadoAlimentos[] = [
  {nombre: 'Albahaca', carbohidratos: 111, proteinas: 111, grasas: 111},
  {nombre: 'Zanahoria', carbohidratos: 111, proteinas: 111, grasas: 111},
  {nombre: 'Tomate', carbohidratos: 111, proteinas: 111, grasas: 111},
  {nombre: 'Seta', carbohidratos: 111, proteinas: 111, grasas: 111},
  {nombre: 'Rúcula', carbohidratos: 111, proteinas: 111, grasas: 111},
  {nombre: 'Repollo', carbohidratos: 111, proteinas: 111, grasas: 111},
  {nombre: 'Remolacha', carbohidratos: 111, proteinas: 111, grasas: 111},
  {nombre: 'Rábano', carbohidratos: 111, proteinas: 111, grasas: 111},
  {nombre: 'Puré de patata', carbohidratos: 111, proteinas: 111, grasas: 111},
  {nombre: 'Puerro', carbohidratos: 111, proteinas: 111, grasas: 111},
  {nombre: 'Pimiento frito', carbohidratos: 111, proteinas: 111, grasas: 111},
  {nombre: 'Pimiento rojo', carbohidratos: 111, proteinas: 111, grasas: 111},
  {nombre: 'Pepino', carbohidratos: 111, proteinas: 111, grasas: 111},
  {nombre: 'Pepinillos en vinagre', carbohidratos: 111, proteinas: 111, grasas: 111},
  {nombre: 'Patata hervida', carbohidratos: 111, proteinas: 111, grasas: 111},
  {nombre: 'Patata cruda', carbohidratos: 111, proteinas: 111, grasas: 111},
  {nombre: 'Patata asada', carbohidratos: 111, proteinas: 111, grasas: 111},
];

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class FoodComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre', 'carbohidratos', 'proteinas', 'grasas'];
  displayedColumns_sm: string[] = ['nombre', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  expandedElement: ListadoAlimentos | null;
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

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
