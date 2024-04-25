const http=require("http");
const server=http.createServer((req,res)=>{
    res.end(`<h1>welcome to prostack<h1>`)
});

server.listen(7000,(err)=>{
    if(err) throw err
    console.log("server is running on port:7000")
});