var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,
    configurable:false,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);
person.name = "Lucy";
console.log(person.name);
delete person.name;
console.log(person.name);