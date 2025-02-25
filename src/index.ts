export {}
interface Enterer{
  name: string,
  age: number,
  above18: ()=>boolean,
  allowEnter:()=>boolean
}

let user:Enterer;
const EnterCheck = (name:string,age:number):Enterer=>{
   user = {
     name:name,
     age:age,
     above18:()=>{
       return age>18
     },
     allowEnter:()=>{
       return user.above18();
     }
   }
   
   return {name:user.name,age:user.age,above18:user.above18,allowEnter:user.allowEnter}
}

const {name,age,above18,allowEnter} = EnterCheck("Kyaw Thiha",11);

console.log("above18:",above18())
console.log("allowEnter:",allowEnter())