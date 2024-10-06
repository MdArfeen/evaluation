const obj1 = { name: "John", age: 30 };
const obj2 = { age: 40, city: "New York" };

const mergeObject =Object.assign({},obj1,obj2)
console.log(mergeObject);
// Output: { name: "John", age: 40, city: "New York" }

