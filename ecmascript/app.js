//JSONs ENCURTADOS E OPERADOR SPREAD

/*var empresa = {
    nome: "IPQ",
    email: "ipq@gmail.com",
    cidade: "Salvador-BA",
    site: "www.ipqtecnologia.com.br"
}

var user = {
    nomeUsuario: "Helen",
    idade: 19,
    ...empresa
}

console.log(empresa);
console.log(user);*/

//DESESTRUTURAÇÃO

/*var {idade} = user;
console.log(idade);*/

//ARROW FUNCTION

//var mult2 = a => console.log(a*2);

//FIND E TEMPLATE LITERALS

var helen = {
    nome: "Helen Freitas",
    idade: 19
}

var lucas = {
    nome: "Lucas Martins",
    idade: 22
}

var igor = {
    nome: "Igor Lima",
    idade:30
}

var users = [helen, lucas, igor];
var usuario = users.find(user => user.nome === "Helen Freitas");

console.log(usuario);
console.log(`Olá, meu nome é ${helen.nome} e eu tenho ${helen.idade} anos.`)