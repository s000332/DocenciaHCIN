import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../shared/authentication-service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {  

  constructor(public router: Router, public authService: AuthenticationService) { }
  canActivate() {                  
      return this.authService.isLoggedIn;     
  }  
}
