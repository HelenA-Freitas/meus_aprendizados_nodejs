const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = {
    games: [
        {
            id: 23,
            title: "Call of duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: "Sea of thieves",
            year: 2018,
            price: 40
        },
        {
            id: 2,
            title: "Minecraft",
            year: 2012,
            price: 20
        }
    ],
    users: [
        {
            id: 1,
            name: "Helen de Freitas",
            email: "helen@gmail.com",
            password: 12345
        },
        {
            id: 20,
            name:"Matheus Ramos",
            email: "matheus@gmail.com",
            password: 67890
        }
    ]
}

app.get("/games", (req, res) => {//endpoint = rota
    res.statusCode = 200;
    res.json(db.games);
});

app.get("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);
        const game = db.games.find(g => g.id == id);
        if (game == undefined) {
            res.sendStatus(404);
        } else {
            res.statusCode = 200
            res.json(game);
        }
    }
});

app.post("/game", (req, res) => {
    const { title, year, price } = req.body;
    // console.log(req.body)
    db.games.push({
        id: 345,
        title,
        year,
        price
    });
    res.sendStatus(200)
})

app.delete("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);
        const index = db.games.findIndex(g => g.id == id);
        if (index == -1) {
            res.sendStatus(404);
        } else {
            db.games.splice(index, 1);
            res.sendStatus(200);
        }
    }
});

app.put("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);
        const game = db.games.find(g => g.id == id);

        if (!game) {
            res.sendStatus(404);
        } else {

            let { title = false, year = false, price = false } = req.body;
            if (title) {
                game.title = title;
            }
            if (price) {
                game.price = price;
            }
            if (year) {
                game.year = year;
            }

            res.sendStatus(200);

        }
    }
})

app.post("/auth", (req, res) => {
    let {email=false, password=false} = req.body;

    if(email){
        const user = db.users.find(u => u.email == email);

        if(user){
            if(user.password == password){
                res.status(200);
                res.json({token: ""});
            }else{
                res.status(401);
                res.json({err: "Credenciais inválidas!"});
            }
        }else{
            res.status(404);
            res.json({err: "O e-mail enviado não existe na base de dados!"});
        }
    }else{
        res.status(400);
        res.json({err: "O e-mail enviado é inválido!"});
    }
});

app.listen(45678, () => {
    console.log("API rodando!");
})