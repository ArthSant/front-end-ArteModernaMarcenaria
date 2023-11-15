import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  constructor(private http:HttpClient) { }
  url = 'https://viacep.com.br/ws/';

  getCep(cep:string) {
     return this.http.get(`${this.url}${cep}/json`);
  }
}
