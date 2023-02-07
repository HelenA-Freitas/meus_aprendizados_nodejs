/* Com métodos estáticos podemos acessar uma função sem precisar instânciar a sua classe
*/

class Calculator{
    static Sum(a,b){
        console.log(a+b);
    }

    static Sub(a,b){
        console.log(a-b);
    }
}

Calculator.Sum(10,20);
Calculator.Sub(10,230);