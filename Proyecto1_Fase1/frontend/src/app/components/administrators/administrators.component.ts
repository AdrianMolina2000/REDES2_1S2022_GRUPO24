import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

export interface data_administrators {
  puesto: String;
  descripcion: String;
  imagen: String;
}

@Component({
  selector: 'app-administrators',
  templateUrl: './administrators.component.html',
  styleUrls: ['./administrators.component.css']
})
export class AdministratorsComponent implements OnInit {
  //LISTA
  public administratos : data_administrators[] = []

  constructor(private Connect : ConexionService) { }

  ngOnInit(): void {
    this.Connect.getData('/Administrador').subscribe(
      res => {
        var tmpjson =JSON.parse(JSON.stringify(res))
        for(let i in tmpjson){
          var tmp : data_administrators = {
            puesto: tmpjson[i].puesto,
            descripcion : tmpjson[i].descripcion,
            imagen : tmpjson[i].imagen
          }
          this.administratos.push(tmp)
        }
      }
    )
  }

}
