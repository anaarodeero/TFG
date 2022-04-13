import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Alimento } from '../models/alimento';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import {RequestOptions, Request, RequestMethod} from '@angular/http';

@Injectable({ providedIn: 'root' })
export class AlimentoService {

  constructor(private router: Router, private http: HttpClient) {

  }

  getAll() {
    return this.http.get<Alimento[]>(`http://localhost:4000/api/alimento`);
  }

  getNumeroAlimentos(){
    return this.getNumeroAlimentos2();
  }

  getNumeroAlimentos2(){
    let nun;
    setTimeout(() => {
      this.http.get<Alimento>('http://localhost:4000/api/alimento/getNumeroAlimentos').subscribe(num => {
        nun = num;
      })
    }, 5000);
    console.log("num:", nun)
    return nun;
  }

  getAlimentoById(id: number){
    let paramsQuery = new HttpParams().set("id", id);
    console.log("parametros", paramsQuery)
    let alime: Alimento
    return this.http.get<Alimento>('http://localhost:4000/api/alimento/getAlimento', {
      params: paramsQuery
    })
    // return salida;
  }

  createAlimento(alimento: Alimento){
    console.log("creamos2")
    return this.http.post<Alimento>('http://localhost:4000/api/alimento/create', alimento);
  }

}
