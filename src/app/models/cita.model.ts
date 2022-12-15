import { Consultario } from "./consultorio.model";
import { Medico } from "./medico.model";
import { Sede } from "./sede.model";

export interface Cita {
    idCita: number;
    fechaCita: Date;
    horaCita: string;
    tipoCita: string;
    consultorio: Consultario;
    sede: Sede
    medico: Medico
    copago: number;
}