import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente.model';
import { Medico } from '../models/medico.model';
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
}
