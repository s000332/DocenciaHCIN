import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../shared/authentication-service";
import { RegistroService } from "../shared/registro.service";
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceMakeRegistroService {
  regService : RegistroService;
  angularFireDatabase : AngularFireDatabase;      
  routerSer: Router;
  authServiceSer: AuthenticationService;  
  
  constructor(public router: Router, 
    public authService: AuthenticationService,
    public registroService: RegistroService) {      
      this.routerSer = router;       
      this.authServiceSer = authService;
      this.regService = registroService;            
   }  


   canActivate(){   
    return this.authService.isLoggedIn; 
  }
   
  

}

