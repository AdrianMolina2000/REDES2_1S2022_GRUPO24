import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

export interface data_developers {
  puesto: String,
  nombre: String;
  carne: String;
  curso: String;
  imagen: String;
}


@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  public developers : data_developers[] = []
  constructor(private Connect : ConexionService) { 
    
  }

  ngOnInit(): void {

    this.Connect.getData('/Desarrollador').subscribe(
      res => {
        var tmpjson =JSON.parse(JSON.stringify(res))
        for(let i in tmpjson){
          var tmp: data_developers = {
            puesto: tmpjson[i].puesto,
            nombre : tmpjson[i].nombre,
            carne : tmpjson[i].carne,
            curso : tmpjson[i].curso,
            imagen : tmpjson[i].imagen
          }
          this.developers.push(tmp)
        }
      }
    )
  }

}
