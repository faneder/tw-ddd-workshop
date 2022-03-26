import {Address} from "../../../src/banking/domain/address";
import {Account} from "../../../src/banking/domain/account";
import {Customer} from "../../../src/banking/domain/customer";


describe('Customer', () => {
    it('should update customer address and their bank account address', async () => {
        const oldAddress = new Address('London');
        const account1 = new Account(1,oldAddress);
        const account2 = new Account(2,oldAddress);
        const customer = new Customer(100,oldAddress,[account1,account2])

        const newAddress = new Address('Newyork');
        customer.updateAddress(newAddress);

        expect(customer['address']).toStrictEqual(newAddress)
        expect(account1['address']).toStrictEqual(newAddress)
        expect(account2['address']).toStrictEqual(newAddress)

    });
})