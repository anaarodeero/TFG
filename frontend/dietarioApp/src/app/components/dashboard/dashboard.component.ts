import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  opened: boolean;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.opened = true;
  }

  logout(){
    this.usuarioService.logout();
  }

  editProfile(){
    this.router.navigateByUrl('/edit')
  }

}
