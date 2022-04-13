import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Receta } from '../models/receta';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RecetaService {

  constructor(private router: Router, private http: HttpClient) {

  }

  getAll() {
    return this.http.get<Receta[]>(`http://localhost:4000/api/receta`);
  }

  getNumeroRecetas(){
    return this.http.get<Receta>('http://localhost:4000/api/receta/getNumeroRecetas')
  }

  getRecetaById(id: number){
    let paramsQuery = new HttpParams().set("id", id);
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

}
