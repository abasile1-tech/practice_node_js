var namesS: string[] = [];

namesS.push("Bob");

namesS.push("Sven","Robert","Hidalgo","John");

console.log(`The third name in the list is: ${namesS[2]}`);

console.log(`Here is the list of namesS before removing the third name: ${namesS}`);

namesS.splice(2,1);

console.log(`Here is the list of namesS after removing the third name: ${namesS}`);