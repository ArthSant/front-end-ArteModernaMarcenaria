import { ClienteServiceService } from 'src/app/services/cliente-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(private clienteService:ClienteServiceService) {}

  clienteCount:number = 0;
  finalizadosCount:number = 0;
  emAndamentoCount:number = 0;
    ngOnInit() {
       this.clienteService.getCount().subscribe(quantidade => {
            this.clienteCount=quantidade;
       })
    }

}
