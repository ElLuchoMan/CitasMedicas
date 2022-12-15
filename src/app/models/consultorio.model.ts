import { Especialidad } from "./especialidad.model";
import { Sede } from "./sede.model";

export interface Consultario {
    idConsultorio: number;
    sede: Sede
    especialidad: Especialidad
}