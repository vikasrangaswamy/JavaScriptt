//Problem
// Create a function that takes input as an object and returns a copy of the same.
// (Object has single level of nesting)

// Object with no nesting
let object1 = {
    key1:"value1",
    key2:"value2"
}
let object1Copy={}

 // Assign the original object
function returnObjectCopy(object){
    const objectCopy=object
    return objectCopy
}

// console.log(returnObjectCopy(object))

// Using for loop and then making a new copy of the object

function returnObject1Copy(object){
    
    for (var key in object){
        object1Copy[key]=object1[key]
    }
    return object1Copy
}

console.log("object 1 = " , returnObject1Copy(object1))
object1Copy.key1="changedValue"
console.log(" object 1 after changing = " , object1)
console.log(" copy of object 1 after changing = " ,object1Copy)


// Object with single level of nesting

let object2 = {
    key1:"value1",
    key2:{
        nestedKey1:"nestedValue1"
    }
}

let object2Copy={}

function returnObject2Copy(object){
    
    for (var key in object){
        object2Copy[key]=object2[key]
    }
    return object2Copy
}

console.log("object2 = " , returnObject2Copy(object2))
console.log("copy of object2 = ", object2Copy)

