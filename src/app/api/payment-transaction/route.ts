import { PaymentTransactionController } from "@/backend/adapters/controllers/payment-transaction.controller";
import { NextRequest } from "next/server";

const controller = new PaymentTransactionController();

export async function GET(request: NextRequest) {
    return controller.GET(request);
}
