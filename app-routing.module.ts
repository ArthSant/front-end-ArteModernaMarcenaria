import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCadastroClienteComponent } from './clientes/form-cadastro-cliente/form-cadastro-cliente.component';
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';

const routes: Routes = [
  {path:'Cadastrar' , component:FormCadastroClienteComponent},
  {path:'Listar' , component:ListClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
