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
    registro: string;
    email: string;
    sexo: number;
    consultorio: string;
    sede:Sede;
  }
  