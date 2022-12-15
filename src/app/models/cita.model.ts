import { Consultario } from "./consultorio.model";
import { Paciente } from "./paciente.model";
import { Sede } from "./sede.model";

export interface Cita {
    idCita: number;
    fechaCita: Date;
    horaCita: string;
    tipoCita: string;
    consultorio: Consultario;
    sede: Sede
    paciente: Paciente
    copago: number;

}