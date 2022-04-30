const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
// const corsOptions = {origin: "http://localhost:4200"}
app.use(cors());
// app.use((req, res, next) => {
//     //res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
//     });
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api", require("./routes/userRoutes.js"));
app.use("/api/piramide", require("./routes/piramideRoutes.js"));
app.use("/api/alimento", require("./routes/alimentoRoutes.js"));
app.use("/api/receta", require("./routes/recetaRoutes.js"));
app.use("/api/receta/simple", require("./routes/recetaSimpleRoutes.js"));

module.exports = app;