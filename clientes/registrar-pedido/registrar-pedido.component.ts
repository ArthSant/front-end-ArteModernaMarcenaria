import { ClienteServiceService } from './../../services/cliente-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViaCepService } from 'src/app/services/via-cep.service';
import {MatDialog} from '@angular/material/dialog';
import { NotFoundComponent } from './modal/not-found/not-found.component';


@Component({
  selector: 'app-registrar-pedido',
  templateUrl: './registrar-pedido.component.html',
  styleUrls: ['./registrar-pedido.component.scss']
})
export class RegistrarPedidoComponent {
  constructor(private cepService:ViaCepService, private fomrBuilder:FormBuilder,private clienteService:ClienteServiceService,public dialog:MatDialog) {}

  formulario!:FormGroup;
  afterCpfInput : boolean = false;
  ngOnInit(): void {
    this.formulario = this.fomrBuilder.group({
       nome:['',Validators.required],
       sobrenome:['',Validators.required],
       cpf:['',[Validators.required,Validators.minLength(11),Validators.maxLength(14)]],
       contato:['',Validators.required],
       email:'',
       cep:['',[Validators.required,Validators.minLength(8),Validators.maxLength(9)]],
       rua:['',Validators.required],
       numero:['',Validators.required],
       bairro:['',Validators.required],
       nomePedido:['',Validators.required],
       dataPedido:['',Validators.required],
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
      if(this.formulario.valid) {
        this.clienteService.cadastrarUsuario(this.formulario.value).subscribe((response => console.log(response)
        ));

        }

    }




    consultarCpf(event:any) : void {
      const cpf = event.target.value.replaceAll('.','').replaceAll('-','');
      if(cpf != '') {
          this.clienteService.getUsuario(cpf).subscribe(resultado => {
              console.log(resultado);
            if(resultado.idCliente != null)
              this.preencherDados(resultado);
            else
              this.dialog.open(NotFoundComponent);

            })
      }

    }


    preencherDados(dados:any) {
        if(dados != null) {
          this.formulario.get('cpf')?.setValue(dados.cpf);
          this.formulario.get('nome')?.setValue(dados.nome);
          this.formulario.get('contato')?.setValue(dados.contato);
          this.formulario.get('email')?.setValue(dados.email);
        }
    }

    step = 0;

    setStep(index: number) {
      this.step = index;
    }

    nextStep() {
      this.step++;
    }

    prevStep() {
      this.step--;
    }

}
