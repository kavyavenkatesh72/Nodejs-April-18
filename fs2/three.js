const fs=require('fs')

fs.readFile('emp.json','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)

    fs.writeFile('user.json','utf-8',(err,data)=>{
        if(err) throw err
console.log("data is inserted")
    })
    
})