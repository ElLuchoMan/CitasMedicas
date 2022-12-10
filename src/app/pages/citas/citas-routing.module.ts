import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgendarComponent} from "./agendar/agendar.component";

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: AgendarComponent },
      { path: 'agendar', component: AgendarComponent },
      { path: '**', redirectTo: 'agendar'  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
