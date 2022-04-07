import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalGuard implements CanActivate {

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(!this.usuarioService.isLoggedIn()){
        console.log("No estoy logeado")
        if(this.router.url.includes("dashboard")) {
          this.router.navigateByUrl('/login');
          return false;
        }
      } else {
        console.log("Estoy logeado")
        if(this.router.url.includes("login") && this.router.url.includes("register")) {
          this.router.navigateByUrl('/dashboard');
          return false;
        }
      }
    return true;
  }

}
