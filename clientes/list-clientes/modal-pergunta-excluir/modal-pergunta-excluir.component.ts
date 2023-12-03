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


   id  = this.userService.getId();
  deleteUser() {
    this.clienteServie.deletarUsuarioById(this.id);
  }

}
