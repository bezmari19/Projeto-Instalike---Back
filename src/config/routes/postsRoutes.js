import express from "express";
import { listarPosts, postarNovoPost } from "../controllers/postsController.js";

 const routes = (app) => {
    // Permmite que o servidor interprete requisições com corpo no
    app.use(express.json());
    // Rota para buscar todos os posts
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost)
}

export default routes;