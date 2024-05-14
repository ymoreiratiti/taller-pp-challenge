import { PaymentTransactionEntity } from "../entities/payment-transaction.entity";

export interface IDatabaseIntegration {
    getAll(): Promise<PaymentTransactionEntity[]>;
}

