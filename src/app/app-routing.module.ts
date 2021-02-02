import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { PagamentoComponent } from './views/pagamento/pagamento.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pagamento',
    component: PagamentoComponent
  },
  {
    path: 'user/create',
    component: UserCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
