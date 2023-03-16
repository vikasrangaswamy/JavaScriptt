"use strict";
console.log("TypeScript");
let age = 20;
let myFunction = (params) => {
    console.log("myFunction", params);
};
let arrayFunction = (param) => {
    console.log("parameters passed = ", param);
    let numberArray;
    let alphaNumericArray;
    numberArray = [1, 2, 3, 4, 5, 6];
    console.log("number array : ", numberArray);
    alphaNumericArray = [1, "vikas"];
    console.log("alpha numeric array : ", alphaNumericArray);
};
arrayFunction("no parameter");
//# sourceMappingURL=index.js.map