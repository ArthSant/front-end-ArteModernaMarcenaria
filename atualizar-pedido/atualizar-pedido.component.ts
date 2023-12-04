import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalPerguntaExcluirComponent } from '../clientes/list-clientes/modal-pergunta-excluir/modal-pergunta-excluir.component';
import { ClienteServiceService } from '../services/cliente-service.service';
import { UserServiceService } from '../services/user-service.service';
import { ModalMudarStatusComponent } from './modal-mudar-status/modal-mudar-status.component';


export interface Cliente {
  idCliente: string;
  name: string;
  cpf:string;
  contato: string;
  email:string;

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

  constructor(private clienteService:ClienteServiceService,public dialog:MatDialog,private userService:UserServiceService) {
    this.dataSource = new MatTableDataSource(this.listaClientes);

  }

    listaClientes : any[] = [];

    displayedColumns: string[] = ['idCliente', 'nome', 'cpf', 'contato','email'];
    dataSource: MatTableDataSource<Cliente>;


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

    this.pegarClientes();

  }



  pegarClientes() {
    this.clienteService.getList().subscribe((data : Cliente[] )=> {
        this.dataSource.data = data;
        console.log(data);

    })
  }


  deleteUser(id:number) {
      console.log(id);
      this.userService.setId(id);
      this.dialog.open(ModalPerguntaExcluirComponent);

  }

  changeStatus(id:number) {
      this.dialog.open(ModalMudarStatusComponent);
  }


}
