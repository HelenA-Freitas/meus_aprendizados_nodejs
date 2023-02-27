//DESAFIO - Curso: Fundamentos de JavaScript Funcional

function range(a, b, c = 1){
    const n1 = b === undefined ? 1 : a;
    const n2 = b === undefined ? a : b;
    const n3 = n1<= n2 ? Math.abs(c) : -Math.abs(c);

    const nums = [];
    for(let i = n1; n1<= n2 ? i<= n2 : i >= n2; i+=n3){
        nums.push(i);
    }
    console.log(nums);
}

range(5);
range(6,11);
range(10,19, 2);
range(6,2);
range(8,-3,4);