class Header{

    render(){
        //Creating elements 
        const frontPage=document.createElement("div")
        const navBar = document.createElement("div")
        const homeButton=document.createElement("a")
        const aboutButton=document.createElement("a")
        const galleryButton=document.createElement("a")
        const contactButton=document.createElement("a")

        //Creating classes and ids
        frontPage.classList.add("frontpage")
        navBar.classList.add("navbar")
        homeButton.classList.add("navbar__buttons")
        aboutButton.classList.add("navbar__buttons")
        galleryButton.classList.add("navbar__buttons")
        contactButton.classList.add("navbar__buttons")

        frontPage.id="home"
        navBar.id="nav-bar"


        //Appending elements
        frontPage.appendChild(navBar)
        navBar.appendChild(homeButton)
        navBar.appendChild(aboutButton)
        navBar.appendChild(galleryButton)
        navBar.appendChild(contactButton)

        //Adding text 
        homeButton.innerHTML=("HOME")
        aboutButton.innerHTML=("ABOUT")
        galleryButton.innerHTML=("GALLERY")
        contactButton.innerHTML=("CONTACT")

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