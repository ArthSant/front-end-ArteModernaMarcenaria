import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(private http:HttpClient) { }

    url = "http://localhost:8080/";


    public cadastrarUsuario(usuario:any) : Observable<any> {
      console.log(usuario);


      return this.http.post<any>(`${this.url}pedido`,usuario);

    }

    public deletarUsuario(cpf:string) : Observable<any> {

         return this.http.delete(`http://localhost:8080/clientes/${cpf}`);
    }

    public atualizarUsuario(usuario:any) : Observable<any> {
      console.log(usuario);

      return this.http.put<any>(this.url,usuario);

    }

    public getUsuario(cpf:string): Observable<any> {
      return this.http.get(`http://localhost:8080/clientes/${cpf}`);

    }

    public getList() : Observable<any> {
          return this.http.get(`${this.url}cliente/listar`);
    }}
