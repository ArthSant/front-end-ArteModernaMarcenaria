import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoServiceService {

  constructor(private http:HttpClient) { }


     url = "http://localhost:8080/pedido";


     getByStatus(status:string) : Observable<any> {

      return this.http.get(`${this.url}/porStatus/${status}`);
     }

     updateByStatus(data:object) : Observable<any> {
        return this.http.put(`${this.url}/atualizarStatus`,data);
     }
}
