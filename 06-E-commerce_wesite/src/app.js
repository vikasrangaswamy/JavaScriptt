import { ProductsContainer } from "./components/ProductsContainer.js"
import { cartContainer } from "./components/CartContainer.js";

let products =[];
const productsUrl="https://raw.githubusercontent.com/vikasrangaswamy/JavaScriptt/master/00-Data/E-commerce_data/products.json"
fetch(productsUrl).then((resoponse)=>{
    return resoponse.json()
}).then((data)=>{
    // console.log("data" , data)
    products=data
    // console.log("products" , products)
    const newProductContainer=new ProductsContainer(products)
    newProductContainer.mount(root)
})
const app=()=>{
    const appHeading = document.createElement("h1")
    const root=document.getElementById("root")
    appHeading.innerText="Shopping"
    root.appendChild(appHeading)
    appHeading.appendChild(cartContainer)
    
    
    
}

app();