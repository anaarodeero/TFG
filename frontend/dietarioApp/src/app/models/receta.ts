export interface Receta {
  idReceta: Number
  categoria: Categoria
  nombre: String
  ingredientes: Ingrediente[]
  dieta: Dieta
  preparacion: String[]
}

export interface Ingrediente {
  alimento: Number
  ingrediente: String
}

// export enum Categoria {
//   ARROCES, PASTA, PESCADO, CARNE, VERDURAS
// }

// export enum Dieta {
//   REGULAR, VEGETARIANA, VEGANA
// }

export enum Categoria {
  ARROCES = "ARROCES",
  PASTA = "PASTA",
  PESCADO = "PESCADO",
  CARNE = "CARNE",
  VERDURAS = "VERDURAS"
}

export enum Dieta {
  REGULAR = "REGULAR",
  VEGETARIANA = "VEGETARIANA",
  VEGANA = "VEGANA"
}
