// ATIVIDADE 2

const express = require('express');
const app =  express();
const PORT = 8081;

app.use(express.json());

app.post("/mensagem", (req,res)=>{
    try {
        const {nome,idade,time} = req.body;

        console.log(nome,idade,time);

        res.status(201).json({ message:'Usário criado com sucesso'})

    } catch (error) {
        console.error("Erro capturado", error);
        res.status(500).json("Erro interno no servidor!")
        
    }
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})