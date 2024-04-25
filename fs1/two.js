import fs from 'fs'
var data=fs.readFile('data.txt','utf-8',(err,data)=>{
    if(err) throw error
    {
        console.log(data)
    }
})