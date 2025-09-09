// ATIVIDADE 3

const express = require('express');
const app =  express();
const PORT = 8081;

app.use(express.json());

app.post("/login", (req,res)=>{
    try {
        const {usuário, senha} = req.body;

        if(!isNaN(usuário) || isNaN(senha) || usuário == "undefined" || senha=="undefined"){ //filtro de erro
            return res.status(400).send(`Campos obrigatórios não preenchidos!`)
        }

        if(usuário == "" || senha == ""){//filtro de erro
            return res.status(400).send(`Campos obrigatórios não preenchidos!`)
        }

        if(usuário != "estudante" || senha != parseInt(2025)){ //comparação da senha fornecida e da existente
            return res.status(400).send(`Senha ou Usuário incorreto!`)
        }
        
        console.log(`Usuário: ${usuário} | Senha: ${senha}`); //usuário e senha corretamente fornecidas

        res.status(201).json({ message:'Acesso concedido!'}) //mensagem de sucesso

    } catch (error) {
        console.error("Erro capturado", error);
        res.status(500).json("Erro interno do servidor!")
        
    }
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
