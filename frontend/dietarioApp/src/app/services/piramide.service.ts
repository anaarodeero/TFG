import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Piramide } from '../models/piramide';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import {RequestOptions, Request, RequestMethod} from '@angular/http';

@Injectable({ providedIn: 'root' })
export class PiramideService {

  constructor(private router: Router, private http: HttpClient) {

  }

  getAll() {
    return this.http.get<Piramide[]>(`http://localhost:4000/api/piramide`);
  }

  getPiramideById(id: number){
    let paramsQuery = new HttpParams().set("id", id);
    console.log("parametros", paramsQuery)
    return this.http.get<Piramide>('http://localhost:4000/api/piramide/getPiramide', {
      params: paramsQuery
    });
  }

}
