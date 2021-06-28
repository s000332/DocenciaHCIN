import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRegistroPage } from './list-registro.page';

const routes: Routes = [
  {
    path: '',
    component: ListRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRegistroPageRoutingModule {}
