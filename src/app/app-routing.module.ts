import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'login',
    loadChildren:()=>import('./login/login.module').then((m)=>m.LoginModule)
  },
  {
    path:'landing',
    loadChildren:()=>import('./landing/landing.module').then((m)=>m.LandingModule)
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
  {
    path:'notfound',
    component:NotFoundComponent
  },
  {
    path:'',
    redirectTo:'landing',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'notfound',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
