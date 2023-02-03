
// import {HeaderData,AboutData,ContactData,FooterData,GalleryData} from "../data/data.js"
const contactDataUrl = "https://raw.githubusercontent.com/vikasrangaswamy/JavaScriptt/master/02-Portfolio%20website/data/Contact.json"
class Contact{


    render(){

        //Creating elements
        const footer=document.createElement("div")
        const flexBox=document.createElement("div")
        const flexBoxText=document.createElement("div")
        const flexBoxTextP1 = document.createElement("h1")
        const flexBoxTextP2 = document.createElement("h1")
        const flexBoxButtons = document.createElement("div")
        const horizontalLine1= document.createElement("hr")
        const horizontalLine2= document.createElement("hr")
        const mailButton=document.createElement("button")
        const phoneButton=document.createElement("button")
        const GetInTouchButton=document.createElement("button")

        // Adding classes and Id's
        footer.classList.add("footer")
        footer.id="contact"
        flexBox.classList.add("flex-box")
        mailButton.id="mail"
        phoneButton.id="phone"
        GetInTouchButton.id="get-in-touch"
        
        fetch(contactDataUrl)
        .then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log("data" , response)
            flexBoxTextP1.innerHTML=response.contactText1
            flexBoxTextP2.innerHTML=response.contactText2

        })
        .catch((reject) => {
            console.log("reject", reject)
        })
        
        
        //Adding data
        fetch(contactDataUrl)
        .then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log("data" , response)
            mailButton.innerHTML=response.contactButtons[0].email
            phoneButton.innerHTML=response.contactButtons[1].phone
            GetInTouchButton.innerHTML=response.contactButtons[2].contactForm
        })
        .catch((reject) => {
            console.log("reject", reject)
        })

        
        //Appending the containers
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