const numbers = [2 , 3 , 4 , 5 , 6 , 10 , 12 , 15 , 20]
console.log(numbers.reduce((total, value) => total  + value , 0));

let total = 0;
// const total = 10
// total = total + 2;
for(const num of numbers){
    // let total = 0;
     total = total + num;
    console.log(total);
}