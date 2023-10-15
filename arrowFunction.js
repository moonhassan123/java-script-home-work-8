//  function declaration

 function add() {
    // const total = a + b ;
    // return total;
}
add();

// functiom expresstion

const add1 = function add1(a , b) {
    const total = a + b ;
    return total;
}

// another step

const add3 = function add3(a , b){
    return a + b ;

}
// another 

const add4 = function (a , b){
    return a + b;

}
// arrow function
// 1. no need to use retund key work when i work in a single line 
const add5 =(a, b) => a + b;
// const add6 =(a, b, c, d,) => {a + b + c + d};
const value = add5(2 , 3)
console.log(value);


const add7 =() => {
const a = 20;
const b = 30;
const total = a + b;
const avrg = total / 2;
return avrg;
};
const avrgvalue = add7();
// console.log(avrgvalue);


const multiply =(a , b) =>a*b;
console.log('multiply',multiply(2 , 4));
