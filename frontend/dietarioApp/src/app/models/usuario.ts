export interface Usuario {
    nombre: string;
    apellidos: string
    email: string
    password: string
    sexo: string
    altura: number
    peso: number
    fecha_nacimiento: Date
    //objetivo: string
    alergias: string[]
    dieta: string
    _id?: string
}