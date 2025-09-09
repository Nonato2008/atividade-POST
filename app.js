// ATIVIDADE 1

const express = require('express');
const app =  express();
const PORT = 8081;

app.use(express.json());

app.post("/mensagem", (req,res)=>{
    try {
        const {nome, idade, time} = req.body;

        if(isNaN(idade) || nome == "undefined" || idade=="undefined" || time == "undefined" || !isNaN(nome, time)){
            return res.status(400).send(`Campos obrigatórios não preenchidos!`)
        }

        if(nome == "" || idade == "" || time == ""){
            return res.status(400).send(`Campos obrigatórios não preenchidos!`)
        }
        
        console.log(`Olá, ${nome}! Você tem ${idade} e torce para o ${time}`);

        res.status(201).json({ message:`Usuário criado com sucesso!`})

    } catch (error) {
        console.error("Erro capturado", error);
        res.status(500).json("Erro interno no servidor!")
        
    }
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})