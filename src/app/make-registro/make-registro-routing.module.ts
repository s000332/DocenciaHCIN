import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeRegistroPage } from './make-registro.page';

const routes: Routes = [
  {
    path: '',
    component: MakeRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeRegistroPageRoutingModule {}
