import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './registrar/registrar.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PacientesRoutingModule} from "./pacientes-routing.module";



@NgModule({
  declarations: [
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PacientesModule { }
