var names = [];

names.push("Bob");

names.push("Sven","Robert","Hidalgo","John");

console.log(`The third name in the list is: ${names[2]}`);

console.log(`Here is the list of names before removing the third name: ${names}`);

names.splice(2,1);

console.log(`Here is the list of names after removing the third name: ${names}`);