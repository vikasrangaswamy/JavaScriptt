class Contact{


    render(){
        const footer=document.createElement("div")
        footer.classList.add("footer")
        footer.id="contact"
        const flexBox=document.createElement("div")
        const flexBoxText=document.createElement("div")
        flexBox.classList.add("flex-box")
        const flexBoxTextP1 = document.createElement("h1")
        const flexBoxTextP2 = document.createElement("h1")
        flexBoxTextP1.innerHTML="Let's get to know"
        flexBoxTextP2.innerHTML="Eachother"
        const flexBoxButtons = document.createElement("div")
        const horizontalLine1= document.createElement("hr")
        const horizontalLine2= document.createElement("hr")
        const mailButton=document.createElement("button")
        const phoneButton=document.createElement("button")
        const GetInTouchButton=document.createElement("button")
        mailButton.id="mail"
        phoneButton.id="phone"
        GetInTouchButton.id="get-in-touch"
        mailButton.innerHTML="vikas@gmail.com"
        phoneButton.innerHTML="+91 12345678"
        GetInTouchButton.innerHTML="Get in touch"

        footer.appendChild(flexBox)
        flexBox.appendChild(flexBoxText)
        flexBoxText.appendChild(flexBoxTextP1)
        flexBoxText.appendChild(flexBoxTextP2)
        flexBox.appendChild(flexBoxButtons)
        flexBoxButtons.appendChild(horizontalLine1)
        flexBoxButtons.appendChild(mailButton)
        flexBoxButtons.appendChild(phoneButton)
        flexBoxButtons.appendChild(GetInTouchButton)
        flexBoxButtons.appendChild(horizontalLine2)

        return footer

    }
    mount(element){
        if(element){
            element.appendChild(this.render())
            return
        }
        document.body.appendChild(this.render())
    }
}

export {Contact}