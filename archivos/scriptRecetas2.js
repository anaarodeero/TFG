db.getCollection('recetas').insert({
	"id": NumberInt(1),
	"categoria": "Arroces",
	"nombre": "Arroz seco de puerros, alubias y coliflor",
	"ingredientes": [{
			"alimento": NumberInt(1),
			"ingrediente": "180 g de arroz Senia"
		},{
			"alimento": NumberInt(554),
			"ingrediente": "540 ml de caldo de verduras + 500 ml más"
		},{
			"alimento": NumberInt(65),
			"ingrediente": "20 ml de salsa de soja"
		},{
			"alimento": NumberInt(101),
			"ingrediente": "½ coliflor"
		},{
			"alimento": NumberInt(131),
			"ingrediente": "1 puerro"
		},{
			"alimento": NumberInt(112),
			"ingrediente": "8 judías verdes"
		},{
			"alimento": NumberInt(555),
			"ingrediente": "200 g de alubia blanca cocida"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "1 tomate rallado"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "2 dientes de ajo"
		},{
			"alimento": NumberInt(550),
			"ingrediente": "1 cucharadita de pimentón"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		}],
	"dieta": "",
	"preparacion":[
		"En una paella sofreímos en aceite de oliva la coliflor troceada, las judías verdes y el puerro bien picado. Debe coger color.",
		"Hacemos un hueco e incorporamos el tomate rallado, el diente de ajo troceado y el pimentón.",
		"Sofreímos bien.",
		"Incorporamos los 540 ml de caldo que necesitaremos para cocinar el arroz. Haremos una marca en una brocheta y ponemos otros 500 ml más. Añadimos la salsa de soja y dejamos cocinar a fuego medio hasta que de nuevo el nivel de caldo llegue a la marca inicial. Sazonamos.",
		"Incorporamos el arroz y cocinamos 8 minutos a fuego fuerte, añadimos las alubias y cocinamos 7 minutos más a fuego suave."
	]
})