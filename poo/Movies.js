/* PROGRAMAÇÃO ORIENTADA A OBJETOS é um paradigma de programção, ou seja, um estilo de escrita de código com vantagens, como: códigos mais limpos e reutilizáveis.
=> Classificação: entidades semelhantes agrupadas com seus atributos (informações em comum) e métodos (ações que podem realizar); Classe: modelo. Objeto: realização da classe.
=> Abstração: habilidade para conseguir construir classe, são os aspectos essenciais de um contexto qualquer;
 */

class Movies{
    constructor(title, year, gen, director, time){ //Local para definir os atributos e instanciar (criar objetos)
        this.title = title;
        this.year = year;
        this.gen = gen;
        this.director = director
        this.actors = [];
        this.time = time;
    }

    Play(){
        console.log("Reproduzindo...");
    }

    Pause(){
        console.log("Pausado ||");
    }

    Advance(){
        console.log("Avançar >>");
    }

    Close(){
        console.log("Fechar X");
    }

    MovieFile(){
        console.log("Título: " + this.title);
        console.log("Ano de lançamento: " + this.year);
        console.log("Gênero: " + this.gen);
        this.Play();
    }
}


const avengers = new Movies("Vingadores 2", 2014, "Ação", "Fulano", "2h");
avengers.MovieFile();