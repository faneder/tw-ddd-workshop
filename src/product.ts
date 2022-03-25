export class Product {

    private productName: string;

    constructor(name: string){
        this.productName = name;
    }

}

export class CartItem {

    private product: Product;
    private quantity: number;

    constructor(product: Product, quantity:number){
        this.product = product;
        this.quantity = quantity;
    }

}