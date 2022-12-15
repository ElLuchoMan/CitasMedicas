import { Consultorio } from "./consultorio.model";
import { Sede } from "./sede.model";

export interface  Medico {
    nombre: string;
    apellido: string;
    tipoDocumento: string;
    identificacion: number;
    telefono: number;
    celular: number;
    fechaNacimiento: Date;
    especialidad: string;
    registroMedico: string;
    email: string;
    sexo: number;
    consultorio: number|null;
    sede:number;
  }
  