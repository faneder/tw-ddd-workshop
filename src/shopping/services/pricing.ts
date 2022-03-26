export function calculatePrice(productName: string) {
    const competitorsPrice = {"Ipad Pro": 150};
    const productCompetitorsPrice = competitorsPrice[productName];
    const discount = productCompetitorsPrice * 10 / 100;
    return productCompetitorsPrice - discount;
}
