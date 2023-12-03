import { Component } from '@angular/core';
import { ClienteServiceService } from '../services/cliente-service.service';
import { MatDialog } from '@angular/material/dialog';
import { NotFoundComponent } from '../clientes/registrar-pedido/modal/not-found/not-found.component';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.scss']
})
export class OrcamentoComponent {


    constructor(private clienteService:ClienteServiceService, public dialog:MatDialog) {}

    showSelect = false;

    produtos: string[] = [];

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
    console.log(this.selectedOption);

  }
  campos: string[] = [];

  // Método para adicionar um novo campo
  adicionarCampo() {
    this.produtos.push(''); // Adiciona um novo campo vazio ao array
  }

  // Método para remover um campo
  removerCampo(index: number) {
    this.produtos.splice(index, 1); // Remove o campo na posição 'index' do array
  }
}
