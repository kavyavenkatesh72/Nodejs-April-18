import fs from 'fs'

var data=fs.readFileSync('data.txt' ,'utf-8')
console.log(data)

fs.writeFileSync('emp.txt',data)
console.log("data is written succesfully")