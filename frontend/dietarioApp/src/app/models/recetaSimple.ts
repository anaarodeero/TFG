import { Categoria } from "./enums"

export interface RecetaSimple {
  id: Number
  nombre: String
  alimentos: Number[]
  categorias: Categoria[]
}
