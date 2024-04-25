import express from 'express'
import path from 'path'
let app=express()

app.get('/',(req,res)=>{
    res.send(`<h1>Good Evening</h1>`)
})
app.get('/user',(req,res)=>{
    res.send(`<b>user data</b>`)
})
app.get('/contact',(req,res)=>{
    res.send(`<i>Employee details</i>`)
})
app.get('/symbol',(req,res)=>{
    res.send(`Details`)
})




app.listen(7070,'127.0.0.1',(err,data)=>{
    if(err) throw err
    console.log("server is running.....http://127.0.0.1:7070")
})