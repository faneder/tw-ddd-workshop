import {Product} from "./product";

export class CartItem {

    private product: Product;
    private quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }
}