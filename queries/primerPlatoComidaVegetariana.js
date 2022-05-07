db.getCollection('recetas').find({
    $and:[
    {
        $or:[
            {
                "nombre" : {$regex : "ensalada", $options : "i"}
            },{
                "nombre" : {$regex : "crema", $options : "i"}
            },{
                "nombre" : {$regex : "sopa", $options : "i"}
            }
        ]
    },
    {
        $or:[
            {
                "categoria": "VERDURAS"
            },{
                "categoria": "LEGUMBRES"
            }
        ]
    },
    {
        $or:[
            {
                "dieta": "VEGETARIANA"
            },{
                "dieta": "VEGANA"
            }
        ]
    }
]})