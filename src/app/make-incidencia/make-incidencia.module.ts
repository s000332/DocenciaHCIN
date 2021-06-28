import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MakeIncidenciaPageRoutingModule } from './make-incidencia-routing.module';
import { MakeIncidenciaPage } from './make-incidencia.page';
import { FormsModule,FormGroup,ReactiveFormsModule  } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,    
    IonicModule,
    MakeIncidenciaPageRoutingModule,   
    ReactiveFormsModule 
  ],
  declarations: [MakeIncidenciaPage],
  exports: [    
    FormsModule,FormGroup
  ],
  providers:  []
})
export class MakeIncidenciaPageModule {}


