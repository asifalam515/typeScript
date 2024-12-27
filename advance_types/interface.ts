{
    // interface
    type User =  {
        name:string;
        age:number;
        
    }
    type userwithRole1 = User & {role:string}
    interface User2{
        name:string;
        age:number
    }
    const user:User2={
        name:"asibul alam",
        age:34
    }
}