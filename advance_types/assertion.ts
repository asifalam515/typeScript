{
    // type assretion:
let x:any;
// it will allow me to assign any type of value as i declare it as any
x = "hello world";
// but let say now i know x is string type
(x as string).toUpperCase()

// we can do it for number also
x  =12;
(x as number).toFixed(2)

// 
const kgTogm = (value :string | number):string|number|undefined=>{
    if(typeof value ==="string"){
        const convertedValue = parseFloat(value)
        return (`convertedValue is ${convertedValue}`)
    }
    if(typeof value ==="number"){
        return value
    }

}
const result1 =  kgTogm(1000) as number
const result = kgTogm("10000") as string

}