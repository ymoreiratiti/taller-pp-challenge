
export class PaymentTransactionEntity {
    constructor(
        public id: string,
        public date: Date,
        public description: string,
        public amount: number,
    ) { }
}
