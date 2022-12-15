import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medico } from 'src/app/models/medico.model';
import { ConsultorioService } from 'src/app/services/consultorio.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  tiposDocumento: any = [
    { id: 'CC', nombre: 'Cédula de ciudadanía' },
    { id: 'CE', nombre: 'Cédula de extranjería' },
    { id: 'P', nombre: 'Pasaporte' },
    { id: 'PE', nombre: 'Permiso especial de permanencia' },
    { id: 'TI', nombre: 'Tarjeta de identidad' }
  ];
  especialidades: any = [];
  sedes: any = [];
  consultorio: any = [];
  constructor(private fb: FormBuilder, private router: Router, private consultorioService: ConsultorioService, private toastr: ToastrService) { }
  registroMedicosForm: FormGroup = this.fb.group({
    nombre: [''],
    apellido: [''],
    tipoDocumento: [''],
    identificacion: [''],
    telefono: [''],
    celular: [''],
    fechaNacimiento: [''],
    especialidad: [''],
    registro: [''],
    email: [''],
    sexo: [''],
    consultorio: [''],//Traer
    sede: [''],//Traer

  });
  ngOnInit(): void {
    this.consultarConsultorio();
    this.consultarSedes();
    this.consultarEspecialidad();

  }
  consultarSedes() {
    this.consultorioService.buscarSedes().forEach(data => {
      this.sedes = data;
    })
  }

  consultarConsultorio() {
    this.consultorioService.buscarConsultorios().forEach(data => {
      this.consultorio = data;
    })
  }
  consultarEspecialidad() {
    this.consultorioService.buscarEspecialidades().forEach(data => {
      this.especialidades = data;
    })
  }

  registrarPaciente() {
    const medico: Medico = {
      nombre: this.registroMedicosForm.get('nombre')?.value,
      apellido: this.registroMedicosForm.get('apellido')?.value,
      tipoDocumento: this.registroMedicosForm.get('tipoDocumento')?.value,
      identificacion: this.registroMedicosForm.get('identificacion')?.value,
      telefono: this.registroMedicosForm.get('telefono')?.value,
      celular: this.registroMedicosForm.get('celular')?.value,
      fechaNacimiento: this.registroMedicosForm.get('fechaNacimiento')?.value,
      email: this.registroMedicosForm.get('email')?.value,
      sexo: this.registroMedicosForm.get('sexo')?.value,
      especialidad: this.registroMedicosForm.get('especialidad')?.value,
      registroMedico: this.registroMedicosForm.get('registro')?.value,
      sede: this.registroMedicosForm.get('sede')?.value,
      consultorio: null,
    }
    console.log(medico);
    this.consultorioService.crearMedicos(medico).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/medicos/registrar']);
        this.toastr.success(`Se ha registrado al medico ${medico.nombre}`, '¡HECHO!');
        // this.registroMedicosForm.reset();
      },
      (error) => {
        this.toastr.error(`No se ha podido registrar el medico ${medico.nombre}. ${error.error.mensaje}`, '¡ERROR!')
      }
    );
  }
}
