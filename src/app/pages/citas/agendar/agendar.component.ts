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
  especialidades: any = [
    { id: 'Cardiología', nombre: 'Cardiología' },
    { id: 'Pediatría', nombre: 'Pediatría' },
    { id: 'Fisioterapia', nombre: 'Fisioterapia' },
    { id: 'Nutrición', nombre: 'Nutrición' },
    { id: 'Odontología', nombre: 'Odontología' }
  ];
  consultorio: any = [
    { id: '1', nombre: '1' },
    { id: '2', nombre: '2' },
    { id: '3', nombre: '3' },
    { id: '4', nombre: '4' },
    { id: '5', nombre: '5' },
  ]
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
  }
  buscarPaciente() {
    this.cargando = true;
    this.consultorioService.buscarPaciente(this.buscarPacienteForm.value.documento).subscribe((data) => {
      if (data != null) {
        this.paciente = data;
        console.log(this.paciente);
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
      consultorio: this.crearCitaForm.get('consultorio')?.value,
      sede: this.crearCitaForm.get('sede')?.value,
      paciente: this.paciente.idPaciente,
      copago: 12500,
    }
    console.log(cita);
    // this.consultorioService.crearCita(cita).subscribe((data) => {
    //   if (data != null) {

    //     this.toastr.success(`Cita creada correctamente`, '¡ÉXITO!');
    //   }
    // },
    //   error => {
    //     this.toastr.error(`${error.error.mensaje}`, '¡ERROR!');
    //   });
  }
}
