import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Paciente} from "../../../models/paciente.model";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  tiposDocumento:any= [
    {id: 'CC', nombre: 'Cédula de ciudadanía'},
    {id: 'CE', nombre: 'Cédula de extranjería'},
    {id: 'P', nombre: 'Pasaporte'},
    {id: 'PE', nombre: 'Permiso especial de permanencia'},
    {id: 'TI', nombre: 'Tarjeta de identidad'}
  ];
  constructor(private fb: FormBuilder, private router: Router) { }
  registroUsuarios: FormGroup= this.fb.group({
    nombre: [''],
    apellido: [''],
    tipoDocumento: [''],
    documento: [''],
    telefono: [''],
    celular: [''],
    fechaNacimiento: [''],
    sexo: [''],
    email: [''],

  });
  ngOnInit(): void {
  }

  registrarPaciente(){
    const paciente: Paciente ={
      nombre: this.registroUsuarios.get('nombre')?.value,
      apellido: this.registroUsuarios.get('apellido')?.value,
      tipoDocumento: this.registroUsuarios.get('tipoDocumento')?.value,
      documento: this.registroUsuarios.get('documento')?.value,
      telefono: this.registroUsuarios.get('telefono')?.value,
      celular: this.registroUsuarios.get('celular')?.value,
      fechaNacimiento: this.registroUsuarios.get('fechaNacimiento')?.value,
      sexo: this.registroUsuarios.get('sexo')?.value,
      email: this.registroUsuarios.get('email')?.value,
      estado: 'Activo',
      multa:0,
    }
    console.table(paciente);
  }
}
