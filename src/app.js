//imports
const Express = require("express");
const cors = require('cors');
const professoresControllers = require("./controllers/professores-controllers")
const bd = require("./infrastructure/sqlite-bd");

//config
const app = Express();
const porta = 3000;

//middlewares
app.use(Express.json());
app.use(cors());

//rotas
professoresControllers(app, bd);

module.exports = {
  app: app,
  porta: porta
}