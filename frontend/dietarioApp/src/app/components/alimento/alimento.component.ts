import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddAlimentoDialogComponent } from '../add-alimento-dialog/add-alimento-dialog.component'
import { Alimento } from 'src/app/models/alimento';
import { AlimentoService } from 'src/app/services/alimento.service';
import { Location } from '@angular/common';

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

    const dialogRef = this.dialog.open(AddAlimentoDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload()
      console.log(`Dialog result: ${result}`);
    });
  }

  volver(){
    this.location.back();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private alimentoService: AlimentoService, private location: Location) {}

  ngOnInit() {
    this.alimentoService.getAll().subscribe(response => {
      this.alimentosBBDD = response
      this.dataSource = new MatTableDataSource(this.alimentosBBDD);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (alimento: Alimento, filter) => {
        return alimento.nombre.toLowerCase().includes(filter);
      }
      console.log(response)
    })
  }

  getEstado(alimento: Alimento){
    if(alimento.estado){
      return " (" + alimento.estado + ")"
    } else return ""
  }

}
