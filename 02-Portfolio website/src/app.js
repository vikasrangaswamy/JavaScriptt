//Importing Classes
// import { About } from "./about";
import { Header } from "./header.js";

const app=()=>{
//getting root
const root=document.getElementById("root")
const newHeader= new Header()

//Creating new instances of classes 
newHeader.mount(root)
console.log("hi")

}

app()
