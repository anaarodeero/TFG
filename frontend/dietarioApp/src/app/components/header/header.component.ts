import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLogIn: boolean = false;

  constructor(private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  registrar(){
    this.router.navigateByUrl('/register');
  }

  iniciarSesion(){
    this.router.navigateByUrl('/login');
  }

  cerrarSesion(){
    this.cookieService.delete('CookieSesion');
    this.router.navigateByUrl('/home');
  }

}
