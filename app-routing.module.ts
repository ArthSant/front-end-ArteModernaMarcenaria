import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCadastroClienteComponent } from './clientes/form-cadastro-cliente/form-cadastro-cliente.component';
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';
import { RegistrarComponent } from './fornecedores/registrar/registrar.component';
import { RegistrarPedidoComponent } from './clientes/registrar-pedido/registrar-pedido.component';
import { EmAndamentoComponent } from './pedidos/em-andamento/em-andamento.component';

const routes: Routes = [
  {path:'Cadastrar' , component:FormCadastroClienteComponent},
  {path:'Listar' , component:ListClientesComponent},
  {path:'Registrar', component:RegistrarComponent},
  {path:'novo/pedido', component:RegistrarPedidoComponent},
  {path:'Andamento', component:EmAndamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
