db.getCollection('recetas').find({
    $and:[
    {
        $or:[
            {
                "nombre" : {$regex : "ensalada", $options : "i"}
            },{
                "nombre" : {$regex : "Crema", $options : "i"}
            },{
                "nombre" : {$regex : "Sopa", $options : "i"}
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
    }
]})