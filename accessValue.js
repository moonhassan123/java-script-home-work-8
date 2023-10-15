const student = [
    {name:'moon',age:44, role:'fakibaji'},
    {name:'monir',age:44, role:'fakibaji'},
    {name:'mehedi',age:44, role:'fakibaji'},
    {name:'joy',age:44, role:['fakibaji','ddijjijj',{Developer:{
        companyName:'cheat firm ',
        ManagingPerson:{
            CEO:'sopna ',
            director:'rohul',
            HR:'mehedi',
            CD:'monir'

        }
    }
}]},]
console.log(student[3].role[2].Developer.ManagingPerson.CD);


const Developer = {
    name:'mehedi',
    age:33,
    company:{
        companyName:'cheat firm company LTD',
        Address:'rangpur',
        CEO:'joy'


    }
}
console.log(Developer.company.CEO);