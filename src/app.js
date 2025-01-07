import express from 'express';
import conectaNaDataBase from './config/debConnect.js';
import routes  from "./routes/index.js"

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
  console.log.error("erro de conexao", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
})

const app = express();
routes(app)

export default app;