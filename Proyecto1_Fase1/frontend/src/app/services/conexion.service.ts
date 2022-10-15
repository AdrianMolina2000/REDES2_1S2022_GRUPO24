import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private httpClient : HttpClient) { }

  getData(data : string){
    return this.httpClient.get(environment.apiURL + data);
  }
}
