import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRegistroPage } from './edit-registro.page';

const routes: Routes = [
  {
    path: '',
    component: EditRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRegistroPageRoutingModule {}
