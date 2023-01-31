class Header{

    render(){
        //Creating elements 
        const frontPage=document.createElement("div")
        const navBar = document.createElement("div")
        const homeButton=document.createElement("a")
        const aboutButton=document.createElement("a")
        const galleryButton=document.createElement("a")
        const contactButton=document.createElement("a")

        const scrollingTextContainer=document.createElement("div")
        const scrollingText1=document.createElement("h1")
        const scrollingText2=document.createElement("h1")
        const scrollingText3=document.createElement("h1")
        const scrollingText4=document.createElement("h1")
        const scrollingText5=document.createElement("h1")
        const scrollingText6=document.createElement("h1")
        const scrollingText7=document.createElement("h1")




        //Creating classes and ids
        frontPage.classList.add("frontpage")
        navBar.classList.add("navbar")
        homeButton.classList.add("navbar__buttons")
        aboutButton.classList.add("navbar__buttons")
        galleryButton.classList.add("navbar__buttons")
        contactButton.classList.add("navbar__buttons")

        scrollingTextContainer.classList.add("scrolling-text")
        scrollingTextContainer.classList.add("frontpage__text")

        frontPage.id="home"
        navBar.id="nav-bar"


        //Appending elements
        frontPage.appendChild(navBar)
        navBar.appendChild(homeButton)
        navBar.appendChild(aboutButton)
        navBar.appendChild(galleryButton)
        navBar.appendChild(contactButton)

        frontPage.appendChild(scrollingTextContainer)
        scrollingTextContainer.appendChild(scrollingText1)
        scrollingTextContainer.appendChild(scrollingText2)
        scrollingTextContainer.appendChild(scrollingText3)
        scrollingTextContainer.appendChild(scrollingText4)
        scrollingTextContainer.appendChild(scrollingText5)
        scrollingTextContainer.appendChild(scrollingText6)
        scrollingTextContainer.appendChild(scrollingText7)


        //Adding text 
        homeButton.innerHTML=("HOME")
        aboutButton.innerHTML=("ABOUT")
        galleryButton.innerHTML=("GALLERY")
        contactButton.innerHTML=("CONTACT")

        scrollingText1.innerHTML=("Vikas Rangaswamy - ")
        scrollingText2.innerHTML=("Vikas Rangaswamy - ")
        scrollingText3.innerHTML=("Vikas Rangaswamy - ")
        scrollingText4.innerHTML=("Vikas Rangaswamy - ")
        scrollingText5.innerHTML=("Vikas Rangaswamy - ")
        scrollingText6.innerHTML=("Vikas Rangaswamy - ")
        scrollingText7.innerHTML=("Vikas Rangaswamy - ")


        return frontPage
    }

    mount(element){
        if(element){
            element.appendChild(this.render())
            return
        }
        document.body.appendChild(this.render())
    }

}

export{Header}