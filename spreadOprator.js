const maxValue = Math.max(20, 30, 40 ,100);
// console.log(maxValue);

const numbers = [10 ,20 , 30 , 40 , 50 ,60]
const maxNumdersInArray =Math.max(...numbers)
// console.log(...numbers);
// console.log(maxNumdersInArray);


const a = 30 ;
const b = a;
console.log(b);



const numbers2 = [...numbers];
numbers.push(100)
numbers.push(200)
numbers.push(300)
console.log('orginal',numbers);
console.log('duplecate',numbers2);

