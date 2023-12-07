import { Component } from '@angular/core';
import { ClienteServiceService } from '../services/cliente-service.service';
import { MatDialog } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { PedidoServiceService } from '../services/pedido-service.service';


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


    constructor(private pedidoService:PedidoServiceService, public dialog:MatDialog) {}

    showSelect = false;
    afterSelect = false;
    produtos: string[] = [];
    precos:string[] = [];
    afterFirstAdd = false;
    sumPrice : number = 0;
    calcClick = false;

    consultarCpf(cpf:string) {
        if(cpf != '') {
            this.pedidoService.getPedidosByCpf(cpf).subscribe(resultado => {
                  if(resultado.cpf != null) {
                      this.showSelect = true;
                      this.options = resultado.nomesPedido;
                  }

            })
        }

    }

    selectedOption: string | undefined; // Variável para armazenar a opção selecionada

    options = [];




  afterSelectedOption(event:any) {
      this.afterSelect = true;
  }

  Produto: Produto[] = [];

  addNewRow() {
    this.afterFirstAdd = true;
    this.Produto.push({ nome: '', preco: 0 , quantidade:0 });
  }

  removeRow(index: number) {
    this.Produto.splice(index, 1);
    if(index == 0) {
      this.afterFirstAdd = false;
      this.calcClick = false;
    }
  }

     calcOrcamento() {
        this.sumPrice = 0;
        for (let index = 0; index < this.Produto.length; index++) {
                  this.sumPrice += this.Produto[index].preco * this.Produto[index].quantidade
        }

        this.calcClick = true;
  }
}
