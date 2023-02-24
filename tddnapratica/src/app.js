//arquivo de instância da aplicação

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({sucess: true});
})

app.get('/cor/:somebody', (req, res) => {
    let somebody = req.params.somebody;
    if(somebody == 'helen'){
        res.json({cor: 'azul'});
    }
});

module.exports = app;