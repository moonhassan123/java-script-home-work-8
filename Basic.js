const developer = [
    {
        status:'success',
        data: [
            {name:'mehedi', salary: 30000,position:'web Developer', address:{
                permanent: 'rangpur', present: 'dhaka'}},
        
            {name:'hasan', salary: 30000,position:'web Developer', address:{
                permanent: 'rangpur', present: 'dhaka'}},
        
            {name:'roni', salary: 30000,position:'web Developer', address:{
                permanent: 'rangpur', present: 'dhaka'}},
        
            {name:'moon', salary: 30000,position:'web Developer', address:{
                permanent: 'rangpur', present: 'dhaka'}}
        ]
    }
    
]

console.log(developer[0].data[2].address.present);