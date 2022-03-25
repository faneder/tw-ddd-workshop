import {Product, CartItem} from '../src/product';
import {Cart} from '../src/cart';

describe('Add product to cart', () => {
    let cart: Cart;
    beforeEach(()=> {
        cart = new Cart();
    });

    it('should add a IpadPro to cart', async () => {
        const iPadPro = new Product("IPad Pro");
        const item = new CartItem(iPadPro, 1);

        cart.add(item);

        expect(cart['cartItems']).toStrictEqual([item]);
    });

    it('should add a Hero Ink Pen to cart', async () => {
        const pen = new Product("Hero Ink Pen");
        const item = new CartItem(pen, 1);

        cart.add(item);

        expect(cart['cartItems']).toStrictEqual([item]);
    });

    it('should add 2 GM Cricket bats to cart', async () => {
        const bat = new Product("GM Cricket bat");
        const items = new CartItem(bat, 2);

        cart.add(items);

        expect(cart['cartItems']).toStrictEqual([items]);
    });

    it('should remove all IPad Pro products from cart', async () => {
        const ipads = new Product("IPad Pro");
        const items = new CartItem(ipads, 2);
        cart.add(items);

        cart.remove("IPad Pro");

        expect(cart['cartItems']).toStrictEqual([]);
    });

    it('should remove just IPad Pro products from cart', async () => {
        const ipads = new Product("IPad Pro");
        const items1 = new CartItem(ipads, 2);

        const bat = new Product("GM Cricket bat");
        const items2 = new CartItem(bat, 2);
        cart.add(items1);
        cart.add(items2);

        cart.remove("IPad Pro");

        expect(cart['cartItems']).toStrictEqual([items2]);
    });

    it('should remove just IPad Pro products from cart and be able to view the removed items', async () => {
        const ipads = new Product("IPad Pro");
        const items1 = new CartItem(ipads, 2);

        const bat = new Product("GM Cricket bat");
        const items2 = new CartItem(bat, 2);
        cart.add(items1);
        cart.add(items2);

        cart.remove("IPad Pro");

        expect(cart['deletedItems']).toStrictEqual([items1]);
    });

});