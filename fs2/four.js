const fs=require('fs')
fs.readFile("emp.json",'utf-8',(err,data)=>{
    if(err) throw err
    console.log(typeof data)
   /* console.log(data)
    let emp=(JSON.parse(data))
    console.log(emp)
    console.log(emp.Name)*/
    console.log(JSON.parse(data))//we cannot access the data in string format so,we have to convert the data in object format
    console.log(data)
    console.log(data.Name)
})