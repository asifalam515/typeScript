{
    const createArray = (params:string):string[]=>{
        return [params]
    }
  const createArrayWithGenerics = <T>(params:T):T[]=>{
return [params]
  }
    const res1 = createArray("bangladesh")
    const resWithGenerics = createArrayWithGenerics<number>(12)
   
   type User ={
    user:number;
    name:string
   }
    const resWtihObj = createArrayWithGenerics<User>({
        user:1,
        name:"asif"
    })



    // ---------------------
    const createTupleWithGenerics =<T ,Q>(params1:T,params2:Q):[T,Q]=>{
        return [params1,params2]
    }
    const resTuple = createTupleWithGenerics<string,number>("Banladesh",1971)


    const addCourseToStudent =<T>(student:T)=>{
        const course = "next level "
        return {
            ...student,
            course
        }
    }
    const student1 = addCourseToStudent({name:"mr x",email:"x@gmail.com",devType:"next level web"})
}