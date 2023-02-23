const express = require('express');
const { Socket } = require('socket.io');
const app = express();
const http = require("http").createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {

    socket.on('disconnect', () => {
        console.log('X desconectou: ' + socket.id);
    });

    socket.on('welcome', (data) => {
        console.log('EXECUTANDO EVENTO DE BOAS VINDAS');
        console.log(data);
    });

    socket.on('word', (data) => {
        console.log(data);
        socket.emit('result', data + ' - EMPRESA X');
    });
})

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

http.listen(3000,() =>{
    console.log('APP RODANDO!');
});