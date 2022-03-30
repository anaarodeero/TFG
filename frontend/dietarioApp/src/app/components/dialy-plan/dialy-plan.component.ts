import { Component, OnInit, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SwapFoodDialogComponent } from '../swap-food-dialog/swap-food-dialog.component';

@Component({
  selector: 'app-dialy-plan',
  templateUrl: './dialy-plan.component.html',
  styleUrls: ['./dialy-plan.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class DailyPlanComponent implements OnInit {

  displayedColumns: string[] = ['select', 'nombre', 'carbohidratos', 'proteinas', 'grasas', 'kcalorias'];
  displayedColumns_sm: string[] = ['select', 'nombre', 'action'];
  _dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource(ELEMENT_DATA_2);
  nutrientes = ['carbohidratos', 'proteinas', 'grasas', 'kcalorias'];
  alimentoParam: string[] = ['alimento', 'carbohidratos', 'proteinas', 'grasas', 'kcalorias'];
  nutrientes_sm = ['Carbs', 'Prots', 'Grasas', 'Kcal'];
  expandedElement: ListadoAlimentos | null;
  alimentoSeleccionado: ArrayAlimentos;
  alimentoCambio: ListadoAlimentos;
  comidaParaEditar: ArrayComidas;
  alimentos: ArrayAlimentos[];
  panelOpenState = false;
  show: boolean = false;
  tablaShow: boolean = false;
  selected: ListadoAlimentos;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    this.dialog.open(SwapFoodDialogComponent);
  }

  mostrarTabla() {
    this.tablaShow = true;
    document.getElementById('cardTabla').style.width = "60%";
  }

  editFood(comida: string){
    switch(comida) { 
        case "Desayuno": { 
          this.comidaParaEditar = ELEMENT_DATA[0];
          break; 
        } 
        case "Almuerzo": { 
          this.comidaParaEditar = ELEMENT_DATA[1]; 
          break; 
        } 
        case "Comida": { 
          this.comidaParaEditar = ELEMENT_DATA[2]; 
          break;  
        } 
        case "Merienda": { 
          this.comidaParaEditar = ELEMENT_DATA[3]; 
          break; 
        } 
        case "Cena": { 
          this.comidaParaEditar = ELEMENT_DATA[4]; 
          break; 
        } 
        default: { 
          break; 
        } 
      }
      this.alimentos = this.comidaParaEditar.alimentos;
      this.show = true;
    
  }

  mostrarCard(){
    this.show = true;
  }

  private paginator: MatPaginator;
  private sort: MatSort;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {

  }


}

export interface ArrayAlimentos {
  alimento: string;
  carbohidratos: string;
  proteinas: string;
  grasas: string;
  kcalorias: string;
}

  export interface ArrayComidas {
    nombre: string;
    carbohidratos: string;
    proteinas: string;
    grasas: string;
    kcalorias: string;
    description: string;
    alimentos: ArrayAlimentos[];
  }
  
  const ELEMENT_DATA: ArrayComidas[] = [
    {
      nombre: 'Desayuno',
      carbohidratos: "X carbohidratos",
      proteinas: "X proteinas",
      grasas: "X grasas",
			kcalorias: "X Kcalorias",
      description: `Desayuno blablabla`,
      alimentos: [
        {
          alimento: "Tostadas con tomate",
          carbohidratos: "X",
          proteinas: "X",
          grasas: "X",
					kcalorias: "X",
        },
        {
          alimento: "Zumo de naranja",
          carbohidratos: "X",
          proteinas: "X",
          grasas: "X",
					kcalorias: "X",
        }
    ]}, {
      nombre: 'Almuerzo',
      carbohidratos: "X carbohidratos",
      proteinas: "X proteinas",
      grasas: "X grasas",
			kcalorias: "X Kcalorias",
      description: `Desayuno blablabla`,
      alimentos: [
        {
          alimento: "Yogur",
          carbohidratos: "X",
          proteinas: "X",
          grasas: "X",
					kcalorias: "X"
        }
    ]}, {
      nombre: 'Comida',
      carbohidratos: "X carbohidratos",
      proteinas: "X proteinas",
      grasas: "X grasas",
			kcalorias: "X Kcalorias",
      description: `Comida blablabla`,
      alimentos: [
        {
          alimento: "Espinacas con queso",
          carbohidratos: "X",
          proteinas: "X",
          grasas: "X",
					kcalorias: "X"
        },
        {
          alimento: "Pollo a la plancha",
          carbohidratos: "X",
          proteinas: "X",
          grasas: "X",
					kcalorias: "X"
        }
      ]
    }, {
      nombre: 'Merienda',
      carbohidratos: "X carbohidratos",
      proteinas: "X proteinas",
      grasas: "X grasas",
			kcalorias: "X Kcalorias",
      description: `Desayuno blablabla`,
      alimentos: [
        {
          alimento: "Batido de frutal",
          carbohidratos: "X",
          proteinas: "X",
          grasas: "X",
					kcalorias: "X"
        }
    ]},{
      nombre: 'Cena',
      carbohidratos: "X carbohidratos",
      proteinas: "X proteinas",
      grasas: "X grasas",
			kcalorias: "X Kcalorias",
      description: `Cena blablabla`,
      alimentos: [
        {
          alimento: "Tortilla francesa",
          carbohidratos: "X",
          proteinas: "X",
          grasas: "X",
					kcalorias: "X"
        },
        {
          alimento: "Crema de verduras",
          carbohidratos: "X",
          proteinas: "X",
          grasas: "X",
					kcalorias: "X"
        }
      ]
    }
  ];
  export interface ListadoAlimentos {
    nombre: string;
    carbohidratos: number;
    proteinas: number;
    grasas: number;
    kcalorias: number;
  }

  const ELEMENT_DATA_2: ListadoAlimentos[] = [
    {nombre: 'Albahaca', carbohidratos: 111, proteinas: 111, grasas: 111, kcalorias: 111},
    {nombre: 'Zanahoria', carbohidratos: 111, proteinas: 111, grasas: 111, kcalorias: 111},
    {nombre: 'Tomate', carbohidratos: 111, proteinas: 111, grasas: 111, kcalorias: 111},
    {nombre: 'Seta', carbohidratos: 111, proteinas: 111, grasas: 111, kcalorias: 111},
    {nombre: 'Rúcula', carbohidratos: 111, proteinas: 111, grasas: 111, kcalorias: 111},
    {nombre: 'Repollo', carbohidratos: 111, proteinas: 111, grasas: 111, kcalorias: 111},
    {nombre: 'Remolacha', carbohidratos: 111, proteinas: 111, grasas: 111, kcalorias: 111},
    {nombre: 'Rábano', carbohidratos: 111, proteinas: 111, grasas: 111, kcalorias: 111},
    {nombre: 'Puré de patata', carbohidratos: 111, proteinas: 111, grasas: 111, kcalorias: 111},
    {nombre: 'Puerro', carbohidratos: 111, proteinas: 111, grasas: 111, kcalorias: 111},
    {nombre: 'Pimiento frito', carbohidratos: 111, proteinas: 111, grasas: 111, kcalorias: 111},
    {nombre: 'Pimiento rojo', carbohidratos: 111, proteinas: 111, grasas: 111, kcalorias: 111},
    {nombre: 'Pepino', carbohidratos: 111, proteinas: 111, grasas: 111, kcalorias: 111},
    {nombre: 'Pepinillos en vinagre', carbohidratos: 111, proteinas: 111, grasas: 111, kcalorias: 111},
    {nombre: 'Patata hervida', carbohidratos: 111, proteinas: 111, grasas: 111, kcalorias: 111},
    {nombre: 'Patata cruda', carbohidratos: 111, proteinas: 111, grasas: 111, kcalorias: 111},
    {nombre: 'Patata asada', carbohidratos: 111, proteinas: 111, grasas: 111, kcalorias: 111},
  ];