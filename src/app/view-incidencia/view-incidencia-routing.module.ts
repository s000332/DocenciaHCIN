import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewIncidenciaPage } from './view-incidencia.page';

const routes: Routes = [
  {
    path: '',
    component: ViewIncidenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewIncidenciaPageRoutingModule {}
