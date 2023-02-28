const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("express-flash");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const knex = require("knex");
const config = require('./knexfile');
const cookieParser = require('cookie-parser');
const database = knex(config);

const JWTSecret = "jkhfrekjjjjvbkjertg";

//app.set("view engine", "ejs");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser('gamesTestPassword'));
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));

app.use(flash());

function auth(req, res, next){
    const authToken = req.headers['authorization'];
    if(authToken){
        const bearer = authToken.split(' ');
        const token = bearer[1];
        jwt.verify(token, JWTSecret, (error, data) => {
            if(error){
                res.status(401);
                res.json({error: "Token inválido!"});
            }else{
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email};
                next();
            }
        })
    }else{
        res.status(401);
        res.json({error: "Token inválido!"});
    }
}

app.get("/games", auth, async (req, res) => {//endpoint = rota
    res.statusCode = 200;
    const response = await database('games').where('delete_at', null);
    res.json(response);
});

app.get("/game/:id", auth, (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);
        const game = db.games.find(g => g.id == id);
        const HATEOAS = [
            {
                href: "http://localhost:45678/game/"+id,
                method: "DELETE",
                rel: "delete_game"
            },
            {
                href: "http://localhost:45678/game/"+id,
                method: "PUT",
                rel: "edit_game"
            },
            {
                href: "http://localhost:45678/game/"+id,
                method: "GET",
                rel: "get_game"            
            },
            {
                href: "http://localhost:45678/games",
                method: "GET",
                rel: "get_all_games"
            }
        ]
        if (game == undefined) {
            res.sendStatus(404);
        } else {
            res.statusCode = 200
            res.json({game, _links: HATEOAS});
        }
    }
});

app.post("/game",auth, async (req, res) => {
    const { title, year, price } = req.body;

    let titleError;
    let yearError;
    let priceError;

    if(!title || title == " "){
        titleError = "O título não pode ser vazio!"
    }
    
    if(!year || year < 1960 || year > 2023){
        yearError = "Ano inválido!"
    }
    
    if(!price || price < 0){
        priceError = "O preço não pode ser nulo ou negativo!"
    }

    if(titleError || yearError || priceError){
        return res.status(400).json({titleError, yearError, priceError});

    }else{
        const response =  await database('games').insert({'title':title, 'year':year, 'price':price});
        //console.log(response);
        return res.sendStatus(200);
    }
})

app.delete("/game/:id", auth, async (req, res) => {
    //console.log('delete')
    if (isNaN(req.params.id)) {
        return res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);
        const response = await database('games').update('delete_at', database.fn.now()).where('id', id);
        return res.sendStatus(200);
    }
});

app.put("/game/:id", auth, async (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);
        const { title = false, year = false, price = false } = req.body;

        let titleError;
        let yearError;
        let priceError;
        
        if(!title || title == " "){
            titleError = "O título não pode ser vazio!"
        }
        
        if(!year || year < 1960 || year > 2023){
            yearError = "Ano inválido!"
        }
        
        if(!price || price < 0){
            priceError = "O preço não pode ser nulo ou negativo!"
        }
    
        if(titleError || yearError || priceError){
            return res.status(400).json({titleError, yearError, priceError});
        }else{
            const response = await database('games').update({title, year, price}).where('id', id);
            return res.sendStatus(200);
        }
        }
    })

app.post("/auth", async (req, res) => {

    const {email, password} = req.body;

    const user = await database('users').where({'email':email, 'password':password});

    if(user.length){
                jwt.sign({id: user.id, email: user.email}, JWTSecret, {expiresIn:'48h'},(error, token) => {
                    if(error){
                        res.status(400);
                        res.json({error: "Falha interna"});
                    }else{
                        res.status(200);
                        res.json({token: token});
                    }
                })                             
            }else{
        res.status(400);
        return res.json({error: "Credenciais inválidas!"});
    }
});



app.listen(45678, () => {
    console.log("API rodando!");
})