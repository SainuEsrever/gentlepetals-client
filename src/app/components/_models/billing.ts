export class Billing{
    constructor(
        public orderId: any,
        public accountId: any,
        public totalPrice: number,
        public method: string,
        public status: string
    ){}
}