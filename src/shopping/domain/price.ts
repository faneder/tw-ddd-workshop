import {Money, Currencies, Currency} from 'ts-money'

export class Price {
    private amount: number;
    private currency: Currency;

    constructor(amount: number, currency: Currency) {
        this.amount = amount
        this.currency = currency
    }
}