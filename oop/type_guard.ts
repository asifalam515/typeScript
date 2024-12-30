{
    // type guard:

    // type of  as type guard
    const add = (param1 :string|number ,param2:string|number):string|number|undefined=>{
        if(typeof param1 ==="number" && typeof param2==="number"){
            return param1 +param2
        }
        else{
            param1.toString() + param2.toString()
        }
    }
}