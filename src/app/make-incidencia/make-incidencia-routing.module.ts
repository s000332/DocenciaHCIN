import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeIncidenciaPage } from './make-incidencia.page';

const routes: Routes = [
  {
    path: '',
    component: MakeIncidenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeIncidenciaPageRoutingModule {}
