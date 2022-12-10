import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'home', component: HomeComponent},
  {
    path: 'pacientes', children: [
      { path: 'registrar', loadChildren: () => import('./pacientes/pacientes.module').then(m => m.PacientesModule) },
    ],
  },
  {path:'citas', children: [
  { path: 'agendar', loadChildren: () => import('./citas/citas.module').then(m => m.CitasModule) },
],
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
