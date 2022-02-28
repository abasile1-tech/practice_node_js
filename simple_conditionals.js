var a;
var b;
var c;

const funList = [];

a = 2;
b = 5;
c = 7;

for (let i=0; i<10; i++) {
    let d = a * b + c;
    let stringStory = "";
    if (d%2!=0){
        stringStory=stringStory.concat(a,"*",b,"+",c,"=",d," which is odd.");
        funList.push(stringStory);
    } else {
        stringStory=stringStory.concat(a,"*",b,"+",c,"=",d," which is even.");
        funList.push(stringStory);
    }
    
    a += 1;
    b += 2;
    c += 2;
}

console.log("funList.length:", funList.length);

for (i=0; i<funList.length; i++) {
    console.log(funList[i]);
}
