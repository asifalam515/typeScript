{
    // interface
    type User =  {
        name:string;
        age:number;
        
    }
    interface User2{
        name:string;
        age:number
    }
    type UserwithRole1 = User & {role:string}
   interface UserwithRole2 extends User2 {
    role:string
   }
    const uesr1:UserwithRole1={
        name:"asif",
        age:25,
        role:"manager"
    }
    const uesr2:UserwithRole2={
        name:"arif",
        age:26,
        role:"manager"
    }
    const user:User2={
        name:"asibul alam",
        age:34
    }


    // interface declare on array:
    type Roll1 = number[]
    interface  Roll2 {
        [index:number] : number
    }
    const rollNumber1:Roll2 = [12,34,2,5]

    // interface declare for function 
    type Add1 = (num1:number,num2:number)=> number
    interface Add2 {
        (num1:number,num2:number):number
    }
    const add :Add2=(num1,num2)=>num1+num2
    
}