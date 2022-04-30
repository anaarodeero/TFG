export interface Piramide {
  id: Number
  dieta: Dieta
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
  DIARIA = 'DIARIA',
  OCASIONAL = 'OCASIONAL'
}

export enum Dieta {
  REGULAR = "REGULAR",
  VEGETARIANA = "VEGETARIANA",
  VEGANA = "VEGANA"
}
