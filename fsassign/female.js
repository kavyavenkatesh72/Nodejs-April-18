const fs=require('fs')

fs.readFile('user.json','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
    let emps=(JSON.parse(data))

    let Female_emp=emps.filter((emp)=>{
        return emp.gender==="Female"
    })
    let Female_emp_str=(JSON.stringify(Female_emp))//The data should be inserted in the form of string not in the form of object

    fs.writeFile('female.json',Female_emp_str,(err,data)=>{
        if(err) throw err
        console.log("data Written Successfully")
    })
})