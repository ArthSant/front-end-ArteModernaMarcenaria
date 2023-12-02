import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormCadastroClienteComponent } from './clientes/form-cadastro-cliente/form-cadastro-cliente.component';


import {MatToolbarModule} from '@angular/material/toolbar';


import {MatSidenavModule} from '@angular/material/sidenav';

import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule, MatTreeNestedDataSource} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';

import {PageEvent, MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import {JsonPipe} from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrarComponent } from './fornecedores/registrar/registrar.component';
import { ListaComponent } from './fornecedores/lista/lista.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { RegistrarPedidoComponent } from './clientes/registrar-pedido/registrar-pedido.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { EmAndamentoComponent } from './pedidos/em-andamento/em-andamento.component';





@NgModule({
  declarations: [
    AppComponent,
    FormCadastroClienteComponent,
    ListClientesComponent,
    RegistrarComponent,
    ListaComponent,
    RegistrarPedidoComponent,
    EmAndamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTreeModule,
    JsonPipe,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
