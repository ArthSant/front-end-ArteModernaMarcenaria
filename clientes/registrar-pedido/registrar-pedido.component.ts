import { ClienteServiceService } from './../../services/cliente-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViaCepService } from 'src/app/services/via-cep.service';

@Component({
  selector: 'app-registrar-pedido',
  templateUrl: './registrar-pedido.component.html',
  styleUrls: ['./registrar-pedido.component.scss']
})
export class RegistrarPedidoComponent {
  constructor(private cepService:ViaCepService, private fomrBuilder:FormBuilder,private clienteService:ClienteServiceService) {}

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
       orcamento:''
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

        else {
          alert('Preencha o formulário corretamente');
        }
    }




    consultarCpf(event:any) : void {
      const cpf = event.target.value.replaceAll('.','').replaceAll('-','');
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
