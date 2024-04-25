const fs=require('fs')

fs.readFile('user.json','utf-8',(err,data)=>{
    if(err) throw err
    let users=(JSON.parse(data))




    let Male_emp=users.filter((user)=>{
return user.gender==="Male"
    })
       console.log(Male_emp) 
       console.log(Male_emp.length)

    
    

    
})

