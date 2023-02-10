# Meus aprendizados Node Js
### Testes feitos no vscode para praticar os conhecimentos adquiridos em Node.js pelo curso da Udemy.

# API DE GAMES

### Este projeto foi feito para fixção dos conteúdos do curso de Node.js da Udemy com algumas modificações.

## Endpoints

### GET /games
Responsável por retornar lista de todos os games no banco de dados.
#### Parâmetros 
Nenhum
#### Respostas
##### OK! 200
Caso essa resposta seja retornada, você receberá a listagem de todos os jogos. Exemplo de resposta: 
```
[
    {
        "id": 23,
        "title": "Call of duty MW",
        "year": 2019,
        "price": 60
    },
    {
        "id": 65,
        "title": "Sea of thieves",
        "year": 2018,
        "price": 40
    },
    {
        "id": 2,
        "title": "Minecraft",
        "year": 2012,
        "price": 20
    }
]
```
#### Falha na autenticação! 401
Caso essa resposta seja retornada, ocorreu alguma falha durante o processo de autenticação da requisição. Motivos: Token inválido ou expirado.
Exemplo de resposta:
```
{
    "error": "Token inválido!"
}
```
