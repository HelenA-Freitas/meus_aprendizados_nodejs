//Callback => função ligada a um método assíncrono e que só é chamada quando o método for concluído.

function enviarEmail(body, to, callback){
    setTimeout(() => {
        console.log(`
        Para: ${to}
        ------------------------
        ${body}
        ------------------------
        De: Helen Freitas`
    )
    var yError = true;
    if(yError){
        callback("OK!", 10, "2s", "O envio do e-mail falhou!")
    }else{
        callback("OK!", 10, "2s");
    }
    },2000)
}

console.log("Inicio de envio de e-mail!");
enviarEmail("Oi, seja bem vindo aos meus aprendizados!", "helen@gmail.com", (status, amount, time, error) => {
    console.log("Olá, isso é um callback!");
    if(error == undefined){
        console.log(`
        Status: ${status}
        -------------------------
        Contatos: ${amount}
        -------------------------
        Tempo de envio: ${time}`) 
    }else{
        console.log(`Ocorreu um erro: ${error}`)
    }

});