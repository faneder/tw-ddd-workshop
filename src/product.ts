import {Price} from "./Price";

export class Product {

    private productName: string;
    private price: Price;

    constructor(name: string, price: Price) {
        this.productName = name;
        this.price = price;
    }
    
    getPrice() {
        return this.price;
    }
}