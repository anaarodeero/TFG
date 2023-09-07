import { AfterViewInit, Component, OnInit } from '@angular/core';
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
  home = false;

  constructor(private router: Router, private usuarioService: UsuarioService) {
    this.usuarioService.userLogIn.subscribe( (value: any) => {
      this.userLogIn = value;
    });
    this.usuarioService.home.subscribe( (value: any) => {
      this.home = value;
    });
  }

  ngOnInit(): void {
    // console.log(this.usuarioService.home)
    // if(this.usuarioService.home){
    //   this.home = true;
    // }
    if(this.userLogIn){
      console.log("userrrrr", this.usuarioService.usuarioValue)
      if(this.usuarioService.usuarioValue.nombre) {
        this.user = this.usuarioService.usuarioValue.nombre;
      } else {
        this.user = this.usuarioService.usuarioValue.usuario.nombre;
      }
    }
    if(this.router.url.includes("login")){
      this.loginPage = true;
    } else if(this.router.url.includes("register")){
     this.registerPage = true;
     }
    // this.usuarioService.isLoggedIn().subscribe(result => {
    //  if(result) {
    //    console.log("login", this.usuarioService.usuarioValue)
    //   //  this.userLogIn = true
    //    this.user = this.usuarioService.usuarioValue.nombre;
    //  }
    //  if(this.router.url.includes("login")){
    //    this.loginPage = true;
    //  } else if(this.router.url.includes("register")){
    //   this.registerPage = true;
    //   }
    // })
  }

  editar(){
    this.router.navigateByUrl('/edit');
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
