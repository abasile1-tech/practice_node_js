var a;
var b;
var c;

const funList = [];

a = 2;
b = 3;
c = 7;

for (let i=0; i<10; i++) {
    let d = a * b + c;
    let stringStory = "";
    stringStory=stringStory.concat(a,"*",b,"+",c,"=",d);
    funList.push(stringStory);
    a += 1;
    b += 2;
    c += 3;
}

console.log("funList.length:", funList.length);

for (i=0; i<funList.length; i++) {
    console.log(funList[i]);
}
