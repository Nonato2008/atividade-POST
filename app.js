// ATIVIDADE 2

const express = require('express');
const app =  express();
const PORT = 8081;

app.use(express.json());

app.post("/soma", (req,res)=>{
    try {
        const {soma:{numUM, numDOIS, numTRES}} = req.body;

        if(isNaN(numUM, numDOIS, numTRES) || numUM == "undefined" || numDOIS=="undefined" || numTRES == "undefined"){
            return res.status(400).send(`Campos obrigatórios não preenchidos!`)
        }

        if(numUM == "" || numDOIS == "" || numTRES == ""){
            return res.status(400).send(`Campos obrigatórios não preenchidos!`)
        }
        
        let resultado = numUM + numDOIS + numTRES
        
        console.log(`O resultado da sua conta é ${resultado}`);

        res.status(201).json({ message:'Conta realizada com sucesso'})

    } catch (error) {
        console.error("Erro capturado", error);
        res.status(500).json("Erro interno no servidor!")
        
    }
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})