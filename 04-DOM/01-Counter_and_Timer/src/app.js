let count=0;

const createCounter=()=>{

    //Creating elements
    const counterContainer = document.createElement("div")
    const counterHeading= document.createElement("h1")
    const counterValue = document.createElement("p")
    const incrementButton = document.createElement("button")
    const decrementButton = document.createElement("button")

    //appending elements and text
    const root = document.getElementById('root')
    root.appendChild(counterContainer)
    counterContainer.appendChild(counterHeading)
    counterContainer.appendChild(counterValue)
    counterHeading.innerText="Counter"
    counterValue.innerHTML=`count : ${count}`
    counterContainer.appendChild(incrementButton)
    counterContainer.appendChild(decrementButton)
    incrementButton.innerText="+"
    decrementButton.innerHTML="-"
    
    // increment and decrement functions
    const incrementCount=()=>{
        count=count+1
        counterValue.innerHTML=`count : ${count}`
    }

    const decrementCount=()=>{
        count=count-1
        counterValue.innerText= `count : ${count}`
    }
    
    // Event handlers
    incrementButton.onclick=incrementCount
    decrementButton.onclick=decrementCount

}

// function call
createCounter();