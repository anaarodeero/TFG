import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Piramide } from '../models/piramide';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Categoria, Dieta } from '../models/enums';
import { PlanSemanal } from '../models/plan';
//import {RequestOptions, Request, RequestMethod} from '@angular/http';

@Injectable({ providedIn: 'root' })
export class PlanComidaService {

  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) {

  }

  getMyPlan(idPlan: number) {
    let paramsQuery = new HttpParams().set("id", idPlan);
    console.log("parametros", paramsQuery)
    return this.http.get<PlanSemanal>('http://localhost:4000/api/plan/getPlan', {
      params: paramsQuery
    });
  }

  createMyPlan(dieta: Dieta, idUsuario: string) {
    return this.http.post('http://localhost:4000/api/plan/create', {
      dieta: dieta,
      usuario: idUsuario
    });
  }

  // getAll() {
  //   return this.http.get<Piramide[]>(`http://localhost:4000/api/piramide`);
  // }

  // getPiramideById(id: number){
  //   let paramsQuery = new HttpParams().set("id", id);
  //   console.log("parametros", paramsQuery)
  //   return this.http.get<Piramide>('http://localhost:4000/api/piramide/getPiramide', {
  //     params: paramsQuery
  //   });
  // }

  // getPiramideByDieta(dieta: Dieta){
  //   let paramsQuery = new HttpParams().set("dieta", dieta);
  //   console.log("dieta", dieta)
  //   console.log("parametros", paramsQuery)
  //   return this.http.get<Piramide>('http://localhost:4000/api/piramide/getPiramideByDieta', {
  //     params: paramsQuery
  //   });
  // }


}
