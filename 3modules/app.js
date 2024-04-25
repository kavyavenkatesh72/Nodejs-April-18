import dotenv from 'dotenv'

dotenv.config({'path':'./spark.env'})

let port=process.env.PORT
let host=process.env.HOST
let key=process.env.KEY



console.log(port)
console.log(host)
console.log(key)
