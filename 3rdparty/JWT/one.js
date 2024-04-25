import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config({'path':'./dev.env'})
let skey = process.env.skey

let payload={
    'email':'abc@gmail.com',
    'password':'123'
}

let token=jwt.sign(payload,skey)
console.log(token)

let user_Payload=jwt.verify(token,skey)
console.log(user_Payload)
