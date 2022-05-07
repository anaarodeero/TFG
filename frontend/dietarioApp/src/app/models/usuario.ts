import { Dieta } from "./enums";

export interface Usuario {
    nombre: string;
    apellidos: string
    email: string
    password: string
    alergias: string[]
    dieta: Dieta
    _id?: string
}
