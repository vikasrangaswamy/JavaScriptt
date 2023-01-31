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
        aboutHeading.innerHTML="ABOUT"
        aboutContent.innerHTML="I am an Associate Software Engineer Intern at Contentstack persuing my B.E degree at JSS Science and Technology University, Mysore. I am passoniate about sports, travel and adventures.I am particularly fond of Hockey and Cricket and spend most of my free time playing or watching these sports.My technical skills and passion for sports make me an asset to any team,and I am sure to be a valuable addition to an organization."


        //Adding text
        galleryHeading.innerHTML="GALLERY"

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