import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLogIn: boolean = false;
  loginPage: boolean = false;
  registerPage: boolean = false;
  user: string = "";

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.isLoggedIn().subscribe(result => {
     if(result) {
       this.userLogIn = true
       this.user = this.usuarioService.usuarioActual.nombre;
     }
     if(this.router.url.includes("login")){
       this.loginPage = true;
     } else if(this.router.url.includes("register")){
      this.registerPage = true;
      }
    })
  }

  registrar(){
    this.router.navigateByUrl('/register');
  }

  iniciarSesion(){
    this.router.navigateByUrl('/login');
  }

  cerrarSesion(){
    this.usuarioService.logout();
    this.router.navigateByUrl('/home');
  }

}
