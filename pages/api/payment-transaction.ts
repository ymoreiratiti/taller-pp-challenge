import type { NextApiRequest, NextApiResponse } from 'next'
import { PaymentTransactionService } from '../../src/domains/services/payment-transaction.service'
import { PaymentTransactionEntity } from '../../src/domains/entities/payment-transaction.entity'

//  TODO: Use DI over here
//  TODO: Better controller
export default async function PaymentTransactionController(
    req: NextApiRequest,
    res: NextApiResponse<PaymentTransactionEntity[]>
) {
    const response = await new PaymentTransactionService().getAll()
    res.status(200).json(response)
}