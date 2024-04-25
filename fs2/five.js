const fs=require('fs')
fs.readFile("emp.json",'utf-8',(err,data)=>{
    if(err) throw err
    console.log(typeof data)
    console.log(data)
    let emp=(JSON.parse(data))
    console.log(emp)
    console.log(emp.Name)
})