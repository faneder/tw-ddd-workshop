import {Product} from '../src/product';
import {Cart} from '../src/cart';
import {CartItem} from "../src/cartItem";
import {Price} from "../src/Price";

describe('Add product to cart', () => {
    let cart: Cart;
    beforeEach(() => {
        cart = new Cart(1);
    });

    it('should add a IpadPro to cart', async () => {
        const iPadPro = new Product("IPad Pro", new Price(888));
        const item = new CartItem(iPadPro, 1);

        cart.add(item);

        expect(cart['cartItems']).toStrictEqual([item]);
    });

    it('should add a Hero Ink Pen to cart', async () => {
        const pen = new Product("Hero Ink Pen", new Price(888));
        const item = new CartItem(pen, 1);

        cart.add(item);

        expect(cart['cartItems']).toStrictEqual([item]);
    });

    it('should add 2 GM Cricket bats to cart', async () => {
        const bat = new Product("GM Cricket bat", new Price(888));
        const items = new CartItem(bat, 2);

        cart.add(items);

        expect(cart['cartItems']).toStrictEqual([items]);
    });

    it('should remove all IPad Pro products from cart', async () => {
        const ipads = new Product("IPad Pro", new Price(888));
        const items = new CartItem(ipads, 2);
        cart.add(items);

        cart.remove("IPad Pro");

        expect(cart['cartItems']).toStrictEqual([]);
    });

    it('should remove just IPad Pro products from cart', async () => {
        const ipads = new Product("IPad Pro", new Price(888));
        const items1 = new CartItem(ipads, 2);

        const bat = new Product("GM Cricket bat", new Price(888));
        const items2 = new CartItem(bat, 2);
        cart.add(items1);
        cart.add(items2);

        cart.remove("IPad Pro");

        expect(cart['cartItems']).toStrictEqual([items2]);
    });

    it('should remove just IPad Pro products from cart and be able to view the removed items', async () => {
        const ipads = new Product("IPad Pro", new Price(888));
        const items1 = new CartItem(ipads, 2);

        const bat = new Product("GM Cricket bat", new Price(888));
        const items2 = new CartItem(bat, 2);
        cart.add(items1);
        cart.add(items2);

        cart.remove("IPad Pro");

        expect(cart['deletedItems']).toStrictEqual([items1]);
    });

    it('should return false when two carts are different', async () => {
        const ipads = new Product("IPad Pro", new Price(888));
        const items1 = new CartItem(ipads, 2);
        cart.add(items1);

        const cart2 = new Cart(2);
        cart2.add(items1)

        expect(cart).not.toStrictEqual(cart2);
    });

    it('should return true when two carts are the same', async () => {
        const ipads = new Product("IPad Pro", new Price(888));
        const items1 = new CartItem(ipads, 2);
        cart.add(items1);

        const cart2 = new Cart(1);
        cart2.add(items1)

        expect(cart).toStrictEqual(cart2);
    });

    it('should add price to product', async () => {
        const amount = 888;
        const ipads = new Product("IPad Pro", new Price(amount));
        const items1 = new CartItem(ipads, 2);
        cart.add(items1);

        expect(ipads['price']['amount']).toStrictEqual(amount);
    });
});