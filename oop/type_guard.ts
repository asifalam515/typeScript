{
    // type guard:
    type AlphaNumeric = string|number
    // type of  as type guard
    const add = (param1 :AlphaNumeric ,param2:AlphaNumeric):AlphaNumeric=>{
        if(typeof param1 ==="number" && typeof param2==="number"){
            return param1 +param2
        }
        else{
          return  param1.toString() + param2.toString()
        }
    }
const res1 = add("213","56")


// In Guard
type NormalUser = {
    name:string
}
type AdminUser = {
    name:string;
    role:"admin"
}
const getUser = (user:NormalUser |AdminUser)=>{
    if('role' in user){
        console.log(`My name is ${user.name } and  i am ${user.role}`)
        
    }
    else{
        console.log(`My name is ${user.name } `)
    }
}

const normalUser :NormalUser = {
    name:"noral user asif"
}
const adminUser:AdminUser = {
    name:"admin user eva",
    role:"admin"
}
const res = getUser(adminUser)
}