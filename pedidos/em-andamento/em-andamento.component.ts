import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/clientes/list-clientes/list-clientes.component';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';



export interface Status {
  nome:string;
  cpf:string;
  nomePedido:string;
  orcamento:number;
  dataPedido:Date;
  status:string;
}




@Component({
  selector: 'app-em-andamento',
  templateUrl: './em-andamento.component.html',
  styleUrls: ['./em-andamento.component.scss']
})
export class EmAndamentoComponent {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private clienteService:ClienteServiceService) {
    this.dataSource = new MatTableDataSource(this.listaClientes);

  }

    listaClientes : any[] = [];

    displayedColumns: string[] = ['status', 'nome', 'cpf', 'nomePedido','orcamento','dataPedido'];
    dataSource: MatTableDataSource<Status>;


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

    this.pegarStatus();

  }



  pegarStatus() {
    this.clienteService.getList().subscribe((data : Status[] )=> {
        this.dataSource.data = data;
        console.log(data);

    })
  }

}
