import conectarAoBanco from "../dbConfig.js"

//Conecta ao banco de dados utilizando a string de conexão fornecida
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

//Função assincrona para buscar todos os posts do banco de dados
export default async function getTodosPosts() {
    // 1. Estabelece uma conexão com o banco de dados "Imersão-instalike"
    const db = conexao.db("Imersão-instalike");
    // 2. Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    // 3. Executa uma consulta para encontrar todos os documentos (posts) na coleção
    //    e retorna um array com os resultados
        return colecao.find().toArray(); 
  }