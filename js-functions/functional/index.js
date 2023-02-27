//First-Class Function

const sum = (a,b) => a + b;
const sub = (a,b) => a - b;
const mult = (a,b) => a * b;
const div = (a,b) => a / b;

    /* console.log(sum(20,10));
    console.log(sub(20,10));
    console.log(mult(20,10));
    console.log(div(20,10)); */

//Higher-Order Function + curring

function finalPrice(tax){
    return function(price){
        return price * (1 + tax);
    }
}

const nycFinalPrice = finalPrice(0.0875);

    /* console.log(nycFinalPrice(25.1));
    console.log(nycFinalPrice(21.7));
    console.log(nycFinalPrice(107.9)); */

//Map

const numbers = [1, 2, 3, 4, 5, 6];
const numbersDup = numbers.map(el => el * 2);

    //console.log(numbersDup);

const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Emma', score: 9.4},
    {name: 'Peter', score: 9.1}
]

const getScore = students.map(el => el.score)
                            .map(Math.ceil);

    //console.log(getScore);

//Filter

const mult2 = el => el % 2 === 0;
const response = numbers.filter(mult2);

    //console.log(response);

const greatStudent = student => student.score > 9;

    //console.log(students.filter(greatStudent));

//Reduce

const totalNumbers = numbers.reduce((total, el) => total + el);
console.log(totalNumbers);