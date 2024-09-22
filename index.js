const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/api/:name", (req, res) => {
  res.json({
    message: `Hello ${req.params.name}, from server! MY_NAME => ${process.env.MY_NAME}`,
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on ${process.env.PORT || 3001}`);
});


/**
 * não sei pq o meu não está funcionando... eu criei o .env e coloquei o MY_NAME=okok e mesmo assim não funcionou
 * nem ficou o simbolo do .env na pasta do projeto 
 * 
 * descobri o erro... tinha que abrir em http://localhost:3001/api/aaa
 */