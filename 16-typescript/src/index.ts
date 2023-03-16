console.log("TypeScript")

let age : number = 20

let myFunction = (params: any)=>{
    console.log("myFunction" , params)
}

// myFunction("hello")

let arrayFunction = (param:any)=>{
    console.log("parameters passed : " , param)
    let numberArray :number[]
    let alphaNumericArray : [number,string]

    numberArray=[1,2,3,4,5,6]
    console.log("number array : " , numberArray)

    alphaNumericArray = [1,"vikas"];

    console.log("alpha numeric array : " , alphaNumericArray)
}

// arrayFunction("no parameter")

