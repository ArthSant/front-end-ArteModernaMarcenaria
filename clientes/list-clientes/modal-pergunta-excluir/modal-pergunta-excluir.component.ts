import { Component } from '@angular/core';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-modal-pergunta-excluir',
  templateUrl: './modal-pergunta-excluir.component.html',
  styleUrls: ['./modal-pergunta-excluir.component.scss']
})
export class ModalPerguntaExcluirComponent {


  constructor(private userService:UserServiceService,private clienteServie:ClienteServiceService) {}


   cpf  = this.userService.getCpf();
  deleteUser() {
    this.clienteServie.deletarUsuarioByCPF(this.cpf).subscribe(response => {
      console.log(response);

    });
  }

}
