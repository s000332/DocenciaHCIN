import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ViewIncidenciaPageRoutingModule } from './view-incidencia-routing.module';
import { ViewIncidenciaPage } from './view-incidencia.page';
import { FormsModule,FormGroup,ReactiveFormsModule  } from "@angular/forms";
import { IncidenciaService } from '../shared/incidencia.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewIncidenciaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ViewIncidenciaPage],
  exports: [    
    FormsModule,FormGroup
  ],
  providers:  [ IncidenciaService ]
})
export class ViewIncidenciaPageModule {}
