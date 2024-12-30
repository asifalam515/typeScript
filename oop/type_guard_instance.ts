{
    // instance of guard :type guard:
    class Animal {
        name:string;
        species :string;
        constructor(name:string,species:string){
            this.name = name;
            this.species = species
        }
    makeSound (){
        console.log(` I am making sound!!`)
    }
    }
    class Dog extends Animal{
        constructor(name:string,species:string){
            super(name,species)
        }
        makeBark(){
            console.log(`I am barking `)
        }
    }
    class Cat extends Animal{
        constructor(name:string,species:string){
            super(name,species)
        }
        makeMew(){
            console.log(`Meu meu meu...... `)
        }
    }


// in order to handle it in a smart way we can use function here.........
const isDog = (animal :Animal):boolean=>{
return animal instanceof Dog
}
const isCat = (animal:Animal) :boolean=>{
return animal instanceof Cat
}
    // useing guard
    const getAnimal = (animal:Animal) =>{
        if(animal instanceof Dog){
            animal.makeBark()
        }
        else if( animal instanceof Cat){
            animal.makeMew()
        }
    }
    const dog = new Dog("german via","dog")
    const cat  = new Cat("cat vai ","cat")
    dog.makeBark()
    cat.makeMew()
}