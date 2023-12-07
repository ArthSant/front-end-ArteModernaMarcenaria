import { ClienteServiceService } from 'src/app/services/cliente-service.service';
import { Component } from '@angular/core';
import { PedidoServiceService } from '../services/pedido-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(private clienteService:ClienteServiceService,private pedidoService:PedidoServiceService) {}

  clienteCount:number = 0;
  finalizadosCount:number = 0;
  emAndamentoCount:number = 0;
    ngOnInit() {
       this.clienteService.getCount().subscribe(quantidade => {
            this.clienteCount=quantidade;
       })

       this.pedidoService.getCountByStatus('FINALIZADO').subscribe(quantidade => {
          this.finalizadosCount = quantidade;
       })


       this.pedidoService.getCountByStatus('EM_ANDAMENTO').subscribe(quantidade => {
        this.emAndamentoCount = quantidade;
     })
    }

}
