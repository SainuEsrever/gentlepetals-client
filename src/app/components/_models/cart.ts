export class Cart{
    constructor(
        public accountId: any,
        public products: cartProduct[],
        public totalPrice: number
    ){}
}
export class cartProduct{
    constructor(
        public productId: any,
        public amount: number
    ){}
}
