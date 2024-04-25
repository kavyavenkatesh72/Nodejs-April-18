const fs =require('fs')

fs.readFile('emp.json','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
    console.log(typeof data)
    let users=(JSON.parse(data))
    console.log(users)
    console.log(typeof users)

for(user of users){
    console.log(user.name)
}
})