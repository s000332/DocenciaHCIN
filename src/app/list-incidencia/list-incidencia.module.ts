import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListIncidenciaPageRoutingModule } from './list-incidencia-routing.module';

import { ListIncidenciaPage } from './list-incidencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListIncidenciaPageRoutingModule
  ],
  declarations: [ListIncidenciaPage]
})
export class ListIncidenciaPageModule {}
