// const student = {
//     name:'mehedi',
//     age : 22
//  }
// // console.log(2 , '2');
// console.log(student);
// const dataStringfy = JSON.stringify(student)
// console.log(dataStringfy);
// console.log(JSON.parse(dataStringfy));



fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then(datas => {console.log(datas)
    for (const data of datas.name) {
      console.log('person name', data.name);
      console.log('company name' ,data.company.name);
      // console.log(data.name);
    }
  });