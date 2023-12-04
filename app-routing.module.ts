import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCadastroClienteComponent } from './clientes/form-cadastro-cliente/form-cadastro-cliente.component';
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';
import { RegistrarComponent } from './fornecedores/registrar/registrar.component';
import { RegistrarPedidoComponent } from './clientes/registrar-pedido/registrar-pedido.component';
import { EmAndamentoComponent } from './pedidos/status/status.component';
import { HomeComponent } from './home/home.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { AtualizarPedidoComponent } from './atualizar-pedido/atualizar-pedido.component';

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path:'Cadastrar' , component:FormCadastroClienteComponent},
  {path:'Listar' , component:ListClientesComponent},
  {path:'Registrar', component:RegistrarComponent},
  {path:'novo/pedido', component:RegistrarPedidoComponent},
  {path:'Status', component:EmAndamentoComponent},
  {path:'Orçamento', component:OrcamentoComponent},
  {path:'Atualizar' , component:AtualizarPedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
