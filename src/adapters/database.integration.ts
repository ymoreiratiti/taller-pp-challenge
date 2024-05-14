import { PaymentTransactionEntity } from "../domains/entities/payment-transaction.entity";
import { IDatabaseIntegration } from "../domains/types/i-database-integration";
import { mockerPaymentTransactionEntity } from "../utils/mocker-payment-transaction-entity";

/**
 * This class is used to simulate a database connection.
 * It contains a list of mocked data that can be used to simulate a database.
 * Using async methods just to simulate a real database connection.
 */

export class DatabaseIntegration implements IDatabaseIntegration {
    private readonly localDatabase: PaymentTransactionEntity[] = mockerPaymentTransactionEntity()

    public async getAll(): Promise<PaymentTransactionEntity[]> {
        return this.localDatabase;
    }
}

