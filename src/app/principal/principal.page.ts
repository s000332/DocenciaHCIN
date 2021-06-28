import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";
import { RegistroService } from "../shared/registro.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
   existe: boolean;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public registroService:RegistroService
  ) {
   }

  ngOnInit() {
    
  }
  pageRegistro(){
    this.router.navigate(['makeregistro']);   
  }
  pageIncidencia(){
    this.router.navigate(['makeincidencia']);   
  }
  pageMisRegistros(){
    this.router.navigate(['listregistro']);   
  }
  pageMisIncidencias(){
    this.router.navigate(['listincidencia']);   
  }
  mensaje(){
    window.alert('mensaje ');
  }

}
