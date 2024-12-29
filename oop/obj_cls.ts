// class 
{
    class Animal  {
        name:string;
        species:string;
        sound:string;
        constructor(name:string,species:string,sound:string){
            this.name = name
            this.species= species
            this.sound = sound
        }
        makeSound(){
            console.log(` the ${this.name} is calling you ${this.sound}`)
        }

    }
const dog = new Animal("German shepart","dog","ghew ghew ghew")
const pussyCart = new Animal("pussy","cat","meu meu")
pussyCart.makeSound()
}