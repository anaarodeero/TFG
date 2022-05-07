db.getCollection('recetas').insert({
	"idReceta": NumberInt(1),
	"categoria": "ARROZ INTEGRAL",
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
	"dieta": "VEGANA",
	"preparacion":[
		"En una paella sofreímos en aceite de oliva la coliflor troceada, las judías verdes y el puerro bien picado. Debe coger color.",
		"Hacemos un hueco e incorporamos el tomate rallado, el diente de ajo troceado y el pimentón.",
		"Sofreímos bien.",
		"Incorporamos los 540 ml de caldo que necesitaremos para cocinar el arroz. Haremos una marca en una brocheta y ponemos otros 500 ml más. Añadimos la salsa de soja y dejamos cocinar a fuego medio hasta que de nuevo el nivel de caldo llegue a la marca inicial. Sazonamos.",
		"Incorporamos el arroz y cocinamos 8 minutos a fuego fuerte, añadimos las alubias y cocinamos 7 minutos más a fuego suave."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(2),
	"categoria": "ARROZ INTEGRAL",
	"nombre": "Arroz caldoso de matanza",
	"ingredientes": [{
			"alimento": NumberInt(1),
			"ingrediente": "180 g de arroz bomba"
		},{
			"alimento": NumberInt(557),
			"ingrediente": "900 ml de caldo de carne"
		},{
			"alimento": NumberInt(397),
			"ingrediente": "100 g de costilla troceada"
		},{
			"alimento": NumberInt(558),
			"ingrediente": "50 g de panceta troceada"
		},{
			"alimento": NumberInt(488),
			"ingrediente": "50 g de chorizo"
		},{
			"alimento": NumberInt(490),
			"ingrediente": "50 g de morcilla"
		},{
			"alimento": NumberInt(559),
			"ingrediente": "100 g de secreto"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "1 tomate rallado"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "2 dientes de ajo"
		},{
			"alimento": NumberInt(550),
			"ingrediente": "2 cucharaditas de pimentón"
		},{
			"alimento": NumberInt(551),
			"ingrediente": "4 hebras de azafrán"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"En una olla doramos poco a poco la panceta, el secreto y la costilla troceada, Sazonamos bien.",
		"Incorporamos el tomate, el ajo picado, el pimentón, el azafrán y hacemos un sofrito.",
		"Añadimos el arroz y nacaramos bien.",
		"Cubrimos con el caldo y comenzamos a cocinar. Cuando llevemos 12 minutos, introducimos el chorizo y la morcilla troceados y cocinamos 5 minutos más."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(3),
	"categoria": "ARROZ INTEGRAL",
	"nombre": "Arroz a la cubana",
	"ingredientes": [{
			"alimento": NumberInt(246),
			"ingrediente": "4 huevos"
		},{
			"alimento": NumberInt(1),
			"ingrediente": "350 g de arroz largo"
		},{
			"alimento": NumberInt(560),
			"ingrediente": "500 ml de caldo de pollo"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "500 g de tomate triturado"
		},{
			"alimento": NumberInt(561),
			"ingrediente": "4 plátanos verdes"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolla"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "4 dientes de ajo"
		},{
			"alimento": NumberInt(548),
			"ingrediente": "1 hoja de laurel"
		},{
			"alimento": NumberInt(562),
			"ingrediente": "1 cucharadita de comino"
		},{
			"alimento": NumberInt(563),
			"ingrediente": "1 bouquet garni"
		},{
			"alimento": NumberInt(20),
			"ingrediente": "100 g de harina"
		},{
			"alimento": NumberInt(257),
			"ingrediente": "1 cucharadita de azúcar"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta negra"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"En un recipiente que sea apto para horno sofreímos un diente de ajo, cuando esté dorado incorporamos la cebolla picada en brunoise. Cuando ésta esté rehogada añadimos el bouquet garni.",
		"Añadimos una parte de arroz por dos de caldo y lo metemos al horno a 180º 12 minutos.",
		"En otra sartén doramos 2 dientes de ajo enteros y cuando lo esté añadimos laurel y tomate triturado.",
		"Tapamos y dejamos cocer 15 minutos a fuego medio.",
		"Rectificamos de sal, azúcar y comino.",
		"Por otro lado, freímos el plátano cortado a la mitad longitudinalmente enharinado y reservamos.",
		"Freímos un huevo en aceite muy aliente y servimos."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(4),
	"categoria": "ARROZ INTEGRAL",
	"nombre": "Curry de langostinos con pastel de arroz",
	"ingredientes": [{
			"alimento": NumberInt(564),
			"ingrediente": "1 taza de arroz basmati (300 g)"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "4 dientes de ajo"
		},{
			"alimento": NumberInt(565),
			"ingrediente": "1 chile rojo fresco"
		},{
			"alimento": NumberInt(566),
			"ingrediente": "1 trozo de jengibre de 4 cm"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 manojo de cebolletas"
		},{
			"alimento": NumberInt(170),
			"ingrediente": "2 cdas. de chutney de mango"
		},{
			"alimento": NumberInt(332),
			"ingrediente": "320 g de langostinos crudos y pelados"
		},{
			"alimento": NumberInt(245),
			"ingrediente": "150 g de yogur natural"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Poner 1 taza de arroz y 2 tazas de agua hirviendo (596 ml) en una cazuela antiadherente mediana con una pizca de sal marina. Dejar que borbotee 10 minutos y luego cocinar a fuego suave 5 minutos. Pasado este tiempo, podrá convertirse en un pastel de arroz.",
		"Mientras tanto, pelar el ajo y cortarlo en rodajas finas junto con el chile. Pelar el jengibre y cortarlo en tiras finas. Limpiar las cebolletas y cortarlas en trozos de 2 cm.",
		"Poner todo a fuego fuerte en una sartén grande antiadherente con 1 cucharada de aceite de oliva y saltear 3 minutos; luego, agregar el chutney de mango.",
		"Con cuidado, verter la mitad de la mezcla en una batidora y volver a colocar la sartén en el fuego para saltear los langostinos. Agregar ½ taza de agua (150 ml) a la batidora, triturar hasta conseguir una mezcla homogénea y verter en la sartén de los langostinos.",
		"Dejar que la salsa hierva y se espese un poco durante 3 minutos. Luego, fuera del fuego, añadir el yogur sin apenas mezclarlo.",
		"Servir el curry sobre el pastel de arroz."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(5),
	"categoria": "ARROZ INTEGRAL",
	"nombre": "Risotto con ajetes y albahaca en burrata",
	"ingredientes": [{
			"alimento": NumberInt(1),
			"ingrediente": "300 g de arroz arborio"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolleta"
		},{
			"alimento": NumberInt(567),
			"ingrediente": "100 g de ajetes"
		},{
			"alimento": NumberInt(230),
			"ingrediente": "30 g de mantequilla"
		},{
			"alimento": NumberInt(543),
			"ingrediente": "70 ml de vino blanco"
		},{
			"alimento": NumberInt(560),
			"ingrediente": "650 ml de caldo de pollo"
		},{
			"alimento": NumberInt(568),
			"ingrediente": "80 g de parmesano rallado"
		},{
			"alimento": NumberInt(569),
			"ingrediente": "4 burratas"
		},{
			"alimento": NumberInt(570),
			"ingrediente": "4 ramas de albahaca fresca"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"En una olla doramos la cebolla picada en aceite de oliva. Incorporamos los ajetes troceados y cocinamos a fuego medio hasta que todo coja color.",
		"Incorporamos el arroz, nacaramos y mojamos con el vino. Removemos hasta que evapore por completo y sazonamos.",
		"Vamos incorporando el caldo caliente poco a poco hasta cocinar el arroz, que estará hecho en aproximadamente 17 minutos.",
		"Añadimos la mantequilla y el parmesano, mezclamos bien y si es necesario rectificamos de sal.",
		"Retiramos del fuego.",
		"Picamos la albahaca.",
		"Partimos las burratas en un plato hondo, hacemos que pierdan parte de su relleno y rellenamos con el risotto. Decoramos con la albahaca picada."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(6),
	"categoria": "ARROZ INTEGRAL",
	"nombre": "Arroz de espárragos y panceta ibérica con salsa de yema",
	"ingredientes": [{
			"alimento": NumberInt(1),
			"ingrediente": "360 g de arroz bomba"
		},{
			"alimento": NumberInt(554),
			"ingrediente": "1 ½ l de caldo de verduras"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "2 ajos"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "1 tomate"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolleta"
		},{
			"alimento": NumberInt(550),
			"ingrediente": "1 cucharadita de pimentón"
		},{
			"alimento": NumberInt(551),
			"ingrediente": "4 hebras de azafrán"
		},{
			"alimento": NumberInt(108),
			"ingrediente": "1 manojo de espárragos verdes"
		},{
			"alimento": NumberInt(558),
			"ingrediente": "200 g de panceta ibérica curada"
		},{
			"alimento": NumberInt(248),
			"ingrediente": "4 yemas de huevo"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		}],
	"dieta": "VEGETARIANA",
	"preparacion":[
		"Comenzamos calentando una paellera y poniendo dos cucharadas de aceite de oliva virgen extra por cada comensal.",
		"Cortamos finamente los ajos y la cebolleta y los añadimos. Doramos ligeramente y hacemos lo mismo con el tomate y el pimentón hasta que evapore toda su agua. A continuación, añadimos unas hebras de azafrán y lo tostamos un poquito.",
		"Cortamos los espárragos en cuatro partes y los añadimos reservando la parte de las yemas para más tarde.",
		"Incorporamos el arroz y lo nacaramos hasta que esté bien impregnado del sofrito. Poco a poco incorporamos el caldo de verduras caliente. Podemos hacer el caldo casero utilizando las verduras que más nos gusten, así el arroz quedará más bueno. Si el caldo lleva sal, no será necesario incorporárselo al arroz.",
		"Cocinamos sin mover unos 17 minutos. El caldo debe evaporare por completo, por lo que subiremos el fuego si vemos que el arroz se está terminando de cocinar y aún queda líquido. A mirad de cocción añadiremos las yemas de los espárragos que habíamos reservado. Mientras, en un bol al baño María montamos las yemas de huevo hasta que se conviertan en una crema. Salpimentamos y metemos en un biberón, manga pastelera o cornete de papel.",
		"Colocamos la panceta ibérica en lonchas encima del arroz aún caliente para que se termine de cocinar. Ponemos unos puntos de la crema de yema y listo para servir."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(7),
	"categoria": "ARROZ INTEGRAL",
	"nombre": "Ensalada de arroz prohibido con aguacate y mango",
	"ingredientes": [{
			"alimento": NumberInt(1),
			"ingrediente": "150 g arroz prohibido"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "8 cebolletas chinas"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolla morada"
		},{
			"alimento": NumberInt(171),
			"ingrediente": "1 manzana"
		},{
			"alimento": NumberInt(571),
			"ingrediente": "1 aguacate"
		},{
			"alimento": NumberInt(170),
			"ingrediente": "1 mango"
		},{
			"alimento": NumberInt(572),
			"ingrediente": "5 cucharadas de chutney de mango y manzana"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(573),
			"ingrediente": "2 cucharadas de pasta de sésamo"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta negra"
		},{
			"alimento": NumberInt(574),
			"ingrediente": "Hierbabuena"
		},{
			"alimento": NumberInt(575),
			"ingrediente": "Cilantro"
		},{
			"alimento": NumberInt(576),
			"ingrediente": "Menta"
		},{
			"alimento": NumberInt(577),
			"ingrediente": "1 lima"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		}],
	"dieta": "VEGANA",
	"preparacion":[
		"Para esta receta utilizaremos arroz prohibido y será necesario lavarlo un par de veces con agua abundante. Después de esto, lo ponemos a cocer durante 35 minutos.",
		"Mientras tanto aprovechamos para cortar todos los ingredientes de la receta. Cortamos el aguacate en brunoise y añadimos unas gotas de limón para que no se oxide mientras preparamos el resto.",
		"Cortamos el mango en pequeños cuadrados y la cebolla morada. Reservamos.",
		"A continuación, preparamos el aliño mezclando el zumo de una lima, el aceite de oliva, la pimienta negra, una cucharada de pasta de sésamo y el chutney de mango y manzana. Añadimos las hierbas cortadas, salamos y reservamos.",
		"Cuando el arroz esté cocido lo colamos, secamos y mezclamos en un bol junto con los ingredientes que habíamos cortado y el aliño. Mezclamos bien y servimos en cuencos.",
		"Terminamos decorando con las cebolletas chinas, pequeños gajos de manzana y flores comestibles."
		]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(8),
	"categoria": "ARROZ INTEGRAL",
	"nombre": "Risotto de langostinos con curry y leche de coco",
	"ingredientes": [{
			"alimento": NumberInt(1),
			"ingrediente": "200 g de arroz arborio"
		},{
			"alimento": NumberInt(91),
			"ingrediente": "1/2 cebolleta"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "1 diente de ajo"
		},{
			"alimento": NumberInt(543),
			"ingrediente": "1 chorro de vino blanco"
		},{
			"alimento": NumberInt(578),
			"ingrediente": "800 ml de caldo de marisco"
		},{
			"alimento": NumberInt(579),
			"ingrediente": "Curry en polvo"
		},{
			"alimento": NumberInt(210),
			"ingrediente": "60 g de leche de coco"
		},{
			"alimento": NumberInt(332),
			"ingrediente": "200 g de langostinos pelados"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva Virgen extra"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Picamos la cebolleta y el ajo.",
		"Las pochamos en una sartén con un poco de aceite de oliva virgen extra. Incorporamos el arroz y nacaramos. Vertemos el vino blanco, cuando se evapore introducimos la sal y el curry.",
		"Vamos incorporando poco a poco el caldo de marisco caliente. Removemos bien y continuamos incorporando caldo hasta que al arroz le falten 4 o 5 minutos.",
		"Introducimos los langostinos y cocinamos 3 minutos. Añadimos la leche de coco, cocinamos un par de minutos y rectificamos de sal si fuera necesario.",
		"Emplatamos poniendo los langostinos arriba."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(9),
	"categoria": "ARROZ INTEGRAL",
	"nombre": "Arroz salteado con espinacas",
	"ingredientes": [{
			"alimento": NumberInt(1),
			"ingrediente": "1 vasito arroz blanco"
		},{
			"alimento": NumberInt(580),
			"ingrediente": "150 g de carne picada de cerdo"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "1 tomate"
		},{
			"alimento": NumberInt(110),
			"ingrediente": "100 g de espinacas"
		},{
			"alimento": NumberInt(581),
			"ingrediente": "1 pan árabe"
		},{
			"alimento": NumberInt(246),
			"ingrediente": "1 huevo"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolla"
		},{
			"alimento": NumberInt(562),
			"ingrediente": "Comino"
		},{
			"alimento": NumberInt(582),
			"ingrediente": "Canela"
		},{
			"alimento": NumberInt(127),
			"ingrediente": "Perejil"
		},{
			"alimento": NumberInt(576),
			"ingrediente": "Menta"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"En una sartén con aceite pochamos la cebolla en dados.",
		"Añadimos la carne picada, dejamos que se dore, y a continuación introducimos el tomate en dados.",
		"Sazonamos con el zumo de limón y las especias y las hierbas picadas.",
		"Añadimos las espinacas y el arroz.",
		"Salteamos y servimos con un huevo poché y el pan árabe."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(10),
	"categoria": "ARROZ INTEGRAL",
	"nombre": "Arroz con frijoles y cebolla morada",
	"ingredientes": [{
			"alimento": NumberInt(1),
			"ingrediente": "1 vasito de arroz"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolla morada"
		},{
			"alimento": NumberInt(583),
			"ingrediente": "1 bote de frijoles"
		},{
			"alimento": NumberInt(558),
			"ingrediente": "3 lonchas de panceta fresca"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "Ajo"
		},{
			"alimento": NumberInt(562),
			"ingrediente": "Comino"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(575),
			"ingrediente": "Ramita de cilantro"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Sofreímos el ajo. Reservamos. Sofreímos la cebolla y reservamos. Pasamos la panceta por la sartén también, en tiritas. Reservamos.",
		"Abrimos el vasito de arroz y añadimos ambas cosas a la sartén. Volvemos a añadir la cebolla y el ajo. Escurrimos los frijoles y los añadimos también. Echamos comino en polvo y servimos con cilantro.",
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(11),
	"categoria": "ARROZ INTEGRAL",
	"nombre": "Risotto de peras y queso gorgonzola",
	"ingredientes": [{
			"alimento": NumberInt(185),
			"ingrediente": "1 pera"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolla"
		},{
			"alimento": NumberInt(1),
			"ingrediente": "240 g de arroz arborio"
		},{
			"alimento": NumberInt(260),
			"ingrediente": "1,5 l de caldo"
		},{
			"alimento": NumberInt(236),
			"ingrediente": "80 g de queso gorgonzola"
		},{
			"alimento": NumberInt(230),
			"ingrediente": "70 g de mantequilla"
		},{
			"alimento": NumberInt(127),
			"ingrediente": "1 manojo de perejil"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "1 diente de ajo"
		},{
			"alimento": NumberInt(216),
			"ingrediente": "20 g de piñones"
		},{
			"alimento": NumberInt(568),
			"ingrediente": "20 g de queso parmesano"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		}],
	"dieta": "VEGETARIANA",
	"preparacion":[
		"Eduardo Ruano propone esta receta al cocinero Sergio Fernández desde Zaragoza.",
		"Picamos una cebolla y la incorporamos a una cazuela con aceite para que se dore. Añadimos el arroz y sofreímos.",
		"Vamos añadiendo el caldo poco a poco, y a medida que se vaya consumiendo añadimos más.",
		"Pelamos la pera, la troceamos y la rehogamos en una sartén hasta que se caramelice.",
		"Elaboramos una mantequilla verde triturando el perejil, un diente de ajo y mantequilla.",
		"Cuando el arroz esté casi en su punto le incorporamos la pera, los piñones y mantecamos con el queso gorgonzola y la mantequilla verde. Mezclamos los ingredientes.",
		"Elaboramos una teja de queso parmesano en una sartén.",
		"Servimos el risotto y decoramos con la teja de queso."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(12),
	"categoria": "ARROZ INTEGRAL",
	"nombre": "Arroz con verduras y pollo",
	"ingredientes": [{
			"alimento": NumberInt(525),
			"ingrediente": "4 muslos de pollo"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta blanca"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 Cebolla"
		},{
			"alimento": NumberInt(129),
			"ingrediente": "1 Pimiento rojo"
		},{
			"alimento": NumberInt(546),
			"ingrediente": "1 Pimiento verde"
		},{
			"alimento": NumberInt(147),
			"ingrediente": "1 Zanahoria"
		},{
			"alimento": NumberInt(131),
			"ingrediente": "1 Puerro"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "2 dientes de ajo"
		},{
			"alimento": NumberInt(543),
			"ingrediente": "1 vaso de vino blanco"
		},{
			"alimento": NumberInt(129),
			"ingrediente": "Pulpa de pimiento choricero"
		},{
			"alimento": NumberInt(1),
			"ingrediente": "350 g de arroz"
		},{
			"alimento": NumberInt(554),
			"ingrediente": "1 l de caldo de verduras"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Lo primero que tenemos que hacer es salpimentar 4 muslos de pollo.",
		"Seguidamente, ponemos una cazuela al fuego con 3 cucharadas de aceite de oliva virgen extra. Cuando esté el aceite caliente doramos los muslos de pollo y reservamos.",
		"Picamos en trozos medianos una cebolla, un pimiento rojo y otro verde, una zanahoria, un puerro y dos dientes de ajo.",
		"En el mismo aceite del pollo vamos a rehogar las verduras. Primero la cebolla, luego la zanahoria, el ajo y el puerro, y por último añadimos los pimientos.",
		"Cuando todas las verduras estén bien pochadas volvemos a echar los muslos de pollo.",
		"Añadimos un vaso de vino blanco y dejamos que se evapore el alcohol.",
		"Incorporamos la pulpa de un pimiento choricero.",
		"A continuación echamos 350 g de arroz y vertemos un litro de caldo de verduras. Dejamos cocer a fuego medio durante unos 20 minutos para que se quede caldoso.",
		"Retiramos del fuego y servimos en caliente."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(13),
	"categoria": "ARROZ INTEGRAL",
	"nombre": "Arroz con pato",
	"ingredientes": [{
			"alimento": NumberInt(517),
			"ingrediente": "½ Pato fresco"
		},{
			"alimento": NumberInt(271),
			"ingrediente": "1 taza de aceite de oliva"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "2 dientes de ajo"
		},{
			"alimento": NumberInt(51),
			"ingrediente": "100 g de guisantes"
		},{
			"alimento": NumberInt(575),
			"ingrediente": "1 manojo de cilantro fresco"
		},{
			"alimento": NumberInt(584),
			"ingrediente": "1 botellín de cerveza negra"
		},{
			"alimento": NumberInt(84),
			"ingrediente": "½ taza de calabaza picada"
		},{
			"alimento": NumberInt(84),
			"ingrediente": "½ taza de calabaza rallada"
		},{
			"alimento": NumberInt(574),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta"
		},{
			"alimento": NumberInt(1),
			"ingrediente": "½ kg de arroz"
		},{
			"alimento": NumberInt(129),
			"ingrediente": "1 Pimiento rojo"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "½ Cebolla morada"
		},{
			"alimento": NumberInt(577),
			"ingrediente": "1 Lima en zumo"
		},{
			"alimento": NumberInt(575),
			"ingrediente": "Hojas de cilantro fresco"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Lo primero que tenemos que hacer es cortar en cuartos medio pato. En una sartén echamos una taza de aceite de oliva. Mientras se calienta, salpimentamos al gusto el pato.",
		"Cuando el aceite esté bien caliente doramos las porciones de pato por todos sus lados. Una vez las tengamos listas, las reservamos en una bandeja.",
		"Vertemos el aceite que hemos utilizado para dorar el pato en una olla y lo calentamos a fuego medio. Pelamos y cortamos en láminas finas dos dientes de ajo. Cuando esté el aceite caliente, doramos el ajo. A continuación, agregamos 100 g de guisantes.",
		"Licuamos un manojo de cilantro fresco y un botellín de cerveza negra. Seguidamente incorporamos esta mezcla a la olla.",
		"Echamos en la olla media taza de calabaza picada y media taza de calabaza rallada.",
		"Agregamos dos tazas de agua y sazonamos con sal y pimienta al gusto.",
		"Pasados unos minutos agregamos el pato a la olla y lo terminamos de cocer. Cuando esté listo, lo retiramos. Debe quedar tierno.",
		"Seguidamente vertemos medio kilo de arroz. Bajamos el fuego y cocemos durante unos 20 minutos o hasta que el arroz esté en su punto. Si es necesario agregamos un poco más de agua.",
		"Mientras tanto, lavamos y cortamos en tiras finas un pimiento rojo. Reservamos.",
		"Cuando el arroz esté en su punto, volvemos a colocar la carne de pato y el pimiento rojo en tiras que hemos reservado. Apagamos el fuego, tapamos la olla y dejamos reposar durante unos minutos.",
		"A continuación vamos a preparar una salsa con cebolla. Para ello, pelamos y picamos en juliana una cebolla morada y la lavamos con agua bien fría.",
		"Escurrimos bien y la colocamos en un cuenco. Añadimos el zumo de una lima, sal al gusto y hojas de cilantro fresco picadas.",
		"Para finalizar, servimos el arroz con pato acompañado con la salsa de cebolla y lima."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(14),
	"categoria": "ARROZ INTEGRAL",
	"nombre": "Risotto de zanahorias, miel y queso roquefort",
	"ingredientes": [{
			"alimento": NumberInt(174),
			"ingrediente": "2 Zanahorias"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolla"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "1 diente de ajo"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(1),
			"ingrediente": "160 g de arroz arborio"
		},{
			"alimento": NumberInt(585),
			"ingrediente": "1 cucharadita de cúrcuma"
		},{
			"alimento": NumberInt(270),
			"ingrediente": "1 cucharada de miel"
		},{
			"alimento": NumberInt(543),
			"ingrediente": "20 ml de vino blanco"
		},{
			"alimento": NumberInt(554),
			"ingrediente": "500 ml de caldo de verduras"
		},{
			"alimento": NumberInt(574),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta"
		},{
			"alimento": NumberInt(241),
			"ingrediente": "80 g de queso roquefort"
		},{
			"alimento": NumberInt(75),
			"ingrediente": "1 rama de apio"
		},{
			"alimento": NumberInt(230),
			"ingrediente": "60 g de mantequilla"
		}],
	"dieta": "VEGETARIANA",
	"preparacion":[
		"Lo primero que tenemos que hacer es cortar en lavar y cortar en brunoise dos zanahorias, una cebolla pelada y un diente de ajo pelado.",
		"Calentamos una cacerola o una sartén con un chorrito de aceite de oliva y doramos la zanahoria, la cebolla y el ajo.",
		"A continuación agregamos 160 g de arroz arborio y calentamos bien. Después añadimos una cucharadita de cúrcuma y una cucharada de miel. Desglasamos con 20 ml de vino blanco.",
		"Cuando el alcohol se haya evaporado, agregamos 500 ml de caldo de verduras claro y salpimentamos. Es importante no agregar todo el caldo de una sola vez, sino poco a poco durante la cocción.",
		"Cocinamos a fuego medio – bajo durante unos 17 minutos removiendo constantemente y añadiendo caldo según se vaya absorbiendo.",
		"Mientras se cuece el arroz, cortamos en brunoise una rama de apio y 80 g de queso roquefort en cubos.",
		"Cuando haya pasado el tiempo de cocción del arroz, agregamos 60 g de mantequilla y movemos bien para que se funda y se integre.",
		"Para finalizar, servimos el risotto en un plato y sobre él añadimos el apio y el queso roquefort."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(15),
	"categoria": "ARROZ INTEGRAL",
	"nombre": "Arroz basmati al limón (Lemon basmati)",
	"ingredientes": [{
			"alimento": NumberInt(585),
			"ingrediente": "0,5 g cúrcuma"
		},{
			"alimento": NumberInt(564),
			"ingrediente": "100 g arroz basmati"
		},{
			"alimento": NumberInt(586),
			"ingrediente": "0,3 g cardamomo verde"
		},{
			"alimento": NumberInt(586),
			"ingrediente": "0,5 g cardamomo negro"
		},{
			"alimento": NumberInt(587),
			"ingrediente": "0,2 g macis / mace"
		},{
			"alimento": NumberInt(582),
			"ingrediente": "0,5 g canela"
		},{
			"alimento": NumberInt(552),
			"ingrediente": "0,2 g clavos"
		},{
			"alimento": NumberInt(548),
			"ingrediente": "0,2 g laurel"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "10 g aceite de oliva virgen"
		},{
			"alimento": NumberInt(166),
			"ingrediente": "10 g zumo de limón"
		},{
			"alimento": NumberInt(166),
			"ingrediente": "10 g limón cortado"
		},{
			"alimento": NumberInt(117),
			"ingrediente": "10 g semilla de mostaza"
		}],
	"dieta": "VEGANA",
	"preparacion":[
		"En primer lugar, dejamos el arroz en remojo en un bol con agua fría durante 2 horas.",
		"Transcurrido ese tiempo, lavamos el arroz pasándolo por agua y ponemos una olla al fuego con agua fría.",
		"Cuando el agua haya cogido una temperatura de unos 90-95ºC, añadimos el arroz y cocinamos durante unos 7 minutos aproximadamente.",
		"Una vez el arroz esté listo, lo recuperamos de la olla y escurrimos el agua de la cocción con ayuda de un colador para pasta. Reservamos.",
		"Por otra parte, ponemos una sartén al fuego con el zumo de limón y la semilla de mostaza. Añadimos cardamomo verde, cardamomo negro, macis, canela salvaje, clavos, laurel y sal. Dejamos que el zumo de limón reduzca e incorporamos el arroz.",
		"Salteamos el arroz durante unos minutos, lo recuperamos de la sartén y emplatamos decorando con unas rodajas de limón cortado.",
		"Servimos."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(16),
	"categoria": "CARNE ROJA",
	"nombre": "Perdices con manzana",
	"ingredientes": [{
			"alimento": NumberInt(521),
			"ingrediente": "4 perdices"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolla"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "2 dientes de ajo"
		},{
			"alimento": NumberInt(129),
			"ingrediente": "1 pimiento rojo"
		},{
			"alimento": NumberInt(147),
			"ingrediente": "1 zanahoria"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "2 tomates"
		},{
			"alimento": NumberInt(118),
			"ingrediente": "1 nabo"
		},{
			"alimento": NumberInt(588),
			"ingrediente": "50 g de sobrasada"
		},{
			"alimento": NumberInt(418),
			"ingrediente": "50 g de tocino"
		},{
			"alimento": NumberInt(549),
			"ingrediente": "3 ramas de tomillo"
		},{
			"alimento": NumberInt(589),
			"ingrediente": "200 ml de vino tinto"
		},{
			"alimento": NumberInt(521),
			"ingrediente": "1,5 l de caldo de perdiz"
		},{
			"alimento": NumberInt(171),
			"ingrediente": "500 g de manzanas"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Separamos las patas de las pechugas y reservamos. Pelamos y cortamos las manzanas reservando las pieles y los corazones.",
		"Colocamos una olla al fuego y añadimos aceite de oliva. Comenzamos a dorar la cebolla en juliana, el tocino y la sobrasada.",
		"Cuando la sobrasada comience a sacar toda su grasa añadimos el pimiento rojo picado, la zanahoria picada, el ajo picado y el nabo en trozos. Salamos, rehogamos un minuto más y añadimos las pieles de las manzanas y sus corazones.",
		"Desglasamos con el vino y esperamos a que reduzca.",
		"Salamos al gusto, añadimos el tomate y un poco de tomillo. Incorporamos las patas de perdiz al guiso y cubrimos con el caldo. Ponemos a fuego medio y dejamos cocinar durante 15 o 20 minutos, dependiendo del tamaño de la perdiz.",
		"Picamos la manzana en cubos de medio centímetro aproximadamente y los doramos en una sartén con sal y aceite. Salteamos a fuego fuerte unos tres minutos. Reservamos y doramos muy bien las pechugas bien sazonadas. Dos minutos por cada lado.",
		"Emplatamos una base del guiso con perdices y las pechugas escalopadas con manzana por encima."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(17),
	"categoria": "CARNE ROJA",
	"nombre": "Estofado de lengua de ternera con hortalizas",
	"ingredientes": [{
			"alimento": NumberInt(452),
			"ingrediente": "1 lengua de ternera"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "2 cebolla"
		},{
			"alimento": NumberInt(147),
			"ingrediente": "4 zanahorias"
		},{
			"alimento": NumberInt(548),
			"ingrediente": "2 hojas de laurel"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "2 dientes de ajo"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "1 tomate rallado"
		},{
			"alimento": NumberInt(149),
			"ingrediente": "8 aceitunas verdes sin hueso"
		},{
			"alimento": NumberInt(590),
			"ingrediente": "10 alcaparras"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "½ cucharadita de pimienta"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"En una olla a presión ponemos la lengua, una cebolla, dos de las zanahorias, el laurel, sal y cubrimos de agua.",
		"Cocinamos 50 minutos desde que salga el vapor.",
		"Para la salsa, cortamos el resto de zanahorias en rodajas, el ajo en láminas y la cebolla en juliana y pochamos en una sartén con aceite.",
		"Incorporamos el tomate rallado y sofreímos dos minutos más. Añadimos un poco de pimienta.",
		"Añadimos las alcaparras y las aceitunas picadas. Añadimos 200 ml de agua y cocinamos 15 minutos. Trituramos y sazonamos.",
		"Pelamos la lengua y la cortamos en filetes.",
		"Los introducimos en la salsa y cocinamos 5 minutos todo junto."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(18),
	"categoria": "CARNE ROJA",
	"nombre": "Terrina de ternera, vino dulce y espárragos",
	"ingredientes": [{
			"alimento": NumberInt(492),
			"ingrediente": "800 g de morcillo anterior"
		},{
			"alimento": NumberInt(117),
			"ingrediente": "1 cucharada de mostaza"
		},{
			"alimento": NumberInt(591),
			"ingrediente": "150 ml de Oporto"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta"
		},{
			"alimento": NumberInt(108),
			"ingrediente": "6 espárragos verdes"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(117),
			"ingrediente": "Mostaza"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Ponemos a cocer el morcillo en agua, vino, sal y pimienta. En una olla exprés tardará 40 minutos. Cocinamos los espárragos a la plancha.",
		"Desmenuzamos la carne, la sazonamos bien con mostaza, sal y pimienta, la cubrimos con su caldo de cocción y la metemos en una tarrina forrada con film colocando los espárragos en la zona central del molde.",
		"Dejamos enfriar aproximadamente 3 horas, desmoldamos y servimos con un poco de mostaza."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(19),
	"categoria": "CARNE BLANCA",
	"nombre": "Ensalada de pechugas jugosas",
	"ingredientes": [{
			"alimento": NumberInt(525),
			"ingrediente": "4 pechugas de pollo"
		},{
			"alimento": NumberInt(592),
			"ingrediente": "400 g de pasta cocida"
		},{
			"alimento": NumberInt(593),
			"ingrediente": "Tomates Cherry"
		},{
			"alimento": NumberInt(133),
			"ingrediente": "8 rabanitos"
		},{
			"alimento": NumberInt(594),
			"ingrediente": "1 bolsa de rúcula"
		},{
			"alimento": NumberInt(595),
			"ingrediente": "Germinados"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(573),
			"ingrediente": "Semillas de sésamo"
		},{
			"alimento": NumberInt(553),
			"ingrediente": "Vinagre"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Lo primero que vamos a hacer es preparar la pechuga para después servirla fría.",
		"Colocamos un poco de papel film sobre la mesa y espolvoreamos semillas de sésamo. Ponemos la pechuga y enrollamos con el papel hasta que quede bien sellada. Repetimos este proceso con todas las pechugas.",
		"Cocinamos al vapor las pechugas durante 5 minutos. Podemos hacerlo en una vaporera o en una olla con agua y un escurridor.",
		"Pasados esos 5 minutos, retiramos el papel film y tostamos la pechuga de pollo en una sartén con un poco de aceite de oliva. De esta manera quedará jugosa por dentro y tostada por fuera. Dejamos enfriar antes de montar la ensalada.",
		"Cortamos los tomates Cherry por la mitad y laminamos los rabanitos.",
		"En un bol añadimos los tomates cortados por la mitad, unas láminas de rabanitos, la pasta cocina, la rúcula y los germinados. Mezclamos y aliñamos al gusto.",
		"Terminamos emplatando con la pechuga laminada por encima."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(20),
	"categoria": "CARNE BLANCA",
	"nombre": "Guiso de conejo con setas",
	"ingredientes": [{
			"alimento": NumberInt(533),
			"ingrediente": "1 conejo en trozos"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "2 dientes de ajo"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolla"
		},{
			"alimento": NumberInt(138),
			"ingrediente": "400 g de setas variadas"
		},{
			"alimento": NumberInt(548),
			"ingrediente": "Laurel"
		},{
			"alimento": NumberInt(596),
			"ingrediente": "Romero fresco"
		},{
			"alimento": NumberInt(549),
			"ingrediente": "Tomillo fresco"
		},{
			"alimento": NumberInt(543),
			"ingrediente": "100 ml de vino blanco"
		},{
			"alimento": NumberInt(557),
			"ingrediente": "300 ml de caldo de conejo"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta negra"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Para esta elaboración vamos a utilizar una olla exprés de 4 litros. Ponemos la olla al calentar con un poco de aceite de oliva mientras salpimentamos un conejo en trozos.",
		"A continuación, doramos el conejo. Es importante que no movamos el conejo para que se dore bien y así quede más jugoso por dentro. Cuando los trozos de conejo estén dorados por ambas caras, añadimos el ajo picado y rehogamos.",
		"Pasados unos minutos incorporamos la cebolla picada en brunoise. Mezclamos y rehogamos unos minutos más hasta que la cebolla comience a transparentar.",
		"Incorporamos al guiso las setas, una hoja de laurel y tomillo y romero al gusto. Agregamos el vino blanco y esperamos unos minutos para que desglase todos los jugos y evapore el alcohol.",
		"Incorporamos el caldo de conejo, también podemos utilizar caldo de pollo, y cerramos la olla durante 15 minutos.",
		"Pasado ese tiempo abrimos la olla, rectificamos y emplatamos."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(21),
	"categoria": "CARNE BLANCA",
	"nombre": "Conejo al ajillo",
	"ingredientes": [{
			"alimento": NumberInt(533),
			"ingrediente": "1 kg de conejo"
		},{
			"alimento": NumberInt(73),
			"ingrediente": "4 ajos"
		},{
			"alimento": NumberInt(127),
			"ingrediente": "Perejil"
		},{
			"alimento": NumberInt(271),
			"ingrediente": "Aceite de oliva"
		},{
			"alimento": NumberInt(553),
			"ingrediente": "Vinagre"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Lo primero, pelamos y picamos los ajos y el perejil. Los mezclamos con una cucharada de vinagre. Reservamos.",
		"Seguidamente, ponemos a calentar una sartén amplia con aceite en la que doramos el conejo.",
		"Vertemos la picada de ajo y perejil, damos unas vueltas y cubrimos con agua.",
		"Tapamos y dejamos cocinar 30 minutos.",
		"Transcurrido este tiempo, retiramos del fuego y emplatamos nuestro conejo al ajillo."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(22),
	"categoria": "CARNE BLANCA",
	"nombre": "Pato estofado",
	"ingredientes": [{
			"alimento": NumberInt(517),
			"ingrediente": "1 pato en trozos"
		},{
			"alimento": NumberInt(597),
			"ingrediente": "1 vasito de coñac"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "3-4 ajos"
		},{
			"alimento": NumberInt(271),
			"ingrediente": "Aceite de oliva"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolla"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Cubrimos una sartén grande de aceite y añadimos la carne de pato, a la que habremos retirado toda la grasa previamente, al fuego para que quede dorado.",
		"Mientras tanto, pelamos y cortamos una cebolla en tiras.",
		"Cuando el pato esté listo, lo retiramos del fuego y lo echamos a una olla. Añadimos el aceite con el que le hemos frito, un vasito de coñac, la cebolla, una hojita de laurel y los ajos.",
		"Tapamos y dejamos cocinar durante 30 minutos.",
		"Transcurrido este tiempo, retiramos la olla del fuego y emplatamos nuestro pato estofado."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(23),
	"categoria": "CARNE BLANCA",
	"nombre": "Pechuga de pollo al estilo Hasselback",
	"ingredientes": [{
			"alimento": NumberInt(519),
			"ingrediente": "1/2 pechuga de pavo"
		},{
			"alimento": NumberInt(598),
			"ingrediente": "9 lonchas de bacon"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "4 bayas de pimienta molida"
		},{
			"alimento": NumberInt(548),
			"ingrediente": "6 hojas de laurel"
		},{
			"alimento": NumberInt(596),
			"ingrediente": "1 cucharada de romero"
		},{
			"alimento": NumberInt(599),
			"ingrediente": "1 cucharada de orégano"
		},{
			"alimento": NumberInt(549),
			"ingrediente": "1 cucharada de tomillo"
		},{
			"alimento": NumberInt(600),
			"ingrediente": "1 ensalada de brotes"
		},{
			"alimento": NumberInt(601),
			"ingrediente": "½ cebolla morada"
		},{
			"alimento": NumberInt(271),
			"ingrediente": "Aceite de oliva"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Lo primero que hacemos es cortar la pechuga de pavo en rodajas sin llegar hasta el final para que quede el aspecto de las hojas de un libro.",
		"Espolvoreamos con las hierbas e introducimos una hoja de laurel y las lonchas de bacon entre las aberturas. Aliñamos con pimienta y sal, regamos con un chorrito de aceite y pasamos a una fuente resistente al calor.",
		"Introducimos en el horno durante 25 minutos a 180º (o a la barbacoa y asamos durante 25 minutos)",
		"Para decorar servimos con ensalada de brotes y la cebolla cortada en rodajas finas"
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(24),
	"categoria": "CARNE ROJA",
	"nombre": "Pinchos de lomo marinado",
	"ingredientes": [{
			"alimento": NumberInt(602),
			"ingrediente": "1 kg de cinta de lomo cerdo ibérico"
		},{
			"alimento": NumberInt(183),
			"ingrediente": "El zumo de 2 naranjas"
		},{
			"alimento": NumberInt(577),
			"ingrediente": "1 lima"
		},{
			"alimento": NumberInt(599),
			"ingrediente": "1 cucharadita de orégano seco"
		},{
			"alimento": NumberInt(562),
			"ingrediente": "1 cucharadita de comino molido"
		},{
			"alimento": NumberInt(550),
			"ingrediente": "1 cucharadita de pimentón dulce"
		},{
			"alimento": NumberInt(603),
			"ingrediente": "3 cucharadas de vinagre de manzana"
		},{
			"alimento": NumberInt(271),
			"ingrediente": "4 cucharadas de aceite de oliva"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta"
		},{
			"alimento": NumberInt(601),
			"ingrediente": "1 cebolla morada"
		},{
			"alimento": NumberInt(577),
			"ingrediente": "1 lima"
		},{
			"alimento": NumberInt(2),
			"ingrediente": "300 g de arroz largo hervido"
		},{
			"alimento": NumberInt(575),
			"ingrediente": "4 ramitas de cilantro fresco"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(604),
			"ingrediente": "Durum o tortitas"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Para la marinada: mezcla el zumo naranja, el orégano, el comino, el pimentón, el aceite y el vinagre. Cuela la mezcla e introduce la carne cortada. Marina en el frigorífico unas 2 horas.",
		"Pela y corta las cebollas en juliana fina. Mezcla en un bol con el zumo de lima y sal. Remueve y dejar macerar.",
		"Retira los dados de carne marinados. Ensarta en brochetas y salpimienta. Cocina en la barbacoa unos 8-10 minutos.",
		"Coloca arroz en el durum, cubre con los pinchos, la cebolla y el cilantro. Sirve caliente."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(25),
	"categoria": "CARNE ROJA",
	"nombre": "Chili con carne",
	"ingredientes": [{
			"alimento": NumberInt(72),
			"ingrediente": "2 dientes de ajo"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolla"
		},{
			"alimento": NumberInt(391),
			"ingrediente": "500 g de carne picada"
		},{
			"alimento": NumberInt(583),
			"ingrediente": "350 g de frijoles cocidos"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "200 ml de tomate triturado"
		},{
			"alimento": NumberInt(560),
			"ingrediente": "200 ml de caldo de pollo"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "1 cucharada de tomate concentrado"
		},{
			"alimento": NumberInt(205),
			"ingrediente": "1 cucharada de cacao puro en polvo"
		},{
			"alimento": NumberInt(605),
			"ingrediente": "Totopos"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(550),
			"ingrediente": "Pimentón dulce"
		},{
			"alimento": NumberInt(550),
			"ingrediente": "Pimentón picante"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta negra"
		},{
			"alimento": NumberInt(562),
			"ingrediente": "Comino"
		},{
			"alimento": NumberInt(575),
			"ingrediente": "Cilantro"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Picamos finamente dos dientes de ajo y lo sofreímos en una olla con aceite de oliva virgen extra. Picamos la cebolla en brunoise y la sofreímos junto al ajo.",
		"Añadimos la carne picada a la olla y comenzamos a dorar. Salpimentamos al gusto y añadimos los cominos picados, pimentón dulce, pimentón picante y el cacao. Para que el pimentón no se queme añadimos el tomate triturado, el tomate concentrado y mezclamos bien.",
		"Cuando el tomate haya reducido incorporamos el caldo de pollo. En este momento incorporamos los frijoles cocidos y los cocinamos durante 15 minutos removiendo constantemente hasta que se cree una especie de pasta.",
		"Servimos con cilantro picado no muy fino y totopos."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(26),
	"categoria": "CARNE BLANCA",
	"nombre": "Pollo mantequilla con coco",
	"ingredientes": [{
			"alimento": NumberInt(606),
			"ingrediente": "2 cucharadas de ghee (mantequilla clarificada), divididas"
		},{
			"alimento": NumberInt(527),
			"ingrediente": "2 pechugas de pollo grandes (450 g), cortadas en trozos de 2,5 cm"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta negra"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "2 cebollas, cortadas en cubitos"
		},{
			"alimento": NumberInt(566),
			"ingrediente": "45 g de jengibre rallado"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "3 dientes de ajo machacados"
		},{
			"alimento": NumberInt(607),
			"ingrediente": "½ chile serrano, sin semillas y finamente picado"
		},{
			"alimento": NumberInt(585),
			"ingrediente": "1 cucharadita de cúrcuma"
		},{
			"alimento": NumberInt(575),
			"ingrediente": "1 cucharadita de cilantro molido"
		},{
			"alimento": NumberInt(562),
			"ingrediente": "1 cucharadita de comino molido"
		},{
			"alimento": NumberInt(565),
			"ingrediente": "¼ de cucharadita de chile en polvo"
		},{
			"alimento": NumberInt(586),
			"ingrediente": "4 vainas de cardamomo, trituradas, las semillas reservadas"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "720 ml de tomate triturado"
		},{
			"alimento": NumberInt(544),
			"ingrediente": "60 ml de agua"
		},{
			"alimento": NumberInt(608),
			"ingrediente": "60 g de anacardos picados"
		},{
			"alimento": NumberInt(210),
			"ingrediente": "235 ml de leche de coco"
		},{
			"alimento": NumberInt(259),
			"ingrediente": "15 g de azúcar moreno"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Calentamos 1 cucharada de ghee en una cacerola grande a fuego medio-alto. Agregamos los trozos de pollo, sazonamos con sal y pimienta y freímos, dándoles la vuelta ocasionalmente, hasta que estén dorados por todos lados, aproximadamente de 5 a 7 minutos. Retiramos a un plato y reservamos.",
		"Calentamos el ghee restante a fuego medio, añadimos las cebollas y sofreímos hasta que se ablanden, aproximadamente 5 minutos. Echamos jengibre, ajo, chile serrano y las especias.",
		"Freímos, revolviendo con frecuencia, aproximadamente 5 minutos. Agregamos el tomate triturado y el agua; llevamos a ebullición. Reducimos el fuego y cocinamos a fuego lento durante 15 minutos.",
		"Pasamos la salsa a una batidora. Añadimos los anacardos y batimos hasta que esté suave.",
		"Vertemos la salsa de nuevo a la cacerola, añadimos la leche de coco y el azúcar. Sazonamos con sal y pimienta. Incorporamos el pollo y cocinamos a fuego lento hasta que el pollo esté bien cocido, aproximadamente 10 minutos. Servimos con arroz."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(27),
	"categoria": "CARNE ROJA",
	"nombre": "Hamburguesas caseras con hierbas aromáticas",
	"ingredientes": [{
			"alimento": NumberInt(580),
			"ingrediente": "250 g de carne picada de cerdo"
		},{
			"alimento": NumberInt(519),
			"ingrediente": "250 g de pavo picado"
		},{
			"alimento": NumberInt(137),
			"ingrediente": "2½ cucharadas de sirope de arce"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "2 dientes de ajo picados"
		},{
			"alimento": NumberInt(609),
			"ingrediente": "2½ cucharaditas de salvia picada"
		},{
			"alimento": NumberInt(549),
			"ingrediente": "1½ cucharaditas de tomillo finamente picado"
		},{
			"alimento": NumberInt(610),
			"ingrediente": "1 cucharadita de semillas de hinojo"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "1 cucharadita de sal"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "½ cucharadita de pimienta negra recién molida"
		},{
			"alimento": NumberInt(550),
			"ingrediente": "¼ de cucharadita de pimentón"
		},{
			"alimento": NumberInt(272),
			"ingrediente": "Aceite de girasol"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Precalentamos el horno a 95ºC. Forramos una bandeja del horno con un papel vegetal.",
		"En un bol grande mezclamos todos los ingredientes menos el aceite. Con las manos húmedas, formamos 12 generosas hamburguesas de ½ cm de grosor.",
		"Calentamos 1 cucharada (15 ml) de aceite en una sartén antiadherente grande a fuego medio.",
		"Trabajando en lotes de seis, freímos las hamburguesas hasta que se doren y la carne esté bien hecha, aproximadamente de 6 a 8 minutos dándoles la vuelta a la mitad del tiempo (bajamos el fuego a medio-bajo si las hamburguesas se doran demasiado rápido). Limpiamos la sartén con papel de cocina entre lotes y echamos más aceite antes de freír las hamburguesas restantes.",
		"Si no vamos a servir las hamburguesas inmediatamente, las metemos al horno precalentado para mantenerlas calientes."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(28),
	"categoria": "CARNE ROJA",
	"nombre": "Albóndigas tradicionales",
	"ingredientes": [{
			"alimento": NumberInt(391),
			"ingrediente": "500 g de carne picada de ternera"
		},{
			"alimento": NumberInt(580),
			"ingrediente": "500 g de carne picada de cerdo"
		},{
			"alimento": NumberInt(414),
			"ingrediente": "50 g de manteca de cerdo"
		},{
			"alimento": NumberInt(127),
			"ingrediente": "Un puñado de perejil fresco"
		},{
			"alimento": NumberInt(246),
			"ingrediente": "4 huevos"
		},{
			"alimento": NumberInt(34),
			"ingrediente": "Dos rebanadas de pan"
		},{
			"alimento": NumberInt(223),
			"ingrediente": "100 ml de leche"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "1 cucharadita de ajo en polvo"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "3 dientes de ajo"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolla"
		},{
			"alimento": NumberInt(147),
			"ingrediente": "1 zanahoria"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "2 cucharadas de tomate concentrado"
		},{
			"alimento": NumberInt(589),
			"ingrediente": "80 ml de vino tinto"
		},{
			"alimento": NumberInt(560),
			"ingrediente": "200 ml de caldo de pollo"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Mezclamos carne picada de cerdo y de ternera y le incorporamos manteca de cerdo, pan mojado en leche, perejil, ajo en polvo, cuatro huevos, sal y pimienta.",
		"Formamos y enharinamos las albóndigas. Las freímos en abundante aceite hasta que estén doradas pero no hechas del todo. Las sacamos y reservamos.",
		"En parte del aceite que hemos utilizado, sofreímos el ajo picado y la cebolla en brunoise.",
		"Añadimos la zanahoria picada también en brunoise. Cuando esté pochado todo, añadimos el tomate concentrado.",
		"Reincorporamos las albóndigas y añadimos 80 ml de vino tinto. Dejamos que se evapore el alcohol y añadimos el caldo hasta cubrirlas. Dejamos reducir cociendo 20 minutos y servimos."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(29),
	"categoria": "CARNE BLANCA",
	"nombre": "Pollo margarita al horno",
	"ingredientes": [{
			"alimento": NumberInt(120),
			"ingrediente": "1,5 kg de patatas"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "1,5 kg de tomates maduros"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "2 cabezas de ajo"
		},{
			"alimento": NumberInt(570),
			"ingrediente": "1 manojo de albahaca (30 g)"
		},{
			"alimento": NumberInt(525),
			"ingrediente": "1 pollo entero (1,5 kg)"
		},{
			"alimento": NumberInt(19),
			"ingrediente": "50 g de harina"
		},{
			"alimento": NumberInt(611),
			"ingrediente": "1 bola de mozzarella ahumada (200 g)"
		},{
			"alimento": NumberInt(594),
			"ingrediente": "60 g de rúcula"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Precalentar el horno a 180 ºC.",
		"Pelar las patatas, cortarlas en trozos de tamaño similar y cocerlas en una olla grande con agua salada hirviendo 15 minutos, o hasta que estén tiernas.",
		"Cortar los tomates por la mitad y ponerlos en una bandeja grande de horno. Romper los dientes de ajo sin pelarlos. Reservar algunas hojas de albahaca para más tarde, introducir el resto del manojo en el pollo y colocar este en la bandeja.",
		"Sazonarlo con sal marina y pimienta negra, rociarlo con 2 cucharadas de vinagre y 2 de aceite de oliva, y frotarlo bien para ayudar a que penetre el sabor. Poner el pollo directamente sobre la rejilla del horno con la bandeja de tomates debajo. Asar 1 hora y 20 minutos, o hasta que esté dorado y hecho por dentro.",
		"Mientras tanto, escurrir las patatas y dejar que pierdan la humedad, machacarlas, sazonarlas y mezclarlas con la harina. Cuando se enfríen lo bastante como para manipularlas, moldear 12 bolas. Cortar la mozzarella en 12 trozos, introducir un trozo en cada bola y sellar los ñoquis. Disponerlos en una fuente de horno engrasada de 25 × 35 cm y asar en la base del horno 1 hora, o hasta que estén dorados.",
		"Retirar el pollo y dejarlo reposar en la bandeja de los tomates. Aplastar algunos ajos para pelarlos, y mezclarlos con los jugos de la bandeja. Esparcir por encima las hojas de albahaca reservadas y servir con los ñoquis gigantes y la rúcula, y rociar todo con la salsa de ajo."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(30),
	"categoria": "CARNE BLANCA",
	"nombre": "Redondo de pavo con setas en escabeche",
	"ingredientes": [{
			"alimento": NumberInt(138),
			"ingrediente": "300 g de setas frescas o rehidratadas"
		},{
			"alimento": NumberInt(147),
			"ingrediente": "1 zanahoria en rodajas"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "2 ajos machacados"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "½ cebolla en juliana"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "8 bolas de pimienta en grano"
		},{
			"alimento": NumberInt(548),
			"ingrediente": "2 hojas de laurel"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "200 ml de aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(553),
			"ingrediente": "150 ml de vinagre de Jerez"
		},{
			"alimento": NumberInt(543),
			"ingrediente": "100 ml de vino blanco"
		},{
			"alimento": NumberInt(545),
			"ingrediente": "50 ml de vino de Jerez"
		},{
			"alimento": NumberInt(549),
			"ingrediente": "1 rama de tomillo"
		},{
			"alimento": NumberInt(596),
			"ingrediente": "1 rama de romero"
		},{
			"alimento": NumberInt(520),
			"ingrediente": "1 pechuga de pavo abierta en filete"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta molida"
		},{
			"alimento": NumberInt(545),
			"ingrediente": "60 ml de vino de Jerez (para el pavo)"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(600),
			"ingrediente": "Brotes para decorar"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"En una olla incorporamos el aceite, la pimienta y el laurel. Añadimos la cebolla, la zanahoria y los ajos y pochamos.",
		"Cocinamos hasta que queden tiernas. Agregamos el vino blanco y dejamos evaporar. Troceamos las setas y las incorporamos con el tomillo y el romero. Mojamos con el Jerez y con el vinagre. Cocinamos 15 minutos.",
		"Abrimos la pechuga de pavo y rellenamos con las setas y las verduras en escabeche, sazonamos, formamos un rollo y bridamos. Ponemos en una bandeja de horno, regamos con un poco más de Jerez y horneamos, con el horno precalentado a 180ºC, calor arriba y abajo con ventilador 30-35 minutos.",
		"Dejamos enfriar un poco para desbridar y loncheamos.",
		"Servimos y decoramos con brotes."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(31),
	"categoria": "CARNE BLANCA",
	"nombre": "Pollo asado",
	"ingredientes": [{
			"alimento": NumberInt(136),
			"ingrediente": "8 contramuslos de pollo"
		},{
			"alimento": NumberInt(549),
			"ingrediente": "3 ramitas de tomillo"
		},{
			"alimento": NumberInt(120),
			"ingrediente": "300 g de patatas"
		},{
			"alimento": NumberInt(147),
			"ingrediente": "200 g de zanahorias baby"
		},{
			"alimento": NumberInt(560),
			"ingrediente": "250 ml de caldo de pollo"
		},{
			"alimento": NumberInt(117),
			"ingrediente": "2 cucharaditas de mostaza"
		},{
			"alimento": NumberInt(100),
			"ingrediente": "160 g de col rizada"
		},{
			"alimento": NumberInt(166),
			"ingrediente": "1 limón"
		},{
			"alimento": NumberInt(127),
			"ingrediente": "Perejil"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(271),
			"ingrediente": "Aceite de oliva"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Calentamos el aceite en una sartén grande y profunda a fuego alto. Salpimiéntanos los muslos de pollo generosamente y los colocamos con la piel hacia abajo en la sartén con la ralladura de limón, el tomillo y las patatas cortadas a la mitad.",
		"Dejamos que los muslos de pollo y las patatas se hagan sin moverlos durante 10–15 minutos, o hasta que la piel del pollo se vuelva crujiente y dorado. Damos la vuelta al pollo y las patatas, añadimos las zanahorias y cocinamos durante 2-3 minutos hasta que las zanahorias comiencen a ponerse tiernas.",
		"Añadimos un toque de la mostaza de Dijon y el caldo de pollo. Cocinamos a fuego lento y después añadimos la col rizada. Sazonamos, tapamos y dejamos a cocinar por 10 minutos más hasta que el pollo esté completamente hecho, las patatas y las zanahorias estén tiernas y la salsa se haya reducido ligeramente.",
		"Lavamos las hojas de la col rizada y las troceamos con la mano directamente sobre la sartén. Si le falta la humedad, añadimos un chorrito de caldo, tapamos y cocinamos durante unos 10 minutos más.",
		"Servimos directamente a la mesa con un buen chorrito de zumo de limón y una generosa pizca de perejil."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(32),
	"categoria": "PASTA INTEGRAL",
	"nombre": "Lasaña vegetal con bechamel de albahaca",
	"ingredientes": [{
			"alimento": NumberInt(612),
			"ingrediente": "12 placas de canelones o lasaña"
		},{
			"alimento": NumberInt(84),
			"ingrediente": "¼ de calabaza"
		},{
			"alimento": NumberInt(86),
			"ingrediente": "½ calabacín"
		},{
			"alimento": NumberInt(79),
			"ingrediente": "½ berenjena"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "½ cebolla"
		},{
			"alimento": NumberInt(546),
			"ingrediente": "1 pimiento verde italiano"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "1 tomate maduro"
		},{
			"alimento": NumberInt(104),
			"ingrediente": "4 champiñones"
		},{
			"alimento": NumberInt(20),
			"ingrediente": "30 g de harina"
		},{
			"alimento": NumberInt(230),
			"ingrediente": "30 g de mantequilla"
		},{
			"alimento": NumberInt(223),
			"ingrediente": "800 ml de leche"
		},{
			"alimento": NumberInt(570),
			"ingrediente": "1 manojo de albahaca fresca"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		}],
	"dieta": "VEGETARIANA",
	"preparacion":[
		"Picamos todas las verduras en cubos de 4 mm aproximadamente (brunoise)",
		"Sofreímos muy bien las verduras hasta que la calabaza, que es la más dura, esté tierna.",
		"Sazonamos.",
		"En una sartén fundimos la mantequilla. Integramos la harina y cocinamos un minuto a fuego medio. Introducimos la leche caliente y mezclamos hasta que espese. Sazonamos e incorporamos la albahaca muy picada.",
		"Cocemos las placas de pasta (canelones para lasañas individuales o lasaña para hacerla en una fuente). Montamos la lasaña, cubrimos con la bechamel y gratinamos a 200ºC hasta que se dore la superficie."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(33),
	"categoria": "PASTA INTEGRAL",
	"nombre": "Macarrones con salsa de coco y anacardos",
	"ingredientes": [{
			"alimento": NumberInt(28),
			"ingrediente": "200 gr macarrones"
		},{
			"alimento": NumberInt(131),
			"ingrediente": "1 puerro"
		},{
			"alimento": NumberInt(608),
			"ingrediente": "100 gr de anacardos"
		},{
			"alimento": NumberInt(210),
			"ingrediente": "1 lata de leche de coco"
		},{
			"alimento": NumberInt(554),
			"ingrediente": "50 ml de caldo de verduras"
		},{
			"alimento": NumberInt(0),
			"ingrediente": "Especias al gusto"
		},{
			"alimento": NumberInt(568),
			"ingrediente": "Parmesano (opcional)"
		}],
	"dieta": "VEGANA",
	"preparacion":[
		"Para esta receta debemos remojar los anacardos en agua caliente durante 20 minutos.",
		"Mientras, ponemos una olla con agua al fuego y cocemos la pasta hasta dejarlo al dente.",
		"Picamos finamente el puerro y lo pochamos en una sartén con aceite de oliva.",
		"Cuando el puerro esté dorado, incorporamos los anacardos escurridos, las especias, el caldo y la leche de coco. Cocinamos a fuego medio unos minutos más y después trituramos con una batidora.",
		"Mezclamos bien la salsa de anacardos con los macarrones y lo colocamos en una fuente de horno. Rallamos parmesano por encima y gratinamos durante 10 minutos a 200ºC."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(34),
	"categoria": "PASTA INTEGRAL",
	"nombre": "Tallarines con albóndigas y salsa de pimientos, tomates y tomillo",
	"ingredientes": [{
			"alimento": NumberInt(26),
			"ingrediente": "300 g de tallarines"
		},{
			"alimento": NumberInt(391),
			"ingrediente": "400 g de carne picada"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolleta"
		},{
			"alimento": NumberInt(25),
			"ingrediente": "70 g de pan rallado"
		},{
			"alimento": NumberInt(127),
			"ingrediente": "4 ramas de perejil fresco"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "1 cucharadita de ajo en polvo"
		},{
			"alimento": NumberInt(223),
			"ingrediente": "60 ml de leche"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "500 g de tomates triturados"
		},{
			"alimento": NumberInt(601),
			"ingrediente": "1/2 cebolla morada"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "1 diente de ajo"
		},{
			"alimento": NumberInt(549),
			"ingrediente": "1 rama de tomillo"
		},{
			"alimento": NumberInt(130),
			"ingrediente": "200 g de pimientos del piquillo"
		},{
			"alimento": NumberInt(543),
			"ingrediente": "100 ml de vino blanco"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Comenzamos picando la cebolleta y pochándola bien en una sartén con aceite.",
		"Incorporamos la cebolleta a la carne junto al pan rallado, el perejil, el ajo y la leche. Sazonamos y mezclamos para formar las albóndigas.",
		"Doramos las albóndigas en una sartén con un poco de aceite y reservamos.",
		"En una olla con agua abundante cocemos la pasta según las instrucciones del fabricante.",
		"En esa misma sartén comenzamos a preparar la salsa. Ponemos la cebolla en juliana, el diente de ajo machacado y, tras dos minutos a fuego fuerte, incorporamos los tomates triturados, el vino y el tomillo. Reducimos bien.",
		"Añadimos los pimientos del piquillo, cocinamos 5 minutos más y trituramos sin el tomillo. Sazonamos.",
		"Volvemos a poner la salsa en la sartén con las albóndigas para que se terminen de cocinar y pasados dos minutos introducimos los tallarines.",
		"Servimos y decoramos con más tomillo."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(35),
	"categoria": "PASTA INTEGRAL",
	"nombre": "Canelones de carne y foie con setas",
	"ingredientes": [{
			"alimento": NumberInt(612),
			"ingrediente": "1 paquete de pasta fresca de lasaña"
		},{
			"alimento": NumberInt(391),
			"ingrediente": "500 g de carne de ternera muy picada"
		},{
			"alimento": NumberInt(613),
			"ingrediente": "100 g de foie"
		},{
			"alimento": NumberInt(231),
			"ingrediente": "500 ml de nata"
		},{
			"alimento": NumberInt(246),
			"ingrediente": "2 huevos"
		},{
			"alimento": NumberInt(568),
			"ingrediente": "100 g de parmesano rallado"
		},{
			"alimento": NumberInt(138),
			"ingrediente": "250 g de setas variadas"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolleta"
		},{
			"alimento": NumberInt(543),
			"ingrediente": "250 ml de vino blanco"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Comenzamos reduciendo la nata a fuego lento. Reservamos.",
		"Picamos la cebolleta y la rehogamos en una cazuela con aceite.",
		"Añadimos la carne, sofreímos, sazonamos, añadimos el vino y dejamos evaporar.",
		"Añadimos la mitad de la nata a la carne.",
		"Incorporamos el foie y dejamos cocinar 2 minutos. Dejamos enfriar.",
		"Blanqueamos la pasta, formamos los canelones y cubrimos con el resto de la nata reducida, enriquecida con las yemas de los 2 huevos y queso parmesano.",
		"Gratinamos en el horno.",
		"Salteamos las setas picadas en una sartén con aceite y colocamos en la base del plato y sobre ellas los canelones gratinados."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(36),
	"categoria": "PASTA INTEGRAL",
	"nombre": "PASTA INTEGRAL con langostinos, pesto y rosado",
	"ingredientes": [{
			"alimento": NumberInt(332),
			"ingrediente": "300 g de langostinos crudos"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "4 dientes de ajo"
		},{
			"alimento": NumberInt(615),
			"ingrediente": "2 cucharadas de pesto rojo"
		},{
			"alimento": NumberInt(616),
			"ingrediente": "150 g de pasta cabello de ángel o taglierini seco"
		},{
			"alimento": NumberInt(617),
			"ingrediente": "150 ml de vino rosado"
		},{
			"alimento": NumberInt(271),
			"ingrediente": "Aceite de oliva"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"En primer lugar, ponemos a cocer la pasta en agua hirviendo con sal siguiendo las instrucciones del fabricante.",
		"Mientras tanto, salteamos en una sartén con aceite de oliva 4 langostinos enteros. Reservamos.",
		"Por otro lado, al resto de langostinos les quitamos las cabezas y las salteamos en una sartén para sacar todo el jugo. Retiramos.",
		"Limpiamos el resto de gambas, quitándoles la cáscara, la cola y la vena. Picamos las gambas y los ajos.",
		"En la sartén con el jugo de las cabezas y un poco de aceite, salteamos el ajo y las gambas. Pasado 1 minuto, agregamos el pesto rojo, removiendo de vez en cuando. ",
		"Vertemos el vino rosado sobre las gambas y cocinamos hasta que quede todo bien salteado.",
		"Escurrimos la pasta y la añadimos a la sartén de las gambas, mezclando en el fuego durante 1 minuto. Salpimentamos al gusto.",
		"Emplatamos y servimos."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(37),
	"categoria": "PASTA INTEGRAL",
	"nombre": "Cuscús negro con mejillones",
	"ingredientes": [{
			"alimento": NumberInt(618),
			"ingrediente": "80 g de cuscús precocido"
		},{
			"alimento": NumberInt(343),
			"ingrediente": "600 g de mejillones"
		},{
			"alimento": NumberInt(619),
			"ingrediente": "1 cerveza fría"
		},{
			"alimento": NumberInt(20),
			"ingrediente": "2 cucharadas de harina"
		},{
			"alimento": NumberInt(246),
			"ingrediente": "1 huevo"
		},{
			"alimento": NumberInt(272),
			"ingrediente": "Aceite de girasol"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "1 diente de ajo"
		},{
			"alimento": NumberInt(551),
			"ingrediente": "Azafrán molido"
		},{
			"alimento": NumberInt(620),
			"ingrediente": "Cebollino"
		},{
			"alimento": NumberInt(127),
			"ingrediente": "Perejil"
		},{
			"alimento": NumberInt(553),
			"ingrediente": "Vinagre"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Ponemos una olla al fuego y dejamos que coja mucho calor.",
		"Mientras tanto, limpiamos bien los mejillones.",
		"Introducimos los mejillones en la olla y los mojamos con agua y un chorrito de vino blanco. Aderezamos con sal y añadimos también una rama de perejil. Dejamos que se abran y retiramos del fuego inmediatamente.",
		"Sacamos los mejillones de sus conchas y dejamos que se enfríen sobre papel de cocina para que estén secos.",
		"Añadimos en el caldo de la cocción de los mejillones tinta de calamar y removemos. Colamos y vertemos el caldo caliente de los mejillones sobre el cuscús (misma cantidad de caldo que de cuscús), movemos un poco y tapamos con un paño limpio durante 5 minutos.",
		"Por otro lado, preparamos una mayonesa a la manera tradicional con el huevo, aceite de girasol y aceite de oliva a partes iguales, un diente de ajo y azafrán molido. Batimos hasta que emulsione y añadimos un chorrito de vinagre y una pizca de sal.",
		"Preparamos la tempura con harina y cerveza muy fría. Salpimentamos e introducimos los mejillones en nuestra mezcla de tempura.",
		"Freímos en abundante aceite muy caliente y reservamos.",
		"Mezclamos el cuscús con cebollino y perejil picado. Lo emplatamos con la ayuda de un aro.",
		"Disponemos encima los mejillones en tempura y terminamos con nuestra mayonesa de azafrán."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(38),
	"categoria": "PASTA INTEGRAL",
	"nombre": "Cuscús de marisco",
	"ingredientes": [{
			"alimento": NumberInt(343),
			"ingrediente": "250 g de mejillones"
		},{
			"alimento": NumberInt(332),
			"ingrediente": "250 g de langostinos"
		},{
			"alimento": NumberInt(621),
			"ingrediente": "200 ml de caldo de pescado"
		},{
			"alimento": NumberInt(622),
			"ingrediente": "150 g de sofrito de verduras"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "1 diente de ajo"
		},{
			"alimento": NumberInt(618),
			"ingrediente": "100 g cuscús precocido"
		},{
			"alimento": NumberInt(623),
			"ingrediente": "Una cucharadita de ras el hanut"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(620),
			"ingrediente": "Cebollino"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Cocemos los mejillones y los langostinos sin la cabeza en el caldo de pescado.",
		"Hacemos el cuscús según las indicaciones del fabricante con el caldo de pescado.",
		"Sacamos de las conchas los mejillones y pelamos los langostinos, reservamos.",
		"En una sartén con aceite, doramos las cabezas y las aplastamos bien. En esta misma sartén, salteamos el sofrito de verduras con un diente de ajo entero y con camisa. Añadimos una cucharadita de ras el hanut y dejamos sofreír unos minutos más.",
		"Ponemos el cuscús a remojo con la misma cantidad de caldo hirviendo que de sémola. Lo tapamos y lo dejamos 5 minutos.",
		"Desmigamos bien el cuscús con la ayuda de un tenedor y un poco de aceite.",
		"Incorporamos las verduras y los mariscos al cuscús y servimos en cuencos elegantes con cebolleta verde cortada en juliana muy fina."	
	]

})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(39),
	"categoria": "PASTA INTEGRAL",
	"nombre": "PASTA INTEGRAL con ajo y setas",
	"ingredientes": [{
			"alimento": NumberInt(624),
			"ingrediente": "150 g de trofie o fusilli"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "2 dientes de ajo"
		},{
			"alimento": NumberInt(139),
			"ingrediente": "250 g de setas variadas"
		},{
			"alimento": NumberInt(568),
			"ingrediente": "25 g de parmesano"
		},{
			"alimento": NumberInt(231),
			"ingrediente": "2 cucharadas de nata"
		}],
	"dieta": "vegetariano",
	"preparacion":[
		"Lo primero que tenemos que hacer es cocer la pasta en una cacerola con agua hirviendo. Escurrimos y reservamos una taza de agua con el agua de cocción.",
		"Pelamos lo ajos y los cortamos en láminas.",
		"Los cocinamos en una sartén con aceite y a fuego medio.",
		"Añadimos las setas en trozos grandes. Salpimentamos y dejamos cocinando unos 8 minutos o hasta que estén doradas.",
		"Añadir la pasta con un chorrito del agua de cocción, añadir la nata y el parmesano rallado y emplatar."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(40),
	"categoria": "PASTA INTEGRAL",
	"nombre": "Espaguetis con verduras y tomate",
	"ingredientes": [{
			"alimento": NumberInt(28),
			"ingrediente": "400 g de espaguetis"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolla"
		},{
			"alimento": NumberInt(129),
			"ingrediente": "1 pimiento rojo"
		},{
			"alimento": NumberInt(546),
			"ingrediente": "1 pimiento verde"
		},{
			"alimento": NumberInt(79),
			"ingrediente": "1 berenjena"
		},{
			"alimento": NumberInt(108),
			"ingrediente": "8 espárragos trigueros"
		},{
			"alimento": NumberInt(325),
			"ingrediente": "100 g de tomate seco"
		},{
			"alimento": NumberInt(626),
			"ingrediente": "50 g de aceitunas negras deshuesadas"
		},{
			"alimento": NumberInt(248),
			"ingrediente": "2 yemas de huevo"
		},{
			"alimento": NumberInt(599),
			"ingrediente": "1 cucharadita de orégano"
		},{
			"alimento": NumberInt(600),
			"ingrediente": "1 puñado de brotes"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		}],
	"dieta": "VEGETARIANA",
	"preparacion":[
		"En una cazuela con aceite pochamos la cebolla, los pimientos, la berenjena, el calabacín y los espárragos picados.",
		"Ponemos a hervir la pasta en agua con sal el tiempo que indique el fabricante.",
		"Escurrimos y lo añadimos a la cazuela.",
		"Incorporamos el tomate y las aceitunas cortadas en rodajas, sazonamos y aderezamos con el orégano.",
		"Agregamos las yemas de huevo y mezclamos.",
		"Servimos con un puñado de brotes."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(41),
	"categoria": "PASTA INTEGRAL",
	"nombre": "PASTA INTEGRAL al pesto con verduritas",
	"ingredientes": [{
			"alimento": NumberInt(592),
			"ingrediente": "400 g de pasta fresca"
		},{
			"alimento": NumberInt(233),
			"ingrediente": "100 g de queso de cabra"
		},{
			"alimento": NumberInt(216),
			"ingrediente": "2 puñados de piñones"
		},{
			"alimento": NumberInt(570),
			"ingrediente": "100 g de hojas de albahaca"
		},{
			"alimento": NumberInt(86),
			"ingrediente": "1 calabacín"
		},{
			"alimento": NumberInt(108),
			"ingrediente": "4 espárragos trigueros"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		}],
	"dieta": "VEGETARIANA",
	"preparacion":[
		"En un vaso americano trituramos el queso, los piñones y un vaso de aceite de oliva.",
		"Añadimos la albahaca y trituramos.",
		"En una cazuela con agua hirviendo y sal cocinamos la pasta hasta que flote, unos 2-3 minutos.",
		"Picamos el calabacín y los trigueros y en el último minuto lo añadimos a la cazuela con la pasta.",
		"Escurrimos y guardamos un vaso de su agua de cocción.",
		"Ponemos de nuevo la pasta y la verdura en la cazuela y añadimos el pesto.",
		"Mezclamos bien y servimos.",
		"Rallamos más queso por encima y decoramos con unos piñones y unas hojas de albahaca."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(42),
	"categoria": "PASTA INTEGRAL",
	"nombre": "Tagliatelle con curry de gambas",
	"ingredientes": [{
			"alimento": NumberInt(627),
			"ingrediente": "7 Gambones"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(621),
			"ingrediente": "½ vaso de caldo de pescado"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "1 cucharada de concentrado de tomate"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolla"
		},{
			"alimento": NumberInt(210),
			"ingrediente": "1 chorrito de leche de coco"
		},{
			"alimento": NumberInt(231),
			"ingrediente": "1 chorrito de nata"
		},{
			"alimento": NumberInt(26),
			"ingrediente": "150 g de tagliatelle"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Lo primero que tenemos que hacer es lavar y pelar 7 gambones. Reservamos en dos boles por un lado las cabezas y por otro las colas peladas.",
		"A continuación, salteamos sus cabezas en una sartén con aceite de oliva virgen extra caliente.",
		"Después, añadimos medio vaso de caldo de pescado, dejamos que se reduzca todo un poco durante un par de minutos y retiramos la sartén del fuego.",
		"Ya fuera del fuego, retiramos las cabezas de gambón, incorporamos a la sartén una cucharada de concentrado de tomate y reservamos.",
		"En otra sartén salteamos con un poco de aceite de oliva virgen extra las colas de gambón.",
		"Por otro lado, lavamos, pelamos y cortamos una cebolla en brunoise y la freímos en la misma sartén de las colas de los gambones. Reservamos algún brote verde de la cebolla para decorar nuestro plato al final.",
		"En la misma sartén, añadimos con la cebolla salteada las especias en la cantidad que consideremos para hacer el curry. Comino molido, cardamomo molido, chile molido, canela molida, pimienta negra molida, cúrcuma molida, jengibre molido, nuez moscada molida, pimentón en polvo y 2 hojas de curry.",
		"Además, vertemos a la sartén el caldo reservado de las cabezas de langostinos, un chorrito de leche de coco y otro de nata. Una vez coja consistencia de salsa, lo retiramos del fuego. Incorporamos las colas de langostinos.",
		"Cocemos 150 g de pasta tagliatelle según las indicaciones del fabricante y los mantecamos con la salsa.",
		"Por último, decoramos con los tallos verdes de cebolla que hemos reservado al principio.",
		"Servimos."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(43),
	"categoria": "PASTA INTEGRAL",
	"nombre": "Macarrones con queso",
	"ingredientes": [{
			"alimento": NumberInt(27),
			"ingrediente": "250 g de macarrones"
		},{
			"alimento": NumberInt(230),
			"ingrediente": "3 cucharadas de mantequilla"
		},{
			"alimento": NumberInt(21),
			"ingrediente": "3 cucharadas de harina"
		},{
			"alimento": NumberInt(223),
			"ingrediente": "750 ml de leche"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta negra"
		},{
			"alimento": NumberInt(628),
			"ingrediente": "2 tazas de queso cheddar rallado"
		}],
	"dieta": "VEGETARIANA",
	"preparacion":[
		"Para comenzar, cocemos los coditos en agua con sal siguiendo las indicaciones del fabricante. Cuando estén listos, los escurrimos y reservamos.",
		"Después, en un cazo, derretimos mantequilla y añadimos la harina. Cocemos a fuego medio y removemos para que la harina coja color. Entonces, sin dejar de remover añadimos la leche y hacemos una bechamel ligera, sazonamos con sal y pimienta.",
		"Precalentamos el horno a 180ºC.",
		"Retiramos la bechamel del fuego y le añadimos 1 y ½ tazas de queso rallado, mezclamos hasta que el queso se integre.",
		"Añadimos la bechamel a la pasta y mezclamos.",
		"Disponemos todo en un recipiente para horno, cubrimos con el resto del queso rallado y horneamos a 180ºC durante 25 minutos.",
		"Pasado este tiempo, emplatamos y servimos."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(44),
	"categoria": "PESCADO",
	"nombre": "Carabineros a la plancha",
	"ingredientes": [{
			"alimento": NumberInt(629),
			"ingrediente": "16 carabineros"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(577),
			"ingrediente": "Lima"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "5 dientes de ajo"
		},{
			"alimento": NumberInt(164),
			"ingrediente": "2 guindillas"
		},{
			"alimento": NumberInt(127),
			"ingrediente": "Perejil fresco"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Ponemos los dientes de ajo, guindillas, perejil, sal y aceite de oliva para la salsa Mery en un vaso batidor y trituramos hasta conseguir una salsa.",
		"Ponemos una gota de aceite en la plancha y doramos los carabineros minuto y medio por cada lado. Salamos y ponemos un poco de salsa Mery.",
		"Emplatamos y terminamos poniendo un poco de ralladura de lima."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(45),
	"categoria": "PESCADO",
	"nombre": "Guiso de calabaza y mejillones",
	"ingredientes": [{
			"alimento": NumberInt(72),
			"ingrediente": "4 dientes de ajo"
		},{
			"alimento": NumberInt(131),
			"ingrediente": "1 puerro"
		},{
			"alimento": NumberInt(84),
			"ingrediente": "1 calabaza"
		},{
			"alimento": NumberInt(630),
			"ingrediente": "1 yuca"
		},{
			"alimento": NumberInt(631),
			"ingrediente": "1 boniato"
		},{
			"alimento": NumberInt(632),
			"ingrediente": "1 cucharada de pimentón dulce"
		},{
			"alimento": NumberInt(35),
			"ingrediente": "2 rebanadas de pan"
		},{
			"alimento": NumberInt(621),
			"ingrediente": "100 ml de fumet de pescado"
		},{
			"alimento": NumberInt(343),
			"ingrediente": "400 g de mejillones frescos"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta negra"
		},{
			"alimento": NumberInt(551),
			"ingrediente": "Azafrán"
		},{
			"alimento": NumberInt(548),
			"ingrediente": "Laurel"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"En una olla exprés ponemos un poco de aceite y sofreímos un diente de ajo picado. Cortamos el puerro y lo añadimos a la olla cuando el ajo esté dorado.",
		"Pelamos y troceamos la calabaza, la yuca y el boniato. Incorporamos los tubérculos al guiso y rehogamos un par de minutos.",
		"Añadimos el pimentón, rehogamos y rápidamente cubrimos con agua. Salpimentamos al gusto y ponemos una hoja de laurel. Tapamos la olla exprés y dejamos cocinar durante 4 minutos.",
		"Mientras tanto preparamos un majado.",
		"En una sartén añadimos bien de aceite de oliva y freímos el resto de los ajos y el pan.",
		"Colocamos los ingredientes en un vaso batidor y trituramos con el fumet de pescado y unas hebras de azafrán.",
		"Abrimos la olla e incorporamos el majado y los mejillones previamente limpios. Mezclamos bien y dejamos que el guiso de un pequeño hervor para que la salsa ligue y los mejillones se abran.",
		"Emplatamos y decoramos con perejil fresco picado."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(46),
	"categoria": "PESCADO",
	"nombre": "Merluza gratinada al horno",
	"ingredientes": [{
			"alimento": NumberInt(345),
			"ingrediente": "4 filetes de merluza"
		},{
			"alimento": NumberInt(147),
			"ingrediente": "200 g de zanahorias"
		},{
			"alimento": NumberInt(633),
			"ingrediente": "200 g de bimi"
		},{
			"alimento": NumberInt(567),
			"ingrediente": "8 ajetes"
		},{
			"alimento": NumberInt(104),
			"ingrediente": "8 champiñones"
		},{
			"alimento": NumberInt(164),
			"ingrediente": "2 guindillas"
		},{
			"alimento": NumberInt(634),
			"ingrediente": "400 g sucedáneo de angulas"
		},{
			"alimento": NumberInt(273),
			"ingrediente": "300 g de mahonesa"
		},{
			"alimento": NumberInt(248),
			"ingrediente": "2 yemas de huevo"
		},{
			"alimento": NumberInt(65),
			"ingrediente": "2 cucharadas de salsa de soja"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Ponemos una sartén al fuego con un poco de aceite. Cuando esté caliente añadimos la merluza y sellamos por ambas caras. Aun estando cruda, retiramos del fuego. Salamos y reservamos.",
		"Pelamos y cortamos las zanahorias y el bimi a nuestro gusto. En una olla con abundante agua hirviendo las blanqueamos durante 30 segundos.",
		"Laminamos los ajetes y los champiñones. Los salteamos en una sartén con un poco de aceite de oliva. Añadimos una guindilla, el sucedáneo de angulas y las verduras que habíamos blanqueado previamente. Volvemos a saltear un par de minutos y retiramos del fuego.",
		"Mezclamos la mahonesa con la yema de huevo y la salsa de soja.",
		"En una fuente apta para el horno colocamos las verduras, la merluza y salpimentamos. Terminamos napando con la mahonesa de soja. Horneamos a 150ºC durante 6 minutos."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(47),
	"categoria": "PESCADO",
	"nombre": "Lenguado con habitas y salsa de naranja",
	"ingredientes": [{
			"alimento": NumberInt(334),
			"ingrediente": "4 lenguados grandes"
		},{
			"alimento": NumberInt(182),
			"ingrediente": "4 naranjas"
		},{
			"alimento": NumberInt(230),
			"ingrediente": "50 g de mantequilla"
		},{
			"alimento": NumberInt(56),
			"ingrediente": "400 g de habitas"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolla"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(635),
			"ingrediente": "3 ramas de eneldo fresco"
		},{
			"alimento": NumberInt(231),
			"ingrediente": "4 cucharadas soperas de nata"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"En un cazo ponemos a reducir el zumo de las naranjas y la piel rallada de dos de ellas. Debemos dejarlo reducir a la mitad. Introducimos la mantequilla y sazonamos.",
		"Pincelamos los lenguados con aceite de oliva, sazonamos y los envolvemos en papel de horno.",
		"Los cocinamos en una plancha o sartén bien caliente, 3 minutos por cada lado aproximadamente.",
		"En una sartén caliente con aceite doramos la cebolla picada. Incorporamos las habitas y doramos. Añadimos un chorrito de agua, bajamos la temperatura y tapamos. Cocinamos unos 7 minutos. Sazonamos.",
		"Sazonamos la nata e incorporamos el eneldo picado.",
		"Servimos una cama de habitas, el lenguado encima, salseamos con la naranja y ponemos encima la nata."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(48),
	"categoria": "PESCADO",
	"nombre": "Cuscús de langostinos y mango",
	"ingredientes": [{
			"alimento": NumberInt(618),
			"ingrediente": "1 vaso de cuscús"
		},{
			"alimento": NumberInt(544),
			"ingrediente": "1 vaso y cuarto de agua"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1/2 cebolla muy picada"
		},{
			"alimento": NumberInt(332),
			"ingrediente": "250 g de langostinos pelados"
		},{
			"alimento": NumberInt(170),
			"ingrediente": "350 g de mango limpio"
		},{
			"alimento": NumberInt(210),
			"ingrediente": "250 ml de leche de coco"
		},{
			"alimento": NumberInt(164),
			"ingrediente": "1 guindilla roja"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta negra"
		},{
			"alimento": NumberInt(575),
			"ingrediente": "1 manojo de cilantro fresco"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "1 diente de ajo"
		},{
			"alimento": NumberInt(201),
			"ingrediente": "Almendras tostadas"
		},{
			"alimento": NumberInt(568),
			"ingrediente": "70 g de queso parmesano"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "75 ml de aceite de oliva virgen extra"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Para comenzar, ponemos el cuscús en un bol.",
		"Calentamos el agua y cuando haya hervido la volcamos sobre el cuscús y tapamos bien. Dejamos reposar 5 minutos. Pasado este tiempo movemos bien y añadimos un poco de aceite para que quede suelto. Reservamos.",
		"En una sartén, calentamos un poco de aceite y salteamos la cebolla muy picada.",
		"Añadimos los langostinos y cuando estén dorados, añadimos también el mango cortado en cubos.",
		"Rectificamos de sal y salteamos un par de minutos.",
		"Incorporamos la leche de coco y damos un hervor. Añadimos un poco de pimienta negra recién molida.",
		"Para elaborar el pesto de cilantro: trituramos finamente todos los ingredientes. Si es necesario, podemos añadir un poco de agua.",
		"Servimos el cuscús con los langostinos y acompañado del pesto de cilantro."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(49),
	"categoria": "PESCADO",
	"nombre": "Tortilla de bacalao y pimiento verde",
	"ingredientes": [{
			"alimento": NumberInt(120),
			"ingrediente": "500 g de patatas"
		},{
			"alimento": NumberInt(),
			"ingrediente": "1 cebolla"
		},{
			"alimento": NumberInt(246),
			"ingrediente": "8 huevos"
		},{
			"alimento": NumberInt(290),
			"ingrediente": "200 g de bacalao desalado"
		},{
			"alimento": NumberInt(546),
			"ingrediente": "1 pimiento verde italiano"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "2 dientes de ajo"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Para comenzar, pelamos y cortamos las patatas y las ponemos a pochar junto con la cebolla y el pimiento cortados muy finos. Sazonamos, dejamos que cojan color y retiramos.",
		"Desmigamos el bacalao y cocinamos con una cucharada de aceite dejando que suelte el agua y reduciendo el caldo aparte.",
		"Mezclamos la mezcla de verduras con el bacalao y los huevos batidos.",
		"Formamos en una sartén antiadherente tortillas individuales."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(50),
	"categoria": "PESCADO",
	"nombre": "Huevos rotos con bacalao",
	"ingredientes": [{
			"alimento": NumberInt(246),
			"ingrediente": "4 huevos"
		},{
			"alimento": NumberInt(290),
			"ingrediente": "200 g de bacalao desalado"
		},{
			"alimento": NumberInt(120),
			"ingrediente": "500 g de patatas"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "2 tomates en conserva enteros"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolla"
		},{
			"alimento": NumberInt(127),
			"ingrediente": "Perejil fresco"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Empezamos cortando las patatas en láminas. Las lavamos, las sazonamos y las añadimos en una sartén con aceite para saltearlas. Terminamos llevándolas al horno a 180ºC.",
		"Picamos la cebolla en juliana y la rehogamos en una sartén con aceite a fuego vivo. Añadimos los tomates en tiras.",
		"Incorporamos el bacalao y retiramos del fuego.",
		"Freímos los huevos en una sartén con abundante aceite y colocamos sobre las patatas ya horneadas.",
		"Añadimos el bacalao y terminamos con perejil fresco picado."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(51),
	"categoria": "PESCADO",
	"nombre": "Salmón con miel y limón",
	"ingredientes": [{
			"alimento": NumberInt(371),
			"ingrediente": "2 lomos de salmón"
		},{
			"alimento": NumberInt(230),
			"ingrediente": "Mantequilla"
		},{
			"alimento": NumberInt(166),
			"ingrediente": "1 limón"
		},{
			"alimento": NumberInt(270),
			"ingrediente": "Miel"
		},{
			"alimento": NumberInt(575),
			"ingrediente": "Cilantro fresco"
		},{
			"alimento": NumberInt(636),
			"ingrediente": "1 vasito de arroz salvaje"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "Cebolla"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		},{
			"alimento": NumberInt(128),
			"ingrediente": "Pimienta"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		}],
	"dieta": "REGULAR",
	"preparacion":[
		"Salpimentamos el pescado.",
		"Mezclamos la mantequilla fundida con limón y miel.",
		"Marcamos el pescado y después lo ponemos en una bandeja de horno sobre un papel sulfurizado.",
		"Lo cubrimos con la salsa y horneamos 5 minutos.",
		"Al salir, espolvoreamos cilantro fresco picado. Servimos con un vasito de arroz que habremos hecho al microondas y cebolla picada."
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(52),
	"categoria": "VERDURAS",
	"nombre": "Gazpacho de fresones",
	"ingredientes": [{
			"alimento": NumberInt(161),
			"ingrediente": "300 g de fresones"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "200 g de tomate maduro"
		},{
			"alimento": NumberInt(546),
			"ingrediente": "1 pimiento verde"
		},{
			"alimento": NumberInt(72),
			"ingrediente": "1 diente de ajo"
		},{
			"alimento": NumberInt(34),
			"ingrediente": "100 g de pan"
		},{
			"alimento": NumberInt(553),
			"ingrediente": "1 cucharada de vinagre"
		},{
			"alimento": NumberInt(271),
			"ingrediente": "4 cucharadas de aceite de oliva"
		},{
			"alimento": NumberInt(547),
			"ingrediente": "Sal"
		}],
	"dieta": "VEGANA",
	"preparacion":[
		"Introduce el pan en un bol, cubre con agua y deja en remojo durante 5-10 minutos. Lava los tomates y retira el pedúnculo. Lava el pimiento y retira las semillas y los filamentos blancos.",
		"Corta en dados regulares. Coloca tomate y pimiento en el vaso de la batidora.",
		"Pela el ajo y añade al vaso también. Tritura con ayuda de una batidora eléctrica. Añade el pan escurrido, los fresones troceados limpios y sin pedúnculo, media cucharadita de sal y el vinagre. Tritura de nuevo.",
		"Por último, añade el aceite y bate hasta conseguir una textura cremosa. Si es demasiado espeso, añade un poco más de agua. Introduce en el frigorífico hasta el momento de servir"
	]
})
db.getCollection('recetas').insert({
	"idReceta": NumberInt(53),
	"categoria": "VERDURAS",
	"nombre": "Crema de aguacate",
	"ingredientes": [{
			"alimento": NumberInt(571),
			"ingrediente": "2 Aguacates"
		},{
			"alimento": NumberInt(244),
			"ingrediente": "1 Yogur griego"
		},{
			"alimento": NumberInt(637),
			"ingrediente": "2 cucharadas de crema de queso"
		},{
			"alimento": NumberInt(231),
			"ingrediente": "1 chorrito de nata de cocinar"
		},{
			"alimento": NumberInt(577),
			"ingrediente": "1 Lima en zumo"
		},{
			"alimento": NumberInt(556),
			"ingrediente": "Aceite de oliva virgen extra"
		},{
			"alimento": NumberInt(575),
			"ingrediente": "Cilantro"
		},{
			"alimento": NumberInt(140),
			"ingrediente": "1/2 tomate"
		},{
			"alimento": NumberInt(92),
			"ingrediente": "1 cebolla"
		}],
	"dieta": "VEGETARIANA",
	"preparacion":[
		"Lo primero que tenemos que hacer es lavar y abrir 2 aguacates y les sacamos la carne con ayuda de una cuchara. La reservamos en un bol.",
		"Agregamos al bol un yogur griego, dos cucharadas de crema de queso, un chorrito de nata de cocinar, el zumo de una lima y aceite de oliva virgen extra al gusto.",
		"Trituramos todos los ingredientes del bol hasta que consigamos una crema lisa y homogénea.",
		"Servimos con cilantro al gusto, medio tomate lavado y una cebolla lavada, pelada y picada por encima para decorar."
	]
})
