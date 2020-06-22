import createApp from "./server/app.js";
import _ from "underscore";
import router from "./routes/index.js";

const app = createApp();
const port = process.env.PORT || 3000;
app.use("/", router);

app.get("/", function (req, res) {
  res.send("<h1>Api en construcción</h1>");
});

// Error para rutas inexistentes
app.use(function (req, res) {
  res.status(404);
  res.send("La ruta a la que intentás acceder o el recurso que solicitas no existe.");
});

const server = app.listen(port, () => {
  console.log(`Server started on: http://localhost:${server.address().port}`);
});

// import array from './query_test.js'

// console.log(array)
