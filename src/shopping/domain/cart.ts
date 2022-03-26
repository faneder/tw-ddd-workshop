import {CartItem} from './cartItem';
import {Order} from "./order";

export class Cart {
    private id: number;
    private cartItems: Array<CartItem>;
    private deletedItems: Array<CartItem>;
    private isCheckOut: boolean;

    constructor(id: number) {
        this.id = id;
        this.cartItems = [];
        this.deletedItems = [];
        this.isCheckOut = false;
    }

    public add(cartItem: CartItem) {
        this.cartItems.push(cartItem);
    }

    public remove(name: string) {
        const cartItem = this.findCartItem(name);
        const index = this.cartItems.indexOf(cartItem);
        if (index > -1) {
            this.cartItems.splice(index, 1);
        }
        this.deletedItems.push(cartItem);
    }

    public checkOut(){
        const products = this.cartItems.map(cartItem=>{
            for (let count = 0; count < cartItem['quantity']; count++) {
                return cartItem['product']
            }
        });
        this.isCheckOut= true;
        return new Order(products)
    }

    private findCartItem(name: string) {
        return this.cartItems.filter(item => item['product']['name'] == name)[0];
    }
}