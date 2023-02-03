urll ="https://vikasrangaswamy.github.io/Contentstack/data/Card.json"

fetch(urll)
.then((response)=>{
    return response.json()
}).then((response)=>{
    console.log("response" , response)
    console.log("response-1" , response[0])
})
.catch((error)=>{
    console.log("error", error)
})