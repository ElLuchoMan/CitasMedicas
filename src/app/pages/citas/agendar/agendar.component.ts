import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConsultorioService } from 'src/app/services/consultorio.service';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.scss']
})
export class AgendarComponent implements OnInit {
  cargando = false;
  paciente:any=[];
  constructor(private fb: FormBuilder, private consultorioService: ConsultorioService, private toastr: ToastrService) { }

  buscarPacienteForm: FormGroup = this.fb.group({
    documento: ['',]
  })
  ngOnInit(): void {
  }
  buscarPaciente() {
    this.cargando=true;
      this.consultorioService.buscarPaciente(this.buscarPacienteForm.value.documento).subscribe((data) => {
        if (data != null) {
          console.log(data);
            this.paciente.push(data);
            this.cargando=false;
        }
      }, error => {
        this.toastr.error(`${error.error.mensaje}`, '¡ERROR!');
      }
      )
    }

}
