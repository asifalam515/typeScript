{
type GenericArray<T> = Array<T>
    const rollNumbers :GenericArray<number>= [213,67,2,2,52]
    const mentors :GenericArray<string>= ["x","y","sakib","rakib"]
    const bollArray :GenericArray<boolean> = [true,false ,true]


    // generice array in array of object
    const user:GenericArray<{name:string,age?:number,role?:string}> = [
        {name:"asif",
            age:23,
        },
        {name:"mahub",
            age:25
        },
        {
            name:"najmul",
            role:"admin"
        }
    ]


    // tuple withe generics
    type GenericTuple <X,Y>=[X,Y]
     const men:GenericTuple<string,string>=["Mr x","Mrs Y"]  
   
     type User = {
        name:string,
        email:string
     }
    const userWitId :GenericTuple<number,User>=[
        1231,{
            name:"asif",
            email:"asif@gmail.com"
        }
    ]
}