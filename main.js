import _ from "underscore";
import router from "./src/routes/index.js";
import db from './src/db/db_connection.js';
import express from 'express';
import config from './config.js'

const app = express()
const port = config.SERVER_PORT || 3000;

app.use(express.json())
app.use("/", router);

app.get("/", function (req, res) {
  res.send("<h1>Api en construcción</h1>");
});

app.use(function (req, res) {
  res.status(404);
  res.send("La ruta a la que intentás acceder o el recurso que solicitas no existe.");
});

db.createDB()

const server = app.listen(port, () => {
  console.log(`Server started on: http://localhost:${server.address().port}`);
});



