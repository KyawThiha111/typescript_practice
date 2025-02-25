export {};

let user: {
    name: string,
    age: number
}

const creatUser = (name:string,age:number):{name:String,age:number}=>{
    user = {
    name:name,
    age:age
  }
  console.log(user.name,user.age);
   return {name:user.name,age:user.age} 
}

 const {name,age} =creatUser("Jackson",31);
 console.log(name,age)

