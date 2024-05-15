import { PaymentTransactionEntity } from '../../entities/payment-transaction.entity';

/**
 * Mocks a payment transaction entity to be used in tests and this challenge.
 * Function because we want a new dataset of entity every time we call this function.
 */
export function mockerPaymentTransactionEntity() {
    return [
        new PaymentTransactionEntity(1, new Date("2024-05-14"), "Payment for services", 100),
        new PaymentTransactionEntity(2, new Date("2024-05-13"), "Product purchase", 50.30),
        new PaymentTransactionEntity(3, new Date("2024-05-12"), "Subscription renewal", 30),
        new PaymentTransactionEntity(4, new Date("2024-05-11"), "Donation", 200.25),
        new PaymentTransactionEntity(5, new Date("2024-05-10"), "Grocery shopping", 75),
        new PaymentTransactionEntity(6, new Date("2024-05-09"), "Restaurant bill", 60.30),
        new PaymentTransactionEntity(7, new Date("2024-05-08"), "Movie tickets", 25.75),
        new PaymentTransactionEntity(8, new Date("2024-05-07"), "Gym membership", 40),
        new PaymentTransactionEntity(9, new Date("2024-05-06"), "Book purchase", 15),
        new PaymentTransactionEntity(10, new Date("2024-05-05"), "Online course", 120),
        new PaymentTransactionEntity(11, new Date("2024-05-04"), "Car repair", 300),
        new PaymentTransactionEntity(12, new Date("2024-05-03"), "Electricity bill", 80),
        new PaymentTransactionEntity(13, new Date("2024-05-02"), "Internet bill", 60),
        new PaymentTransactionEntity(14, new Date("2024-05-01"), "Rent payment", 1000),
        new PaymentTransactionEntity(15, new Date("2024-04-30"), "Coffee shop", 15),
        new PaymentTransactionEntity(16, new Date("2024-04-29"), "Pet supplies", 50),
        new PaymentTransactionEntity(17, new Date("2024-04-28"), "Pharmacy", 30),
        new PaymentTransactionEntity(18, new Date("2024-04-27"), "Clothing", 120),
        new PaymentTransactionEntity(19, new Date("2024-04-26"), "Electronics", 200),
        new PaymentTransactionEntity(20, new Date("2024-04-25"), "Furniture", 500),
        new PaymentTransactionEntity(21, new Date("2024-04-24"), "Gas station", 40),
        new PaymentTransactionEntity(22, new Date("2024-04-23"), "Hotel booking", 200),
        new PaymentTransactionEntity(23, new Date("2024-04-22"), "Flight tickets", 500),
        new PaymentTransactionEntity(24, new Date("2024-04-21"), "Train tickets", 100),
        new PaymentTransactionEntity(25, new Date("2024-04-20"), "Bus tickets", 30),
        new PaymentTransactionEntity(26, new Date("2024-04-19"), "Taxi fare", 20),
        new PaymentTransactionEntity(27, new Date("2024-04-18"), "Music concert", 120),
        new PaymentTransactionEntity(28, new Date("2024-04-17"), "Theatre tickets", 80),
        new PaymentTransactionEntity(29, new Date("2024-04-16"), "Museum entry", 15),
        new PaymentTransactionEntity(30, new Date("2024-04-15"), "Art gallery", 20),
    ];
}

