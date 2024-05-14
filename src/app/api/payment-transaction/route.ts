import { PaymentTransactionService } from "@/backend/domains/services/payment-transaction.service"

export async function GET(request: Request) {
    const results = await new PaymentTransactionService().getAll()

    return Response.json({ start: 0, limit: 5, results, })
}
