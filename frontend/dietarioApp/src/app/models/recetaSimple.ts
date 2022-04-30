export interface RecetaSimple {
  id: Number
  nombre: String
  alimentos: Number[]
  categorias: Categoria[]
}

export enum Categoria {
  LACTEOS = "LACTEOS",
  PESCADO = "PESCADO",
  CARNE_BLANCA = "CARNE BLANCA",
  CARNE_ROJA = "CARNE ROJA",
  HUEVO = "HUEVO",
  LEGUMBRES = "LEGUMBRES",
  FRUTOS_SECOS = "FRUTOS SECOS",
  VERDURAS = "VERDURAS",
  FRUTA = "FRUTA",
  PAN_INTEGRAL = "PAN INTEGRAL",
  ARROZ_INTEGRAL = "ARROZ INTEGRAL",
  PATATAS = "PATATAS",
  AZUCARES = "AZUCARES",
  ACEITE = "ACEITE"
}
