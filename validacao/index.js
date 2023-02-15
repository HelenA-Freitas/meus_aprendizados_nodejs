const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
}));

app.use(flash());


app.get("/", (req,res) => {
    res.render("index");
});

app.post("/form", (req, res) => {
    const {email = false, name = false, points = false} = req.body;

    let emailError = false;
    let pointError = false;
    let nameError = false;

    if(!email || email == " "){
        emailError = "O e-mail não pode ser vazio!"
    }
    
    if(!points || points < 20){
        pointError = "Você não pode ter menos que 20 pontos!"
    }
    
    if(!name || name == " "){
        nameError = "O nome não pode ser vazio!"
    }

    if(emailError || pointError || nameError){
        res.redirect('/');
    }else{
        res.send('Funcionando...');
    }

    res.send(email)
});

app.listen(5678, (req,res) => {
    console.log("Servidor rodando!");
});