import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './registrar/registrar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MedicosRoutingModule } from './medicos-routing.module';



@NgModule({
  declarations: [
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    ReactiveFormsModule,
  ]
})
export class MedicosModule { }
