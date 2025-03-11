const lodash = require('lodash')

const numbers = [1,2,3,3,7,4,5,6]

console.log("Split by 2: ", lodash.chunk(numbers, 2));

console.log("Difference between two arrays:" ,lodash.difference([1,2,3,4], [3,4,5,1]))
console.log("Unique items:", lodash.uniq(numbers))

const obj = {user : {name: "yuva", age: 23}}

console.log("Name is:", lodash.get(obj, "user.name"));
lodash.set(obj, "user.profeesion", "software developer");

console.log(obj);


const string= 'hello world'
console.log("Capitalized string:", lodash.capitalize("hello world"))
console.log("kebab-case string:", lodash.kebabCase(string))
