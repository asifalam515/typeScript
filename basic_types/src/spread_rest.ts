{
// spreasd operator 
const bro1 :string[]  =["Mir","sakib","rakib"]

const bro2:string[] = ["najmul","rahat"]
bro1.push(...bro2) 


const mentors = {
    typescript:"mezba",
    redux:"Mir",
    dbms:"Mizan"
}
const mentors2 = {
    prisma:"firoz",
    next:"tanmoy",
    cloud:"nahid"
}
const mentorList = {...mentors,...mentors2}
// rest operator
const greetFriends = (...friends:string[])=>{
    friends.forEach((frn:string)=>{
        console.log(`Hello ${frn}`)
    })
}

greetFriends('abul','kabul','babul','sabul')

}