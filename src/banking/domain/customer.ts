import {Address} from "./address";
import {Account} from "./account";

export class Customer {
    private id: number;
    private address: Address;
    private accounts: Array<Account>;
    constructor(id: number, address: Address, accounts: Array<Account>) {
        this.id = id;
        this.address = address;
        this.accounts = accounts;
    }

    public updateAddress(newAddress: Address){
        this.address=newAddress;
        this.accounts.forEach(account=>account['address']=newAddress)
    }
}