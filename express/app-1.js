import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import dotenv from 'dotenv'
//create express app
let app=express()

//load env variable
dotenv.config({'path':'./config/dev.env'})
let port=process.env.PORT
let host=process.env.HOST_NAME

//http logger i.e morngon
app.use(morgan('tiny'))

//application root req
app.get('/',(req,res)=>{
    res.send("Welcome to Express app")
})
app.get("/about",(req,res)=>{
    res.send("About page")
})
app.get("/services",(req,res)=>{
    res.send("services Page")
})
app.get('/contact',(req,res)=>{
    res.send("Contact page")
})

app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(chalk.blueBright(`server Running...http://${host}:${port}`))
})

