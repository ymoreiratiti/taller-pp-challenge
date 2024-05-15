import { PaymentTransactionService } from "@/backend/domains/services/payment-transaction.service";
import { NextRequest, NextResponse } from 'next/server';


export class PaymentTransactionController {
    private readonly service: PaymentTransactionService;

    constructor() {
        this.service = new PaymentTransactionService()
    }

    async GET(req: NextRequest): Promise<Response> {
        const page = Number(req.nextUrl.searchParams.get('page')) || 0
        const limit = Number(req.nextUrl.searchParams.get('limit')) || 10

        const results = await this.service.getAll(page, limit);

        return Response.json(results);
    }
}
