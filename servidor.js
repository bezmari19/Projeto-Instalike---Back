import express from "express"
import routes from "./src/config/routes/postsRoutes.js";

const posts = [
  { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
  { id: 2, descricao: "Paisagem deslumbrante", imagem: "https://placecats.com/millie/300/150" },
  { id: 3, descricao: "Cachorro fazendo festa", imagem: "https://placecats.com/millie/300/150"},
];

const app = express();
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

