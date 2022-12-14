import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente.model';
import { Medico } from '../models/medico.model';
import { Cita } from '../models/cita.model';
import { Consultorio } from '../models/consultorio.model';
import { Especialidad } from '../models/especialidad.model';
import { Sede } from '../models/sede.model';
@Injectable({
  providedIn: 'root'
})
export class ConsultorioService {

  baseUrl = environment.urlConsultorio;
  constructor(private httpClient: HttpClient) { }

  crearPacientes(paciente: Paciente): Observable<Paciente> {
    return this.httpClient.post<Paciente>(this.baseUrl + 'pacientes/nuevo', paciente);
  }
  crearMedicos(medico: Medico): Observable<Medico> {
    return this.httpClient.post<Medico>(this.baseUrl + 'medicos/nuevo', medico);
  }
  buscarPaciente(documento: string): Observable<Paciente> {
    return this.httpClient.get<Paciente>(this.baseUrl + 'pacientes/' + documento);
  }

  crearCita(cita: Cita): Observable<Cita> {
    return this.httpClient.post<Cita>(this.baseUrl + 'citas/nuevo', cita);
  }

  buscarConsultorios(): Observable<Consultorio> {
    return this.httpClient.get<Consultorio>(this.baseUrl + 'consultorio/');
  }
  buscarEspecialidades(): Observable<Especialidad> {
    return this.httpClient.get<Especialidad>(this.baseUrl + 'especialidad/');
  }
  buscarSedes(): Observable<Sede> {
    return this.httpClient.get<Sede>(this.baseUrl + 'sede/');
  }
}
