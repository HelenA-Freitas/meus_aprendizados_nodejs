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