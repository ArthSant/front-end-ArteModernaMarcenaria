import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

     cpf : string = '';
   setId(cpf:string) {
      this.cpf = cpf;
   }

   getCpf() {
      return this.cpf;
   }

}
