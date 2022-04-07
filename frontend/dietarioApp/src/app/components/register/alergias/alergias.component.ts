import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-alergias',
  templateUrl: './alergias.component.html',
  styleUrls: ['./alergias.component.css']
})
export class AlergiasComponent implements OnInit {

  @Input() secondFormGroup: FormGroup;
  @Input() usuario: Usuario;
  public modoEdicion: boolean;

  alergias = ['gluten', 'sesamo', 'nueces', 'crustaceos', 'huevos', 'pescado', 'mostaza', 'lacteos', 'apio', 'cacahuetes', 'soja', 'marisco', 'altramuces', 'sulfatos'];

  getAlergia(alergia: String){
    // console.log(alergia);
    return "../../../assets/" + alergia + ".png";
  }

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    if(this.usuarioService.isLoggedIn()){
      this.modoEdicion = true;
      this.usuarioService.getUser().subscribe(
        (user) => {
          this.usuario = user
          this.usuario.alergias.forEach(alergia => {
            this.secondFormGroup.get('alergia').get(alergia).setValue(true)
          })
        }
      );
    } else {
      this.modoEdicion = false;
    }
  }


}
