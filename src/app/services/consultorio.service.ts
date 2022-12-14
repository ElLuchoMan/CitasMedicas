import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente.model';
@Injectable({
  providedIn: 'root'
})
export class ConsultorioService {

  baseUrl= environment.urlConsultorio;
  constructor(private httpClient: HttpClient) { }

  crearContratista(paciente: Paciente): Observable<Paciente> {
    return this.httpClient.post<Paciente>(this.baseUrl + 'pacientes/nuevo', paciente);
  }
}
