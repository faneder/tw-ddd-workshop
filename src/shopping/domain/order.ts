import {Product} from "./product";

export class Order {
    private products: Array<Product>
    constructor(products: Array<Product>) {
        this.products = products;
    }

    public totalCost() {
        let productsCost = 0;
        let totalWeight = 0;
        this.products.forEach(product=>{
            productsCost=productsCost+product['price']['amount']
            totalWeight = totalWeight+product['weight']
        })
        const shippingCost = totalWeight*0.01
        return productsCost+shippingCost
    }

}