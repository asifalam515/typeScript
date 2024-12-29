{
    // promise
    type Todo = {
        id:number;
        userId :number;
        title:string;
        completed:boolean
    }

    const getTodo  = async():Promise<Todo>=>{
       const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data =await res.json()
        return data
    }

getTodo()

    const createPromise = ():Promise<string> =>{
        return new Promise<string>((resolve,reject)=>{
            const data :string="someting"
            if(data){
                resolve(data)
            }
            else{
                reject("failed to load data")
            }
        })
    }
// calling create promise function
const showData =async()=>{
    const data = await createPromise()
    console.log(data)
}
showData()
}