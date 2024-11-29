import getTodosPosts from "../models/postsModels.js";

export async function listarPosts (req, res) {
    // 4. Chama a função getTodosPosts() de forma assíncrona para obter todos os posts
    const posts = await getTodosPosts();
    // 5. Envia uma resposta HTTP com status 200 (sucesso) e os posts no formato JSON
    res.status(200).json(posts);
  }

  export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Ops, não deu certo! Tente outra vez."})
    }
  }