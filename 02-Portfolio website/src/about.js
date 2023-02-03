// import {HeaderData,AboutData,ContactData,FooterData,GalleryData} from "../data/data.js"
const url1 = "https://raw.githubusercontent.com/vikasrangaswamy/JavaScriptt/master/02-Portfolio%20website/data/About.json" 
const url2 = "https://raw.githubusercontent.com/vikasrangaswamy/JavaScriptt/master/02-Portfolio%20website/data/Gallery.json" 


class About{


    render(){
        
        //Creating elements
        const about=document.createElement("div")
        const aboutHeading=document.createElement("h2")
        const horizontalLine1=document.createElement("hr")
        const horizontalLine2=document.createElement("hr")
        const aboutContent=document.createElement("p")

        //creating elements
        const galleryHeading = document.createElement("h2")
        
        const flexContainer1=document.createElement("div")
        const adventureHtml=document.createElement("a")
        const friendsHtml=document.createElement("a")
        const ridingHtml=document.createElement("a")
        const boxAdventure=document.createElement("div")
        const boxFriends=document.createElement("div")
        const boxRiding=document.createElement("div")

        const flexContainer2=document.createElement("div")
        const travelHtml=document.createElement("a")
        const sportsHtml=document.createElement("a")
        const academicHtml=document.createElement("a")
        const boxTravel=document.createElement("div")
        const boxSports=document.createElement("div")
        const boxAcademic=document.createElement("div")

        //Creating class names
        about.classList.add("about")
        about.id="about"

        
        //creating class names
        galleryHeading.id="gallery"
        flexContainer1.classList.add("flex-container1")
        boxAdventure.classList.add("box")
        boxAdventure.classList.add("adventure")
        boxFriends.classList.add("box")
        boxFriends.classList.add("friends")
        boxRiding.classList.add("box")
        boxRiding.classList.add("riding")

        flexContainer2.classList.add("flex-container2")
        boxTravel.classList.add("box")
        boxTravel.classList.add("travel")
        boxSports.classList.add("box")
        boxSports.classList.add("sports")
        boxAcademic.classList.add("box")
        boxAcademic.classList.add("academic")
        
        //appending elements
        about.appendChild(aboutHeading)
        about.appendChild(horizontalLine1)
        about.appendChild(aboutContent)
        

        //appending child
        
        about.appendChild(galleryHeading)
        about.appendChild(horizontalLine2)
        about.appendChild(flexContainer1)
        about.appendChild(flexContainer2)
        flexContainer1.appendChild(adventureHtml)
        adventureHtml.appendChild(boxAdventure)
        flexContainer1.appendChild(friendsHtml)
        friendsHtml.appendChild(boxFriends)
        flexContainer1.appendChild(ridingHtml)
        ridingHtml.appendChild(boxRiding)

        flexContainer2.appendChild(travelHtml)
        travelHtml.appendChild(boxTravel)
        flexContainer2.appendChild(sportsHtml)
        sportsHtml.appendChild(boxSports)
        flexContainer2.appendChild(academicHtml)
        academicHtml.appendChild(boxAcademic)

        //Adding text
        fetch(url1)
        .then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log("data" , response)
            aboutHeading.innerHTML=response.aboutHeading
            aboutContent.innerHTML=response.aboutText

        })
        .catch((reject) => {
            console.log("reject", reject)
        })
        


        //Adding text
        fetch(url2)
        .then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log("data" , response)
            galleryHeading.innerHTML=response.galelryHeading

        })
        .catch((reject) => {
            console.log("reject", reject)
        })
        

        return about
    }

    mount(element){
        if(element){
            element.appendChild(this.render())
            return
        }
        document.body.appendChild(this.render())
    }
}

export {About}