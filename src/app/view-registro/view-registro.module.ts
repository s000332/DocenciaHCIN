import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ViewRegistroPageRoutingModule } from './view-registro-routing.module';
import { ViewRegistroPage } from './view-registro.page';
import { FormsModule,FormGroup,ReactiveFormsModule  } from "@angular/forms";
import { RegistroService } from '../shared/registro.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewRegistroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ViewRegistroPage],
  exports: [    
    FormsModule,FormGroup
  ],
  providers:  [ RegistroService ]
})
export class ViewRegistroPageModule {}





