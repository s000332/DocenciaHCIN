import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { EditRegistroPageRoutingModule } from './edit-registro-routing.module';
import { EditRegistroPage } from './edit-registro.page';
import { FormsModule,FormGroup,ReactiveFormsModule  } from "@angular/forms";
import { AuthGuardServiceMakeRegistroService } from '../services/auth-guard-service-make-registro.service';
import { RegistroService } from '../shared/registro.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRegistroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditRegistroPage],
  exports: [    
    FormsModule,FormGroup
  ],
  providers:  [ AuthGuardServiceMakeRegistroService,RegistroService ]
})
export class EditRegistroPageModule {}


