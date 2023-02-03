import {HeaderData,AboutData,ContactData,FooterData,GalleryData} from "../data/data.js"
const headerDataUrl ="https://raw.githubusercontent.com/vikasrangaswamy/JavaScriptt/master/02-Portfolio%20website/data/Header.json"
const aboutDataUrl = "https://raw.githubusercontent.com/vikasrangaswamy/JavaScriptt/master/02-Portfolio%20website/data/About.json"
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
        fetch(headerDataUrl)
        .then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log("data" , response)
            homeButton.innerHTML=response.navBar[0].title
            aboutButton.innerHTML=response.navBar[1].title
            galleryButton.innerHTML=response.navBar[2].title
            contactButton.innerHTML=response.navBar[3].title
        })
        .catch((reject) => {
            console.log("reject", reject)
        })
       
        fetch(aboutDataUrl)
        .then((response)=>{
            return response.json()
        }).then((response)=>{
            scrollingText1.innerHTML=response.bannerHeading
            scrollingText2.innerHTML=response.bannerHeading
            scrollingText3.innerHTML=response.bannerHeading
            scrollingText4.innerHTML=response.bannerHeading
            scrollingText5.innerHTML=response.bannerHeading
            scrollingText6.innerHTML=response.bannerHeading
            scrollingText7.innerHTML=response.bannerHeading
        })
        .catch((reject) => {
            console.log("reject", reject)
        })
        


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