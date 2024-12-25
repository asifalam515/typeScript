{
    // type alias 
    type Student={
        name:string;
        age:number;
        gender:string;
        contactNo?:string;
        address:string;

    }
    const student1 :Student  = {
        name:"sakib ",
        age:12,
        gender:'male',
        contactNo:"012341234",
        address:"Dhaka"
    }

    const student2:Student ={
        name:"tamim ",
        age:23,
        gender:'male',
        address:"chittagong"
    }
    const student3:Student ={
        name:"mushfiq ",
        age:37,
        gender:'male',
        address:"bagura"
    }

    type Add =(num1:number,num2:number)=>number
    const add :Add= (num1,num2)=>num1+num2
}