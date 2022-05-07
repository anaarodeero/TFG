import { CategoriaReceta, Dieta } from "./enums"

export interface Receta {
  idReceta: Number
  categoria: CategoriaReceta
  nombre: String
  ingredientes: Ingrediente[]
  dieta: Dieta
  preparacion: String[]
}

export interface Ingrediente {
  alimento: Number
  ingrediente: String
}
