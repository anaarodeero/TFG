export interface Piramide {
  id: Number
  nombre: String
  piramide: DistribucionCategoriaAlimento[]
}

export interface DistribucionCategoriaAlimento {
  idCategoria: Number
  nombre: String
  frecuencia: Frecuencia
  limiteInferior: Number
  limiteSuperior: Number
  desayuno: Boolean
  almuerzo: Boolean
  comida: Boolean
  merienda: Boolean
  cena: Boolean
}

export enum Frecuencia {
  SEMANAL = 'SEMANAL',
  DIARIA = 'DIARIA'
}
