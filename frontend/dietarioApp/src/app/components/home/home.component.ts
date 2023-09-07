import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.isLoggedIn().subscribe(result => {
      if(result) {
        this.router.navigateByUrl('/dashboard');
      }
    })

    // if(this.usuarioService.usuarioValue){
    //   this.router.navigateByUrl('/dashboard')
    // }
  }

  registrar(){
    this.router.navigateByUrl('/register');
  }

  iniciarSesion(){
    this.router.navigateByUrl('/login');
  }

}
