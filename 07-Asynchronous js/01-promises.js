// Promises

const myPromise = new Promise((resolve , reject)=>{
    if((Date.now() % 2) ==0){
        resolve("Promise fulfilled")
    }
    else{
        reject("Promise Broken")
    }

})

myPromise
.then((data)=>{
    console.log(data)
})
.catch((data)=>{
    console.log(data)
})