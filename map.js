const numbers = [1, 2, 3, 4, 5, 6]
// const newNumbers = [1, 2, 3, 4, 5, 6]

function double(numbersArray){
    const newNumbers =[];
    for (const number of numbersArray) {
        const doubled = number * 2
        newNumbers.push(doubled)
    //     console.log(newNumbers);
    }
    return newNumbers;

}
const newArray =  double(numbers)
console.log('stored at newArray', newArray);

 
const add = (a , b) => a * 2

// map 

// const storedFromMap = numbers.map (num => num * 2)
// console.log( 'stored From Map', storedFromMap);


const storedFromMap = numbers.map (num => {
    return num + 2
})
// console.log('stored From Map', storedFromMap);


const names =['mehedi', 'rony', 'sony', 'moon']
names.map(name =>{
    if (name==='moon'){
        console.log(name + ' ' + 'hasan');
    }
    else{
        console.log(name + ' ' + 'khan shaheb');
    }
})



// more map

const shop = [
    { mobile: 'poco', price: 25000, model:'poco x3 pro'},
    { mobile: 'Nokia', price: 25000, model:'111'},
    { mobile: 'sony', price: 25000, model:'e44'},
    { mobile: 'vivo', price: 25000, model:'y30'},
]
 const storedmobiles = shop.map(gadget => gadget.model)
 const storedprice = shop.map(gadget => gadget.model)
 const storedmodels = shop.map(gadget =>gadget.model)
 console.log(storedmobiles);
 console.log(storedprice);
 console.log(storedmodels);