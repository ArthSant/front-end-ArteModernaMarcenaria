import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';
import { ViaCepService } from 'src/app/services/via-cep.service';
import { ModalCadastroSucessoComponent } from './modal-cadastro-sucesso/modal-cadastro-sucesso.component';

@Component({
  selector: 'app-form-cadastro-cliente',
  templateUrl: './form-cadastro-cliente.component.html',
  styleUrls: ['./form-cadastro-cliente.component.scss']
})
export class FormCadastroClienteComponent  implements OnInit{
  constructor(private cepService:ViaCepService, private fomrBuilder:FormBuilder, private clienteService:ClienteServiceService,private dialog:MatDialog) {}

  formulario!:FormGroup;

  ngOnInit(): void {
    this.formulario = this.fomrBuilder.group({
      cpf:['',Validators.required],
      nome:['',Validators.required],
       contato:['',Validators.required],
       email:'',
       cep:['',[Validators.required,Validators.maxLength(9),Validators.minLength(8)]],
       rua:['',Validators.required],
       numero:['',Validators.required],
       bairro:['',Validators.required],
    })
  }
    consultarCep(event:any) : void {
      const cep = event.target.value.replaceAll('-','');
      if( cep != '') {

        console.log(cep);

        this.cepService.getCep(cep).subscribe((resultado => {
            console.log(resultado);
            this.preencherEndereco(resultado);

          }));
        }
      }

      preencherEndereco(dados:any) {
        this.formulario.get('rua')?.setValue(dados.logradouro);

        this.formulario.get('bairro')?.setValue(dados.bairro);
      }


      onSubmit() {
          if(this.formulario.valid)
          this.clienteService.cadastrarCliente(this.formulario.value).subscribe(response =>{
              this.dialog.open(ModalCadastroSucessoComponent);

          })
      }


}
