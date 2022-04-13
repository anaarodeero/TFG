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

enum Categoria {
  ARROCES, PASTA, PESCADO, CARNE, VERDURAS
}

enum Dieta {
  REGULAR, VEGETARIANA, VEGANA
}
