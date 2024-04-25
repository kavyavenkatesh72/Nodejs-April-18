import bcrypt, { compare, compareSync } from 'bcrypt'

let user={
    "name":"kavya",
    "email":"lk@gmail.com",
    "password":"ILOVEINDIA",
    "cc":"4455 6677 8899 1122" 
}

console.log(user)

let salt=bcrypt.genSaltSync(10)
let password=bcrypt.hashSync(user.password,salt)
let cc=bcrypt.hashSync(user.cc,salt)
console.log(user.password)
console.log(password)
console.log(user.cc)
console.log(cc)

user={...user,'password':password,'cc':cc}

console.log(user)

console.log(user.password)
let flag=bcrypt.compareSync("abc",user.password) 
console.log(flag)

