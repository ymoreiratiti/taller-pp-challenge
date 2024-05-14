import { PaymentTransactionEntity } from '../domains/entities/payment-transaction.entity';
import { uniqueId } from "lodash"

/**
 * Mocks a payment transaction entity to be used in tests and this challenge.
 * Function because we want a new dataset of entity every time we call this function.
 */
export function mockerPaymentTransactionEntity() {
    return [
        new PaymentTransactionEntity(uniqueId(), new Date("2024-05-14"), "Payment for services", 100),
        new PaymentTransactionEntity(uniqueId(), new Date("2024-05-13"), "Product purchase", 50.30),
        new PaymentTransactionEntity(uniqueId(), new Date("2024-05-12"), "Subscription renewal", 30),
        new PaymentTransactionEntity(uniqueId(), new Date("2024-05-11"), "Donation", 200.25),
        new PaymentTransactionEntity(uniqueId(), new Date("2024-05-10"), "Grocery shopping", 75),
        new PaymentTransactionEntity(uniqueId(), new Date("2024-05-09"), "Restaurant bill", 60.30),
        new PaymentTransactionEntity(uniqueId(), new Date("2024-05-08"), "Movie tickets", 25.75),
        new PaymentTransactionEntity(uniqueId(), new Date("2024-05-07"), "Gym membership", 40),
        new PaymentTransactionEntity(uniqueId(), new Date("2024-05-06"), "Book purchase", 15),
        new PaymentTransactionEntity(uniqueId(), new Date("2024-05-05"), "Online course", 120),
    ];
}

