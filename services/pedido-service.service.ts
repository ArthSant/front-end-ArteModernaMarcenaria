import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoServiceService {

  constructor(private http:HttpClient) { }


     url = "http://localhost:8080/";


     getByStatus(status:string) : Observable<any> {

        return this.http.get(`${this.url}pedido/porStatus/${status.toUpperCase}`);
     }



}
