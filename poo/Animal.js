/* => Herança: temos classe mãe e classe filha, a filha irá herdar todas as caracteristicas da mãe.
 */

class Animal{
    constructor(name, years, price){
        this.name = name;
        this.years = years;
        this.price = price;
    }

    CheckStock(){
        return 10;
    }

    AnotherMetod(){
        console.log("Esse método faz parte da classe mãe");
    }
}

class Dog extends Animal{
    Latir(){
        console.log("AU AU!");
    }

    CheckStock(){
        console.log("Na loja temos 24 cachorros");
    }

    AnotherMetod(){
        super.AnotherMetod();
        console.log("Aqui temos mais funcionalidades");
    }
}

class Duck extends Animal{
    constructor(name, years, price, race){
        super(name, years, price);
        this.race = race;
    }

}

var dog = new Dog("Thor", 2, 250);

dog.CheckStock();
dog.Latir();
dog.AnotherMetod();
