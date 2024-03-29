import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Receta } from '../models/receta';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RecetaSimple } from '../models/recetaSimple';
import { Categoria } from '../models/enums';

@Injectable({ providedIn: 'root' })
export class RecetaService {

  constructor(private router: Router, private http: HttpClient) {

  }

  getAll() {
    return this.http.get<Receta[]>(`http://localhost:4000/api/receta`);
  }

  getAllSimples() {
    return this.http.get<RecetaSimple[]>(`http://localhost:4000/api/receta/simple`);
  }

  getRecetaSimpleById(id: number){
    let paramsQuery = new HttpParams().set("id", id);
    console.log("parametros", paramsQuery)
    return this.http.get<RecetaSimple>('http://localhost:4000/api/receta/simple/getReceta', {
      params: paramsQuery
    })
    // return salida;
  }

  getRecetasByCategoria(categoria: Categoria){
    let paramsQuery = new HttpParams().set("categoria", categoria);
    console.log("parametros", paramsQuery)
    return this.http.get<RecetaSimple>('http://localhost:4000/api/receta/getRecetasByCategoria', {
      params: paramsQuery
    })
    // return salida;
  }

  getNumeroRecetas(){
    return this.http.get<Receta>('http://localhost:4000/api/receta/getNumeroRecetas')
  }

  getRecetaById(id: number){
    let paramsQuery = new HttpParams().set("idReceta", id);
    console.log("parametros", paramsQuery)
    let alime: Receta
    return this.http.get<Receta>('http://localhost:4000/api/receta/getReceta', {
      params: paramsQuery
    })
    // return salida;
  }

  createReceta(receta: Receta){
    console.log("creamos2")
    return this.http.post<Receta>('http://localhost:4000/api/receta/create', receta);
  }

  createRecetaSimple(receta: RecetaSimple){
    console.log("creamos2")
    return this.http.post<RecetaSimple>('http://localhost:4000/api/receta/simple/create', receta);
  }

}
