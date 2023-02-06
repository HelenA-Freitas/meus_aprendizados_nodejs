//Promises => forma mais sofisticada de trabalhar com callback, elas podem ser aninhadas mas é aconselhável que evite fazer isso para não dar problemas (promise hell). O exemplo abaixo é somente para fins didáticos de treino na execução de uma promise.

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
            var yError = false;
            if(!yError){
                resolve({time: 2, to:"helen@gmail.com"}); //Promesa cumprida
            }else{
                reject("Fila cheia"); //Promessa não cumprida
            }
        }, 2000)
    });
}

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
