class About{


    render(){
        //Creating elements
        const about=document.createElement("div")
        const aboutHeading=document.createElement("h2")
        const horizontalLine=document.createElement("hr")
        const aboutContent=document.createElement("p")

        //Creating class names
        about.classList.add("about")
        about.id=about
        
        //appending elements
        about.appendChild(aboutHeading)
        about.appendChild(horizontalLine)
        about.appendChild(aboutContent)

        //Adding text
        aboutHeading.innerHTML="ABOUT"
        aboutContent.innerHTML="I am an Associate Software Engineer Intern at Contentstack persuing my B.E degree at JSS Science and Technology University, Mysore. I am passoniate about sports, travel and adventures.I am particularly fond of Hockey and Cricket and spend most of my free time playing or watching these sports.My technical skills and passion for sports make me an asset to any team,and I am sure to be a valuable addition to an organization."

        return about
    }
}

export {About}