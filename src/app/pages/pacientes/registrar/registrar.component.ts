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
  registroUsuariosForm: FormGroup= this.fb.group({
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
      nombre: this.registroUsuariosForm.get('nombre')?.value,
      apellido: this.registroUsuariosForm.get('apellido')?.value,
      tipoDocumento: this.registroUsuariosForm.get('tipoDocumento')?.value,
      identificacion: this.registroUsuariosForm.get('documento')?.value,
      telefono: this.registroUsuariosForm.get('telefono')?.value,
      celular: this.registroUsuariosForm.get('celular')?.value,
      fechaNacimiento: this.registroUsuariosForm.get('fechaNacimiento')?.value,
      sexo: this.registroUsuariosForm.get('sexo')?.value,
      email: this.registroUsuariosForm.get('email')?.value,
      categoria:'',
      estado: 'Activo',
      multa:0,
      historiaMedica: {idHistoria: 0}
    }
    this.consultorioService.crearContratista(paciente).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/pacientes/registrar']);
        this.toastr.success('Paciente creado con éxito', '¡HECHO!');
        // this.registroUsuariosForm.reset();
      },
      (error) => {
        console.log(this.toastr.error(error.error.mensaje, '¡ERROR!'));
        this.toastr.error(error.error.mensaje, '¡ERROR!');
      }
    );
  }
}
