import { mockerPaymentTransactionEntity } from "@/backend/utils/mocker-payment-transaction-entity";
import { PageEntity } from "@/entities/page-entity";
import { PaymentTransactionEntity } from "@/entities/payment-transaction.entity";

export class PaymentTransactionService {
    public async getAll(page: number, perPage: number): Promise<PageEntity<PaymentTransactionEntity>> {
        const allData = mockerPaymentTransactionEntity()

        const start = page * perPage;
        const pageEntity = new PageEntity(
            page,
            perPage,
            allData.length,
            allData.slice(start, start + perPage)
        )
        return pageEntity;
    }
}