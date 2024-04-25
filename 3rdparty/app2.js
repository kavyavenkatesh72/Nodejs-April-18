import bcrypt from 'bcrypt'

let user={
    "name":"Lashika",
    "mail":"ls@gmail.com",
    "password":"ILOVEMYMOM"
}

console.log(user)

let salt=bcrypt.genSaltSync(10)
let password=bcrypt.hashSync(user.password,salt)
console.log(user.password)
console.log(password)

user={...user,'password':password}
console.log(user)