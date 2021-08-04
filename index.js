const express = require('express');

const server = express();


server.use(express.json());

const  perfil = ['joao', 'alicia', 'jonatas'];

// Retorna um Perfil por index

server.get('/perfil/:index',(req, res) =>{
    const {index} = req.params;

    return res.json(perfil[index]);
})

// retornar  o Perfil
server.get('/perfil', (req,res)=>{
    return res.json(perfil)
});

// Criar um novo Perfil
server.post('/perfil', (req, res) => {
    const {name} = req.body;
    perfil.push(name);

    return res.json(perfil);
});


// Atualizar um Perfil
server.put('/perfil/:index', (req, res) =>{
    const { index } = req.params;
    const { name } = req.body;

    perfil[index] = name;

    return res.json(perfil);
});


// Deletar um Perfil
server.delete('/perfil/:index', (req, res) =>{
    const {index} = req.params;

    perfil.splice(index, 1);
    return res.json( {message: "O Perfil foi deletado"});

});







server.listen(3000);

