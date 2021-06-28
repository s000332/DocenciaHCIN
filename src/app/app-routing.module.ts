import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'makeregistro',
    loadChildren: () => import('./make-registro/make-registro.module').then( m => m.MakeRegistroPageModule),
    canActivate: [AuthGuardService]
  }, 
  {
    path: 'listregistro',
    loadChildren: () => import('./list-registro/list-registro.module').then( m => m.ListRegistroPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'editregistro',
    loadChildren: () => import('./edit-registro/edit-registro.module').then( m => m.EditRegistroPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'list-registro',
    loadChildren: () => import('./list-registro/list-registro.module').then( m => m.ListRegistroPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'viewregistro',
    loadChildren: () => import('./view-registro/view-registro.module').then( m => m.ViewRegistroPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'makeincidencia',
    loadChildren: () => import('./make-incidencia/make-incidencia.module').then( m => m.MakeIncidenciaPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'viewincidencia',
    loadChildren: () => import('./view-incidencia/view-incidencia.module').then( m => m.ViewIncidenciaPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'listincidencia',
    loadChildren: () => import('./list-incidencia/list-incidencia.module').then( m => m.ListIncidenciaPageModule),
    canActivate: [AuthGuardService]
  }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
