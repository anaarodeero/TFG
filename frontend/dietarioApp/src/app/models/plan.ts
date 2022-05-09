import { Dieta } from "./enums"
import { Receta } from "./receta"
import { RecetaSimple } from "./recetaSimple"

export interface PlatoPrincipal {
  plato: Receta,
  guarnicion: String
}

export interface Comida {
  primerPlato: Receta,
  platoPrincipal: PlatoPrincipal
}

export interface PlanDiario {
  id: Number
  desayuno: RecetaSimple
  almuerzo: RecetaSimple
  comida: Comida
  merienda: RecetaSimple
  cena: Receta
}

export interface PlanSemanal {
  id: Number
  dieta: Dieta
  planesDiarios: PlanDiario[]
}
