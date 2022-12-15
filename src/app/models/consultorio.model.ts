import { Especialidad } from "./especialidad.model";
import { Sede } from "./sede.model";

export interface Consultorio {
    idConsultorio: number |null;
    sede: Sede
    especialidad: Especialidad
}