//É uma forma de escrever com promise, porém sem o then/catch e é mais utilizado quando ocorre o recebimento de dados. Uma maneira de escrever código assíncrono com estilo síncrono
/*
takeId().then((id) => {
    searchIdData(id).then((email) => {
        enviarEmail("Olá, bem vindo ao meus aprendizado!", email).then(({time, to}) => {
            console.log(`
            Time: ${time}
            ------------------------
            To: ${to}
            ------------------------
            ID: ${id}`);
            console.log("Promessa cumprida!");
        }).catch((error) => {
            console.log(`Desculpe, não consegui cumprir a promessa! ${error}`);
        })
    })
})

Abaixo temos outra forma de escrever esse mesmo código, só que com async/await
*/

function takeId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 1500)
    });
}

function searchIdData(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //lógica para consultar no banco de dados
            resolve("helen@gmail.com")
        },2000)
    });
}

function enviarEmail(body, to){
    return new Promise((resolve, reject) => {
        console.log("Iniciando envio de e-mail...");
        setTimeout(() => {
            var yError = true;
            if(!yError){
                resolve({time: 2, to:"helen@gmail.com"}); //Promesa cumprida
            }else{
                reject("Fila cheia"); //Promessa não cumprida
            }
        }, 2000)
    });
}

async function principal(){
    var id = await takeId();
    var email = await searchIdData(id);
    try{
        await enviarEmail("Olá, bem vindo ao meus aprendizado!", email);
        console.log("Email enviado com sucesso!");
    }catch(error){
        console.log(`Ocorreu um erro: ${error}`); //Faz o tratamento de exceções no async/await
    }
}

principal();