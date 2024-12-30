{
    // inheritance in typeScript 
    class Person{
         name:string;
         age:number;
         email:string;
        constructor(name:string,age:number,email:string){
            this.age = age;
            this.email = email;
            this.name  = name;
        }
        sayName (){
            console.log(`My namem is ${this.name}`)
        }
    }

    class Teacher extends Person{
        constructor(name:string,age:number,email:string){
            super(name,age,email)
        }
    }
    class Student extends Person {
        constructor(name:string,age:number,email:string){
            super(name,age,email)

        }
    }
}