{
    // inheritance
    class Person {
        constructor(public name:string,public age :number,public address:string){

        }
        getSleep(numOfHours:number){
            console.log(`${this.name } sleeps for ${numOfHours} hours `)
        }
    }
    class Teacher extends Person{
        constructor( name:string, age :number, address:string, public designation :string){
            super(name,age,address)
        }
        
        takeclass(numOfClass:number){
            console.log(`${this.name} will take ${numOfClass} class`)
        }
    }
    class Student extends Person {
        constructor( name:string, age:number, address:string){
            super(name,age,address)
        }
   
    }
    const teacher = new Teacher("arif",54,"kumarkhali","assistant teacher")
    const rohit = new Student("rohit",21,"sadar")
    console.log(rohit.name)
    
}