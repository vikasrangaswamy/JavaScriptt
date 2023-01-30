class Timer{
    constructor(timer){
        this.time=60
        this.counter=0
    }
    
    updateTimer(){
        this.timerValue.innerHTML=`${this.time} seconds`;
        this.time=this.time-1;

        if (this.time < 0){
            this.time=zero;
        }
    }
   
   

    render(){
    const timerContainer = document.createElement("div")
    const timerHeading = document.createElement("h1")
    this.timerValue = document.createElement('p')
    const startButton = document.createElement("button")
    const resetButton = document.createElement("button")
    const stopButton=document.createElement("button")

    timerContainer.classList.add("timerContainer")      

    timerContainer.appendChild(timerHeading)
    timerContainer.appendChild(this.timerValue)
    timerContainer.appendChild(startButton)
    timerContainer.appendChild(resetButton)
    timerContainer.appendChild(stopButton)

    timerHeading.innerHTML="Timer"
    this.timerValue.innerHTML=`${this.time} seconds`


     //Start button 
     startButton.innerHTML="start"
     startButton.onclick=setInterval(this.counter = this.updateTimer.bind(this),1000)
 
     // stop button 
     stopButton.innerHTML="stop"
     stopButton.onclick=clearInterval(this.counter)

     resetButton.innerHTML="reset"
     resetButton.onclick=clearInterval(this.counter)
     
    return timerContainer

    }

    mount(element){
        if(element){
            element.appendChild(this.render())
            return
        }

        document.body.appendChild(this.render())
        return

    }

}

export {Timer}