import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomersComponent } from './components/customers/customers.component';

const routes: Routes = [
  { path: 'listaClientes', component: CustomersComponent},
  { path: 'detalleCliente', component: CustomerDetailComponent},
  { path: 'crearCliente', component: CustomerCreateComponent},
  { path: 'detalleCliente/:customerId', component: CustomerDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
