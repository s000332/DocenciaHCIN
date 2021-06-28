import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListRegistroPageRoutingModule } from './list-registro-routing.module';

import { ListRegistroPage } from './list-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListRegistroPageRoutingModule
  ],
  declarations: [ListRegistroPage]
})
export class ListRegistroPageModule {}
