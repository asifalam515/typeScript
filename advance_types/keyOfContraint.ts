{
    // generic constraint with key of
    type Vehicle = {
        bike:string;
        car:string;
        ship:string
    }
    type Owner2 = keyof Vehicle
    const person1:Owner2 = "car"
    const user = {
        name:'asibul alam',
        age :25,
        address:"kushtia"
    }
    
}