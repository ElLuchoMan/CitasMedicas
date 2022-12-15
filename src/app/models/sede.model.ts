import { Eps } from "./eps.model";

export interface Sede {
    idSede: number | null;
    nombre: string;
    telefono: number;
    direccion: string;
    eps: Eps;
}