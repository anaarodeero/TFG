import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import {RequestOptions, Request, RequestMethod} from '@angular/http';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private usuarioSubject: BehaviorSubject<Usuario>;
  public usuario: Observable<Usuario>;

  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) {
    this.usuarioSubject = new BehaviorSubject<Usuario>(
      JSON.parse(localStorage.getItem('usuario'))
    );
    this.usuario = this.usuarioSubject.asObservable();
  }

  public get usuarioValue(): Usuario {
    return this.usuarioSubject.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<Usuario>('http://localhost:4000/api/login', {
        email,
        password,
      })
      .pipe(
        map((usuario) => {
          // store usuario details and jwt token in local storage to keep usuario logged in between page refreshes
          localStorage.setItem('usuario', JSON.stringify(usuario));
          this.usuarioSubject.next(usuario);
          return usuario;
        })
      );
  }

  isLoggedIn(){
    return this.http.post('http://localhost:4000/api/authenticate', {token: this.cookieService.get('CookieSesion')}).subscribe((result)=>{
      return result;
    })
  }

  authenticate(token: string){
    return this.http.post('http://localhost:4000/api/authenticate', token);
  }

  logout() {
    // remove usuario from local storage and set current usuario to null
    localStorage.removeItem('usuario');
    this.usuarioSubject.next(null);
    this.router.navigate(['/login']);
  }

  register(usuario: Usuario) {
    return this.http.post('http://localhost:4000/api/register', usuario);
  }

  getAll() {
    return this.http.get<Usuario[]>(`http://localhost:4000/usuarios`);
  }

  getUser() {
    let headers = new HttpHeaders();
    //headers.append('Cookie',token);
    headers.append("Authorization","Bearer " + this.cookieService.get('CookieSesion')) ;
    return this.http.get<Usuario>('http://localhost:4000/api/getUser', {
      headers: headers
    });
    //return this.http.get<Usuario>(`http://localhost:4000/getUser`, requestOptions);
  }

  getUserByEmail(email: string){
    let paramsQuery = new HttpParams().set("email", email);
    console.log("parametros", paramsQuery)
    return this.http.get<Usuario>('http://localhost:4000/api/getUserByEmail', {
      params: paramsQuery
    });
  }

  update(params: any) {
    return this.http.put(`http://localhost:4000/api/update`, params);
  }

  delete(id: string) {
    return this.http.delete(`http://localhost:4000/usuarios/${id}`).pipe(
      map((x) => {
        // auto logout if the logged in usuario deleted their own record
        if (id == this.usuarioValue._id) {
          this.logout();
        }
        return x;
      })
    );
  }
}
