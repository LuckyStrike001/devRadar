//Métodos HTTP
// get, post, put, delete //

// Tipos de parametros
// Query params: request.query (Filtros, ordenação, paginação...) - (get)
// Route params: request.params (Identificar um recurso na alteração ou remoção) - (put and delete)
// Body: request.body (Dados para criação  ou alteração  de um registro) - (post and put)

//MongoDb (Não relacional)

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-nycum.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
