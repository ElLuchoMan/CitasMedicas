import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ConsultorioService } from 'src/app/services/consultorio.service';
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
  constructor(private fb: FormBuilder, private router: Router, private consultorioService: ConsultorioService,  private toastr: ToastrService) { }
  registroPacientesForm: FormGroup= this.fb.group({
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
      nombre: this.registroPacientesForm.get('nombre')?.value,
      apellido: this.registroPacientesForm.get('apellido')?.value,
      tipoDocumento: this.registroPacientesForm.get('tipoDocumento')?.value,
      identificacion: this.registroPacientesForm.get('documento')?.value,
      telefono: this.registroPacientesForm.get('telefono')?.value,
      celular: this.registroPacientesForm.get('celular')?.value,
      fechaNacimiento: this.registroPacientesForm.get('fechaNacimiento')?.value,
      sexo: this.registroPacientesForm.get('sexo')?.value,
      email: this.registroPacientesForm.get('email')?.value,
      categoria:'',
      estado: 'Activo',
      multa:0,
      historiaMedica: {idHistoria: 0}
    }
    this.consultorioService.crearPacientes(paciente).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/pacientes/registrar']);
        this.toastr.success(`Se ha registrado al paciente ${paciente.nombre}`, '¡HECHO!');
        // this.registroPacientesForm.reset();
      },
      (error) => {
        this.toastr.error(`No se ha podido registrar el paciente ${paciente.nombre}.  ${error.error.mensaje}`, '¡ERROR!')
      }
    );
  }
}
