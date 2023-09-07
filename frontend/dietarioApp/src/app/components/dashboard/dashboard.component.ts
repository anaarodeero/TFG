import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) {

  }

  ngOnInit(): void {

  }

  recetas(){
    this.router.navigateByUrl('receta')
  }

  alimentos(){
    this.router.navigateByUrl('alimento')
  }

  plan(){
    this.router.navigateByUrl('weekly-plan')
  }

  pyramid(){
    this.router.navigateByUrl('pyramid')
  }

  pyramidveg(){
    this.router.navigateByUrl('pyramidveg')
  }

  // opened: boolean;
  // public map: Map<string,string>;

  // private _transformer = (node: TreeNode, level: number) => {
  //   return {
  //     expandable: !!node.children && node.children.length > 0,
  //     name: node.name,
  //     level: level,
  //   };
  // };

  // treeControl = new FlatTreeControl<ExampleFlatNode>(
  //   node => node.level,
  //   node => node.expandable,
  // );

  // treeFlattener = new MatTreeFlattener(
  //   this._transformer,
  //   node => node.level,
  //   node => node.expandable,
  //   node => node.children,
  // );

  // dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  // constructor(private usuarioService: UsuarioService, private router: Router) {
  //   this.dataSource.data = TREE_DATA;
  // }
  // ngOnInit(): void {
  //   this.map = new Map([
  //     ["Recetas","receta"],
  //     ["Alimentos","alimento"],
  //     ["Regular","pyramid"],
  //     ["Vegetariana","pyramidveg"],
  //     ["Vegana","pyramidveg"],
  //     ["Plan semanal","weekly-plan"]
  //   ])

  // }
  // hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  // abrir(node:any){
  //   console.log("node", node)
  //   let ruta = this.map.get(node.name)
  //   this.router.navigateByUrl("/"+ruta)
  // }

}

// interface TreeNode {
//   name: string;
//   children?: TreeNode[];
// }

// const TREE_DATA: TreeNode[] = [
//   {
//     name: 'Bases de datos',
//     children: [{name: 'Recetas'}, {name: 'Alimentos'}],
//   },
//   {
//     name: 'Piramides',
//     children: [{name: 'Regular'}, {name: 'Vegetariana'}, {name: 'Vegana'}],
//   },
//   {
//     name: 'Tus datos',
//     children: [{name: 'Plan semanal'}],
//   }
// ];

// /** Flat node with expandable and level information */
// interface ExampleFlatNode {
//   expandable: boolean;
//   name: string;
//   level: number;
// }
