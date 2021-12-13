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

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
      return this.usuarioService.isLoggedIn().then((result: boolean) => { 
        if(!result) {
          if(!this.router.url.includes("home") && !this.router.url.includes("register")) this.router.navigateByUrl('/login');
        }
        return result; 
      });

    }
  
}
