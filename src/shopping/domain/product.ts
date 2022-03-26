import {Price} from "./price";

export class Product {

    private name: string;
    private price: Price;
    private weight: number;

    constructor(name: string, price: Price, weight: number) {
        this.name = name;
        this.price = price;
        this.weight = weight;
    }
}