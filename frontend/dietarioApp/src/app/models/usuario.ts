export interface Usuario {
    nombre: string;
    apellidos: string
    email: string
    password: string
    alergias: string[]
    dieta: Dieta
    _id?: string
}

export enum Dieta {
  REGULAR = "REGULAR",
  VEGETARIANA = "VEGETARIANA",
  VEGANA = "VEGANA"
}
