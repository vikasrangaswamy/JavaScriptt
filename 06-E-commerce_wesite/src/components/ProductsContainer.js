import { cartContainer, addToCart } from "./CartContainer.js";
class ProductsContainer{
    constructor(products){
        this.products=products
    }

    render(){

        const ProductsContainer = document.createElement('div')

        this.products.forEach(product => {
        let productElement = document.createElement("div");
        productElement.classList.add("product");

        let productImage = document.createElement("img");
        productImage.src = product.image;
        productElement.appendChild(productImage);

        let productTitle = document.createElement("h3");
        productTitle.textContent = product.title;
        productElement.appendChild(productTitle);

        let productDescription = document.createElement("p");
        productDescription.textContent = product.description;
        productElement.appendChild(productDescription);

        let productPrice = document.createElement("p");
        productPrice.textContent = product.price;
        productElement.appendChild(productPrice);

        let addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener("click", () => {
            // itemCount += 1;
            // updateItemCount();
            // Add the product to the cart
            // ...
            addToCart(product)
            console.log("pressed add to cart button " , product)
        });

        productElement.appendChild(addToCartButton);


        ProductsContainer.appendChild(productElement)
    })
    return ProductsContainer
}

    mount(el){
        if(el){
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
        return;
    }
}

export {ProductsContainer}