import { Dieta } from "./enums"
import { Receta } from "./receta"
import { RecetaSimple } from "./recetaSimple"

export interface PlanSemanal {
  id: Number
  dieta: Dieta
  planesDiarios: PlanDiario[]
}

export interface PlanDiario {
  id: Number
  desayuno: RecetaSimple[]
  almuerzo: RecetaSimple[]
  comida: Receta[]
  merienda: RecetaSimple[]
  cena: Receta[]
}
