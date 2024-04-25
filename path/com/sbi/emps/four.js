import path from 'path'
import fs from 'fs'
let file_Name='C:\HTML\Nodejs-April-18\path\com\sbi\emps\emps.json'
fs.readFile(file_Name,'utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
})
