"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user;
const creatUser = (name, age) => {
    user = {
        name: name,
        age: age
    };
    console.log(user.name, user.age);
    return { name: user.name, age: user.age };
};
const { name, age } = creatUser("Jackson", 31);
console.log(name, age);
