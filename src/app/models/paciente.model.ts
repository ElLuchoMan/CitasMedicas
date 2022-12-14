import { HistoriaMedica } from "./historiamedica.model";

export interface  Paciente {
  nombre: string;
  apellido: string;
  tipoDocumento: string;
  identificacion: number;
  telefono: number;
  celular: number;
  fechaNacimiento: Date;
  sexo: string;
  email: string;
  estado: string;
  multa: number;
  categoria: string;
  historiaMedica: HistoriaMedica;
}
