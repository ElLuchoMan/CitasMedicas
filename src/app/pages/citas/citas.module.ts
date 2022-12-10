import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgendarComponent} from "./agendar/agendar.component";
import {CitasRoutingModule} from "./citas-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AgendarComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CitasModule { }
