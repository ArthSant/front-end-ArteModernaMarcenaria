import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';
import { PedidoServiceService } from 'src/app/services/pedido-service.service';

export interface Pedido {
  nome: string;
  nomePedido: string;
  cpf:string;
  status: string;

}




@Component({
  selector: 'app-em-andamento',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class EmAndamentoComponent {


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private clienteService:ClienteServiceService,private pedidoService:PedidoServiceService) {
    this.dataSource = new MatTableDataSource(this.listaClientes);

  }

  listaClientes : any[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'contato','email'];
  dataSource: MatTableDataSource<Pedido>;
  statusSelected = false;

  selectedOption: string | undefined; // Variável para armazenar a opção selecionada
  options = [ // Array de opções para o dropdown
    { value: 'Finalizado', viewValue: 'Finalizado' },
    { value: 'Em Andamento', viewValue: 'Em Andamento' },
    { value: 'Cancelados', viewValue: 'Cancelados' },
  ];


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


  }



  pegarPedidos(option:any) {
    this.pedidoService.getByStatus(option).subscribe((data : Pedido[] )=> {
        this.dataSource.data = data;
    })
  }


  afterSelectedOption(event:any) {
    console.log(this.selectedOption);
    this.statusSelected = true;
    this.pegarPedidos(this.selectedOption);

  }

}


