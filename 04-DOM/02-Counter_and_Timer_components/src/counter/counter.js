class Counter{
    constructor(count){
        this.count=0;
    }
     // increment and decrement functions
    incrementCount(){
        this.count=this.count+1
        this.updateCounter()
    }
    decrementCount(){
        this.count=this.count-1
        this.updateCounter()
    }

    updateCounter(){
        // document.getElementById("counterValue").innerHTML=`count : ${this.count}`
        this.counterValue.innerHTML=`count : ${this.count}`
    }

    render(){
        //Creating elements
    const counterContainer = document.createElement("div")
    const counterHeading= document.createElement("h1")
    this.counterValue = document.createElement("p")
    const incrementButton = document.createElement("button")
    const decrementButton = document.createElement("button")

    //Creating class names
    counterContainer.classList.add("counterContainer")
    this.counterValue.id="counterValue"

    //appending elements and text
    counterContainer.appendChild(counterHeading)
    counterContainer.appendChild(this.counterValue)
    counterHeading.innerText="Counter"
    this.counterValue.innerHTML=`count : ${this.count}`
    counterContainer.appendChild(incrementButton)
    counterContainer.appendChild(decrementButton)
    incrementButton.innerText="+"
    decrementButton.innerHTML="-"

    incrementButton.onclick=this.incrementCount.bind(this)
    decrementButton.onclick=this.decrementCount.bind(this)
    return counterContainer;
}
    
    mount(element){
        if(element){
            element.appendChild(this.render());
            return
        }

        document.body.appendChild(this.render())
        return

}

}

export {Counter};

    