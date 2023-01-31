class Footer{

    render(){
        //creating elemetns
        const footer = document.createElement("footer")
        const socilaLinks=document.createElement("div")
        const facebookLink = document.createElement("a")
        const twitterLink = document.createElement("a")
        const instagramLink = document.createElement("a")
        

        //creating classes
        socilaLinks.classList.add("social-links")
        //inner texts
        facebookLink.innerHTML="facebook"
        twitterLink.innerHTML="twitter"
        instagramLink.innerHTML="instagram"

        //appending elements
        footer.appendChild(socilaLinks)
        socilaLinks.appendChild(facebookLink)
        socilaLinks.appendChild(twitterLink)
        socilaLinks.appendChild(instagramLink)
        
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

export {Footer}