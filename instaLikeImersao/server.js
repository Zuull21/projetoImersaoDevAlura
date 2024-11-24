import express from "express"

const posts = [
    {
        id: "1",
        descricao: "Teste1",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: "2",
        descricao: "Teste2",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: "3",
        descricao: "Teste3",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: "4",
        descricao: "Teste4",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: "5",
        descricao: "Teste5",
        imagem: "https://placecats.com/millie/300/150"
    },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Executando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts); 
});

function postPorId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    });
};

app.get("/posts/:id", (req, res) => {
    const index = postPorId(req.params.id)
    res.status(200).json(posts[index]); 
});

