export class Order{
    constructor(
        public accountId: any = "",
        public products: orderProduct[],
        public totalPrice: number = 0,
        public address: string = "",
        public status: string = ""
    ){}
}

export class orderProduct{
    constructor(
        public productId: any = "",
        public amount: number = 0
    ){}
}