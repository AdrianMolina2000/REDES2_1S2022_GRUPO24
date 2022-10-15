import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

export interface data_public_funtion {
  nombre: String;
  descripcion: String;
  imagen: String;
}

export interface data_last_news {
  nombre: String;
  descripcion : String;
  fecha: String;
}

@Component({
  selector: 'app-public-funtion',
  templateUrl: './public-funtion.component.html',
  styleUrls: ['./public-funtion.component.css']
})
export class PublicFuntionComponent implements OnInit {

  public public_funtion : data_public_funtion[] = [];
  public last_news : data_last_news[] = [];

  constructor(private Connect : ConexionService) { }

  ngOnInit(): void {

    this.Connect.getData('/FuncionPublica').subscribe(
      res => {
        var tmpjson =JSON.parse(JSON.stringify(res))
        for(let i in tmpjson){
          var tmp : data_public_funtion = {
            nombre: tmpjson[i].nombre,
            descripcion : tmpjson[i].descripcion,
            imagen : tmpjson[i].imagen
          }
          this.public_funtion.push(tmp)
        }
      }
    )


    this.Connect.getData('/UltimaNoticia').subscribe(
      res => {
        var tmpjson =JSON.parse(JSON.stringify(res))
        for(let i in tmpjson){
          var tmp_noticia : data_last_news = {
            nombre: tmpjson[i].nombre,
            descripcion : tmpjson[i].descripcion,
            fecha : tmpjson[i].fecha
          }
          this.last_news.push(tmp_noticia)
        }
      }
    )

  }

}
