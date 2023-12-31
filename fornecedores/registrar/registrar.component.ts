import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViaCepService } from 'src/app/services/via-cep.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent {


  constructor(private cepService:ViaCepService, private fomrBuilder:FormBuilder) {}

  formulario!:FormGroup;

  ngOnInit(): void {
    this.formulario = this.fomrBuilder.group({
       nome:['',Validators.required],
       sobrenome:['',Validators.required],

       contato:['',Validators.required],
       email:['',Validators.required,Validators.email],
       cep:['',[Validators.required,Validators.maxLength(9),Validators.minLength(8)]],
       rua:['',Validators.required],
       numero:['',Validators.required],
       bairro:['',Validators.required],
       cidade:['',Validators.required],
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
        this.formulario.get('cidade')?.setValue(dados.localidade);
      }


      onSubmit() {

      }
}
