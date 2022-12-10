import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrarComponent} from "./registrar/registrar.component";

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: RegistrarComponent },
      { path: 'registrar', component: RegistrarComponent },
      { path: '**', redirectTo: 'registrar'  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
