import { Component } from '@angular/core';
import { ClienteServiceService } from '../services/cliente-service.service';
import { MatDialog } from '@angular/material/dialog';
import { NotFoundComponent } from '../clientes/registrar-pedido/modal/not-found/not-found.component';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


interface Produto {
  nome:string,
  preco:number,
  quantidade:number
}



@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.scss']
})
export class OrcamentoComponent {


    constructor(private clienteService:ClienteServiceService, public dialog:MatDialog) {}

    showSelect = false;
    afterSelect = false;
    produtos: string[] = [];
    precos:string[] = [];

    consultarCpf(cpf:string) {
        if(cpf != '') {
            this.clienteService.getUsuario(cpf).subscribe(resultado => {
                  if(resultado.cpf != null)
                      this.showSelect = true;
                  else
                    this.dialog.open(NotFoundComponent);

            })
        }

    }

    selectedOption: string | undefined; // Variável para armazenar a opção selecionada
  options = [ // Array de opções para o dropdown
    { value: 'Finalizados', viewValue: 'Finalizados' },
    { value: 'Em Andamento', viewValue: 'Em Andamento' },
    { value: 'Cancelados', viewValue: 'Cancelados' },
  ];



  afterSelectedOption(event:any) {
      this.afterSelect = true;
  }

  Produto: Produto[] = [];

  addNewRow() {
    this.Produto.push({ nome: '', preco: 0 , quantidade:0 });
  }

  removeRow(index: number) {
    this.Produto.splice(index, 1);
  }
}
