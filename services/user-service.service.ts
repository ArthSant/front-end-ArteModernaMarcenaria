import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

     id : number | undefined;
   setId(id:number) {
      this.id = id;
   }

   getId() {
      return this.id;
   }

}
