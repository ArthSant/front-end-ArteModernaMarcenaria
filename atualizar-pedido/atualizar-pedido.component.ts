import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalPerguntaExcluirComponent } from '../clientes/list-clientes/modal-pergunta-excluir/modal-pergunta-excluir.component';
import { ClienteServiceService } from '../services/cliente-service.service';
import { UserServiceService } from '../services/user-service.service';
import { ModalMudarStatusComponent } from './modal-mudar-status/modal-mudar-status.component';
import { PedidoServiceService } from '../services/pedido-service.service';


export interface Pedido {
  id:number;
  nome: string;
  nomePedido: string;
  cpf:string;
  status: string;

}



@Component({
  selector: 'app-atualizar-pedido',
  templateUrl: './atualizar-pedido.component.html',
  styleUrls: ['./atualizar-pedido.component.scss']
})
export class AtualizarPedidoComponent {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private clienteService:ClienteServiceService,public dialog:MatDialog,private userService:UserServiceService,private pedidoService:PedidoServiceService) {
    this.dataSource = new MatTableDataSource(this.listaClientes);

  }

    listaClientes : any[] = [];

    displayedColumns: string[] = ['id','nome', 'nomePedido', 'cpf', 'status'];
    dataSource: MatTableDataSource<Pedido>;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ngOnInit () : void {

    this.pegarPedidos("EM_ANDAMENTO");

  }




  pegarPedidos(option:any) {
    this.pedidoService.getByStatus(option).subscribe((data : Pedido[] )=> {
        this.dataSource.data = data;
    })
  }

  updateStatus(campo0:number,campo1:string,campo2:string,campo3:string) {
      const statusDTO = {
        id:campo0,
        cpf:campo1,
        nomePedido:campo2,
        status:campo3

      }

      console.log(statusDTO);


      this.pedidoService.updateByStatus(statusDTO).subscribe(response => {
        console.log(response);

      });

  }


}
