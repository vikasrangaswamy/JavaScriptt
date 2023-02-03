// import {HeaderData,AboutData,ContactData,FooterData,GalleryData} from "../data/data.js"
const footerDataUrl= "https://raw.githubusercontent.com/vikasrangaswamy/JavaScriptt/master/02-Portfolio%20website/data/Footer.json"
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
        fetch(footerDataUrl)
        .then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log("data" , response)
            facebookLink.innerHTML=response.footerIcons[0].name
            twitterLink.innerHTML=response.footerIcons[1].name
            instagramLink.innerHTML=response.footerIcons[2]

        })
        .catch((reject) => {
            console.log("reject", reject)
        })
        .name

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