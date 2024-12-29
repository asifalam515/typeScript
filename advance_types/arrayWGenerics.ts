{
    const createArray = (params:string):string[]=>{
        return [params]
    }
  const createArrayWithGenerics = <T>(params:T):T[]=>{
return [params]
  }
    const res1 = createArray("bangladesh")
    const resWithGenerics = createArrayWithGenerics<number>(12)
}