import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MakeRegistroPageRoutingModule } from './make-registro-routing.module';
import { MakeRegistroPage } from './make-registro.page';
import { FormsModule,FormGroup,ReactiveFormsModule  } from "@angular/forms";
import { RegistroService } from '../shared/registro.service';

@NgModule({
  imports: [
    CommonModule,   
    IonicModule,
    MakeRegistroPageRoutingModule,
    ReactiveFormsModule      
  ],
  declarations: [MakeRegistroPage ],
  exports: [    
    FormsModule,FormGroup
  ],
  providers:  [ RegistroService ]
  })
export class MakeRegistroPageModule {}
