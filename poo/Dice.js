class Dice{
    constructor(faces){
        this.faces = faces;
    }
    
    Play(){
        console.log("Resultado do dado: " + this.GetRandomNum(1,this.faces));
    }

    GetRandomNum(min, max){
        min = Math.ceil(min); // retorna um inteiro maior ou igual a um número. ex.: 14.5 => 15
        max = Math.floor(max); // retorna o maior inteiro menor ou igual ao número. ex.: 100.25 => 100
        return Math.floor(Math.random()*(max - min + 1)) + min; //.random() retorna um número aleatório entre 0 e 1
    }
}

const d6 = new Dice(6);
d6.Play();
const d12 = new Dice(12);
d12.Play();
const d100 = new Dice(100);
d100.Play();