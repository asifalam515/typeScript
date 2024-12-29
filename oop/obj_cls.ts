// class 
{
    class Animal  {
//    public     name:string;
//         species:string;
//         sound:string;
        // parameter properties

        constructor(public name:string,public species:string,public sound:string){
            // this.name = name
            // this.species= species
            // this.sound = sound
        }
        makeSound(){
            console.log(` the ${this.name} is calling you ${this.sound}`)
        }

    }
const dog = new Animal("German shepart","dog","ghew ghew ghew")
const pussyCart = new Animal("pussy","cat","meu meu")
pussyCart.makeSound()




// 
class Vehicle {
    constructor(public wheel:number,public roof:boolean,public price :number){

    }
    sayPrice(){
        console.log(`Price is ${this.price}. it has ${this.wheel} wheel`)
    }
}
const car = new Vehicle(4,true,4300000)
car.sayPrice()
}