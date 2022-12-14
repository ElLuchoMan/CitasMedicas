import { Eps } from "./eps.model";

export interface Sede {
    id: number;
    nombre: string;
    telefono: number;
    direccion: string;
    eps: Eps;
}