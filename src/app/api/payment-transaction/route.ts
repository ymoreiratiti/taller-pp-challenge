import { PaymentTransactionController } from "@/backend/adapters/controllers/payment-transaction.controller";

const controller = new PaymentTransactionController();

export async function GET(request: Request) {
    return controller.GET(request);
}
