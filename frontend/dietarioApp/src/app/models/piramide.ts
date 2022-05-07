import { Dieta, Frecuencia } from "./enums"

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
