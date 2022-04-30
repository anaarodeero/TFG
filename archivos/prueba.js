var cursor = db.getCollection('alimentos').find({"idAlimento": {"$in": [245,223,646,645,230,647,556,547,571,252,140,289,254,183,648,240,4,244,649,650,651,215]}})

while (cursor.hasNext()) {
    var record = cursor.next();   
    print(record.idAlimento + "," + record.nombre)
}