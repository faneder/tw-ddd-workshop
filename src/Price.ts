export class Price {
    private amount: number;

    constructor(price) {
        this.amount = price;
    }
    
    getAmount() {
        return this.amount;
    }
} 