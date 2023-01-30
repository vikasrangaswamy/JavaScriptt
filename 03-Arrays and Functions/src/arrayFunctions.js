const employees = [
    {
      id: "1",
      name: "Vibhuti Bajaj",
      profileImage: "assets/images/Vibhuti.jpg",
      introduction:
        "I like playing cricket and travelling. I'm always focused on the task which I take at hand.",
      profileLink: "https://vibhi24.github.io/Personal-Website/",
    },
    {
      id: "2",
      name: "Varun Athreya",
      profileImage: "assets/images/varun.jpg",
      introduction:
        "I am a passionate coder who loves capturing memories and exploring new places.",
      profileLink: "https://varunsathreya.github.io/contentstack-training/",
    },
    {
      id: "3",
      name: "Priya NB",
      profileImage: "assets/images/Priya.jpeg",
      introduction:
        "I'm enthusiastic to learn new things and I don't give up until i achieve it.",
      profileLink: "https://priya-nb.github.io/personalweb/index.html",
    },
    {
      id: "4",
      name: "Rangaswamy Vikas",
      profileImage: "assets/images/vikas.jpg",
      introduction:
        "I enjoy balancing my love for learning with my passion for gaming and a fit lifestyle.",
      profileLink: "https://vikasrangaswamy.github.io/portfolio/main.html",
    },
    {
      id: "5",
      name: "Deepak Chaturvedi",
      profileImage: "assets/images/deepak.png",
      introduction:
        "Believer, Dedicated. I am a curious developer that loves to convert ideas into code.",
      profileLink: "https://thedeepakchaturvedi.github.io/Portfolio/",
    },
    {
      id: "6",
      name: "Rakshitha S",
      profileImage: "assets/images/Rakshitha.jpg",
      introduction:
        "I'm passionate to meet people, learn new things. I love challenges and interested in travelling.",
      profileLink: "#",
    },
    {
      id: "7",
      name: "Kashmeera Raychoty",
      profileImage: "assets/images/Kashmeera.jpg",
      introduction: "I am a creative person and like to explore new things.",
      profileLink: "https://kashmeeraraychoty.github.io/Kashmeera-s-Portfolio/",
    },
    {
      id: "8",
      name: "Harshitha D",
      profileImage: "assets/images/Harshitha D.png",
      introduction: "I'm a partical person and like to travel and listen K-pop.",
      profileLink: "https://harshithad0703.github.io/individual_website/",
    },
    {
      id: "9",
      name: "Sanika Pareek",
      profileImage: "assets/images/sanika.jpeg",
      introduction:
        "I'm curious to learn and explore new things and like to paint.",
      profileLink:
        "https://sanikapareek-contentstack.github.io/sanika-portfolio/",
    },
    {
      id: "9",
      name: "Raj Pandey",
      profileImage: "assets/images/Raj.png",
      introduction: "Computer Engineer, Painter, Poet, Reader",
      profileLink: "https://cs-raj.github.io/pw-2/",
    },
    {
      id: "10",
      name: "Viraj Yadav",
      profileImage: "assets/images/Viraj.jpg",
      introduction:
        "I'm a sincere lunatic curious about technology and like playing cricket.",
      profileLink: "https://vikasrangaswamy.github.io/Contentstack/#",
    },
    {
      id: "11",
      name: "Faraaz Biyabani",
      profileImage: "assets/images/faraaz.webp",
      introduction:
        "I am always curious about technology and I love writing code to create purposeful things.",
      profileLink: "https://faraazb.github.io/cs-personal-website/",
    },
    {
      id: "12",
      name: "Vaibhav Patil",
      profileImage: "assets/images/Vaibhav.png",
      introduction:
        "I'm a true technophile. I love to talk about Physics and Spirituality.",
      profileLink: "https://vaibhav-patil07.github.io/portfolio/#",
    },
    {
      id: "13",
      name: "Soumik Paul",
      profileImage: "assets/images/Soumik.png",
      introduction: "2x ICPC regionalist and first runner-up at Techsurf 2022.",
      profileLink: "https://soumik43.github.io/Portfolio/",
    },
  ];



  //every
  //some
  //foreach
  //findindex
  //map
  //reduce

  function Employee(id,name,profileImage,introduction,profileLink){
    this.id=id
    this.name=name
    this.profileImage=profileImage
    this.introduction=introduction
    this.profileLink=profileLink
  }


// Creating instances of Employee

//   let Employee=[
//     new Employee("1", "Vibhuti Bajaj","assets/images/Vibhuti.jpg","I like playing cricket and travelling. I'm always focused on the task which I take at hand.", "https://vibhi24.github.io/Personal-Website/")
//   ]

employeesArray=[]
let map1=employees.map((value)=>{
    employeesArray.push(new Employee(value.id,value.name,value.profileImage,value.introduction,value.profileLink))
})
console.log(employeesArray)

// 1. Find an employee with specific id. (id is the unique primary key for search)
// eg findEmployeeById( id: "1"  ) should return a single object from the array that has "id = 1".

var findEmployeeById=(id)=>{
   return employeesArray.find(element => element.id===id)
}
// console.log(findEmployeeById("2"))

// 2. Find an employee information that matches the search object passed as an argument

const object = { name: "Rangaswamy Vikas" };
let findEmployee=(object)=> {
    return employees.find(function(employee) {
      return Object.entries(object).every(([key, value]) => employee[key] === value);
    });
  }
const emp = findEmployee(object);
// console.log(emp); 
 


        // findEmployeeByObject({name:"Rangaswamy Vikas"})
        // console.log(findEmployeeByObject({name:"Rangaswamy Vikas"}))    
        // let object = {name:"Rangaswamy Vikas"}
        // let key=Object.keys(object)
        // let value=Object.values(object)
        // console.log(key[0], value[0])
        // let returned = employeesArray.findIndex(element=>element.key[0]===value[0].toString())
        // console.log(returned)

// 3.Update employee with a specific id
// This function will take in arguments as id and an update object.
// Update object will contain a key value pairs that needs to be updated. eg. { name:  "updated  name" }
//  eg updateEmployeeById( id: "1", { update Object:  updated values }   ) should update a single object from the array that has "id=1".
// Assume that the updateObject will contain keys that are present in the Employee object
// Restrict updating key properties like id
const updateEmployee = {name : " Vikas Rangaswamy"}
        // console.log(Object.entries(updateEmployee))
        // test=Object.entries(updateEmployee)
        // key=test[0]
        // value=test[1]
        // console.log("key" , key)
        // // console.log(employeesArray[0])
        // console.log(employeesArray[0])

let updateEmployeeById=(id , updateObject)=>{
    const index = employeesArray.findIndex(element=>element.id===id)
    if (index!==-1){
        for(const key in updateObject){
            if(key !== "id"){
                employeesArray[index][key]=updateObject[key]
            }
        }
        return true
}
console.log("invalid index")
}
// updateEmployeeById('100',updateEmployee)
console.log(employeesArray[3])


//    4. Delete an object with a specific id.
// This function should take in an argument as id and delete the same from the array of Employees.

let deleteEmployeeById=(id)=>{
    let index=employeesArray.findIndex(element=>element.id==id)
    employeesArray.splice(index,1)
    return employeesArray
}
// console.log(deleteEmployeeById("1"))