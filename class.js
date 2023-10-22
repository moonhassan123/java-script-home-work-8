class student {
    name ;
    roll;
    address;
    constructor(setName,roll, address){
        this.name = setName;
        this.roll = roll
        this.address = address
    }
    school='monipuri hing school'
    attendance(){
        console.log('student should be attend in class before 10 am');
    }
    exam(){
        console.log('every student should attend in exam');
    }
}


const mehedi = new student('mehedi', 1, 'dinajpur')
const moon = new student('moon', 2, 'rangpur')

console.log(mehedi);
console.log(moon);