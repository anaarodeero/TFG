db.getCollection('recetas').aggregate([
{
   $lookup: {
       from: 'alimentos',
       localField: 'ingredientes.alimento',
       foreignField: "idAlimento",
       as: "union"
   }
}, {
    $match: {
        $and: [
            {
                "categoria": "PESCADO"
            },
            {
                "union.categoria": "VERDURAS"
            }
        ]
    }
},{ 
    $project: { 
        "union": 0, 
    }
}])