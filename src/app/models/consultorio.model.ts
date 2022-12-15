import { Especialidad } from "./especialidad.model";
import { Sede } from "./sede.model";

export interface Consultorio {
    idConsultorio: number |null;
    idSede: Sede | number|null;
    idEspecialidad: Especialidad | number  |null;
}