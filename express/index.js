const express = require("express"); //importando
const app = express(); //iniciando

app.get("/",function(req,res){
    res.send("Bem vindo!");
});

app.get("/canal/youtube",function(req,res){
    res.send("Bem vindo ao canal!");
});

app.get("/blog",function(req,res){
    res.send("Bem vindo ao blog!");
});

app.get("/:nome",function(req,res){
    var nome = req.params.nome;
    res.send("Olá, " + nome);
});

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
});
