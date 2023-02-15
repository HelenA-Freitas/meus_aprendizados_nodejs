const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(cookieParser('testPassword'));
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));

app.use(flash());


app.get("/", (req,res) => {
    let emailError = req.flash('emailError');
    let pointError = req.flash('pointError');
    let nameError = req.flash('nameError');

    let email = req.flash('email');
    let point = req.flash('point');
    let name = req.flash('name');

    emailError = (!emailError || emailError.length == 0) ? undefined : emailError;
    pointError = (!pointError || pointError.length == 0) ? undefined : pointError;
    nameError = (!nameError || nameError.length == 0) ? undefined : nameError;

    email = (!email || email.length == 0) ?'' : email;
    point = (!point || point.length == 0) ?'' : point;
    name = (!name || name.length == 0) ?'' : name;

    res.render("index", {emailError, nameError, pointError, email, name, point});
});

app.post("/form", (req, res) => {
    const {email = false, name = false, point = false} = req.body;

    let emailError;
    let pointError;
    let nameError;

    if(!email || email == " "){
        emailError = "O e-mail não pode ser vazio!"
    }
    
    if(!point || point < 20){
        pointError = "Você não pode ter menos que 20 pontos!"
    }
    
    if(!name || name == " "){
        nameError = "O nome não pode ser vazio!"
    }

    if(emailError || pointError || nameError){
        req.flash('emailError', emailError);
        req.flash('pointError', pointError);
        req.flash('nameError', nameError);

        req.flash('email', email);
        req.flash('point', point);
        req.flash('name', name);

        res.redirect('/');
    }else{
        res.send('Funcionando...');
    }

    res.send(email)
});

app.listen(5678, (req,res) => {
    console.log("Servidor rodando!");
});