import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CrudService } from './crud.service';
import { AuthGuardService } from './services/auth-guard.service'; 
import { AuthGuardServiceMakeRegistroService } from './services/auth-guard-service-make-registro.service';
import { ServicioService } from './shared/servicio.service'; 
import { RegistroService } from './shared/registro.service'; 
import { EstudianteService } from './shared/estudiante.service'; 
import firebase from "firebase/app";

firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule],
  providers: [AngularFirestoreModule,
              CrudService, ServicioService,RegistroService,EstudianteService,
              AuthGuardService,AuthGuardServiceMakeRegistroService,
             { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
