
export class PaymentTransactionEntity {
    constructor(
        public id: number,
        public date: Date,
        public description: string,
        public amount: number,
    ) { }
}


