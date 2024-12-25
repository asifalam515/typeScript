{
    
    // ?

    // ternary
const age :number = 73
if(age>=18){
console.log("You are adult")
} else{
    console.log("You are child")
}

// ternary operator:
const isAdult = age>=18?"adult age":"Young age"
// console.log(isAdult)


// nullish coalescing operator:
// decision making based on null / undefined  
// const isAuthenticated  = null
const isAuthenticated  = undefined
//if the variable is null /undefined it will the value "Guest"
const result1 = isAuthenticated??"Guest"

// if the value is there(except null or undefined) it will get it . if not i wil get Guest
const result2 = isAuthenticated?isAuthenticated:"Guest"
// console.log({result2})
//lets use it
type User = {
    name:string,
    address:{
        city:string,
        road:number,
        pernamentAddress?:string,
        
    }
}

const user :User = {
    name:"sakib",
    address:{
        city:"dhaka",
        road:2342
    }
}
const pernamentAddress = user.address?.pernamentAddress??"No Pernament address found"
console.log(pernamentAddress)
}