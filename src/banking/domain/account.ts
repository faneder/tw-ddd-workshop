import {Address} from "./address";

export class Account {
    private accountNumber: number;
    private address: Address;
    constructor(accountNumber :number, address: Address) {
        this.accountNumber = accountNumber;
        this.address = address;
    }
}