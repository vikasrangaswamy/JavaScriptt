import { ProductsContainer } from "./components/ProductsContainer.js"
import { cartContainer } from "./components/CartContainer.js";
const products = [
    {
      id: 1,
      title: "Product 1",
      description: "description of product 1",
      price: "10",
      image: ""
    },
    {
      id: 2,
      title: "Product 2",
      description: "description of product 2",
      price: "20",
      image: "product2.jpg"
    },
  ];
const app=()=>{
    const appHeading = document.createElement("h1")
    const root=document.getElementById("root")
    appHeading.innerText="Shopping"
    root.appendChild(appHeading)
    const newProductContainer=new ProductsContainer(products)
    newProductContainer.mount(root)
    root.appendChild(cartContainer)
}

app();