export {};

let arrayOfAnything:(string|number|boolean)[];

let array1 = [1,"K",5,"h"];
let array2 = [true,"K",5,false];

arrayOfAnything = [...array2];
console.log(arrayOfAnything)
