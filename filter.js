//  filter return an array with the values we
 
 const numbers = [2, 4 ,10 ,12 , 50 ,100 ,]
 const names = ['sony','rony', 'joy','mehedi','moon']
 const lessThan10 = numbers.filter(num => num <= 10)
 const greaterThan10 = numbers.filter(num => num >= 10)
 const equalChake = numbers.filter(num => num == '10')
//  const filterName =names.filter(name =>name == 'rony')

// console.log(equalChake);
// console.log(lessThan10);
// console.log(greaterThan10);
// console.log(filterName);



const shop = [
    { mobile: 'poco', price: 200, model:'poco x3 pro'},
    { mobile: 'Nokia', price: 1000, model:'111'},
    { mobile: 'sony', price: 500, model:'e44'},
    { mobile: 'vivo', price: 3000, model:'y30'},
]
 const gadgetThan500 = shop.filter(gadget => gadget.price > 500)
 const sony = shop.filter(gadget => gadget.mobile == 'sony')

console.log(sony);

 console.log(gadgetThan500);