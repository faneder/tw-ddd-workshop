import { CartItem, Product } from './product';

export class Cart {
    private cartItems: Array<CartItem>;
    private deletedItems: Array<CartItem>;

     constructor(){
         this.cartItems = [];
         this.deletedItems = [];
     }

    public add(cartItem:CartItem){
         this.cartItems.push(cartItem);
    }

    public remove(name: string){
        const cartItem = this.findCartItem(name);
        const index = this.cartItems.indexOf(cartItem);
        if (index > -1) {
            this.cartItems.splice(index, 1);
         }
         this.deletedItems.push(cartItem);
    }

    private findCartItem(name: string){
        return this.cartItems.filter(item => item['product']['productName'] == name)[0];
    }

 }