const http=require('http')
let server=http.createServer((req,res)=>{
    res.end(`<b>Good AFternoon</b>`)
});

server.listen(8080,(err)=>{
    if(err) throw err
    console.log("server is running on port:8080")
})