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
const kgTogm = (value :string | number)=>{
    if(typeof value ==="string"){
        const convertedValue = parseFloat(value)
        return convertedValue
    }
    if(typeof value ==="number"){
        return value
    }

}


}