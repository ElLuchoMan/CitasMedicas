import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cita } from 'src/app/models/cita.model';
import { ConsultorioService } from 'src/app/services/consultorio.service';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.scss']
})
export class AgendarComponent implements OnInit {
  cargando = false;
  paciente: any = [];
  especialidades: any = [];
  consultorio: any = [];
  sedes: any = [ ];
  constructor(private fb: FormBuilder, private consultorioService: ConsultorioService, private toastr: ToastrService) { }

  buscarPacienteForm: FormGroup = this.fb.group({
    documento: ['',],
  })

  crearCitaForm: FormGroup = this.fb.group({
    fechaCita: ['',],
    horaCita: ['',],
    tipoCita: ['',],
    consultorio: ['',],
    sede: ['',],
  });
  ngOnInit(): void {
    this.consultarSedes();
    this.consultarConsultorio();
    this.consultarEspecialidad();
  }
  consultarSedes(){
    this.consultorioService.buscarSedes().forEach(data => {
      this.sedes = data;
    })
  }
  consultarConsultorio(){
    this.consultorioService.buscarConsultorios().forEach(data => {
      this.consultorio = data;
    })
  }
  consultarEspecialidad(){
    this.consultorioService.buscarEspecialidades().forEach(data => {
      this.especialidades = data;
    })
  }
  buscarPaciente() {
    this.cargando = true;
    this.consultorioService.buscarPaciente(this.buscarPacienteForm.value.documento).subscribe((data) => {
      if (data != null) {
        this.paciente = data;
        this.cargando = false;
      }
    }, error => {
      this.toastr.error(`${error.error.mensaje}`, '¡ERROR!');
      this.cargando = false;
    }
    )
  }
  crearCita() {
    const cita: Cita = {
      idCita: 0,
      fechaCita: this.crearCitaForm.get('fechaCita')?.value,
      horaCita: this.crearCitaForm.get('horaCita')?.value,
      tipoCita: this.crearCitaForm.get('tipoCita')?.value,
      consultorio:null,
      idSede: this.crearCitaForm.get('sede')?.value,
      paciente: this.paciente,
      copago: 12500,
    }
    console.log(cita);
    this.consultorioService.crearCita(cita).subscribe((data) => {
      if (data != null) {

        this.toastr.success(`Cita creada correctamente`, '¡ÉXITO!');
      }
    },
      error => {
        this.toastr.error(`${error.error.mensaje}`, '¡ERROR!');
      });
  }
}
