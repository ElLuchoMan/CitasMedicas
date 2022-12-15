import { Consultorio } from "./consultorio.model";
import { Paciente } from "./paciente.model";
import { Sede } from "./sede.model";

export interface Cita {
    idCita: number | null;
    fechaCita: Date;
    horaCita: string;
    tipoCita: string;
    consultorio: number | null;
    idSede: number;
    paciente: Paciente;
    copago: number;

}