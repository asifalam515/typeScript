{
    // polymorphism
    class Person{
        getSleep(){
            console.log(`i am sleeping for 8 hours per day....`)
        }
    }
    class Student extends Person{
        getSleep(){
            console.log(`i am sleeping for 7 hours per day....`)
        }
    }
    class Developer extends Person{
        getSleep(){
            console.log(`i am sleeping for 6 hours per day....`)
        }
    }
    const getSleepingHours = (param:Person)=>{
        param.getSleep()
    }
    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()
    getSleepingHours(person3)

    // another class
    class Shape{
        getArea():number{
            return 0 
        }
    }

    class Circle extends Shape{
    radius:number;
    constructor(radius:number){
        super()
        this.radius = radius
    }
        getArea(): number {
            return Math.PI*this.radius*this.radius
        }
    }
    class Rectangle extends Shape{
        l:number;
        w:number;
        constructor(l: number,w:number){
            super()
            this.l = l;
            this.w = w;
            
        }
        getArea(): number {
            return this.l*this.w
        }
    }
}