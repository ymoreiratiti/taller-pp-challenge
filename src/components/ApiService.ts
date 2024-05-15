import { PageEntity } from "@/entities/page-entity"
import { PaymentTransactionEntity } from "@/entities/payment-transaction.entity"
import axios, { AxiosRequestConfig } from "axios"

export class ApiService {
    private readonly httpService = axios.create()

    private parseToPage(data: any): PageEntity<PaymentTransactionEntity> {
        return new PageEntity(
            data.page,
            data.limit,
            data.totalItems,
            data.items.map((model: any) => new PaymentTransactionEntity(
                model.id,
                new Date(model.date),
                model.description,
                model.amount
            )))
    }

    public async paymentTransactionGetAll(page: number = 0, limit: number = 10): Promise<PageEntity<PaymentTransactionEntity>> {
        const axiosRequestConfig: AxiosRequestConfig = {
            method: "GET",
            url: "/api/payment-transaction",
            params: { page, limit }
        }

        const { data } = await this.httpService(axiosRequestConfig)

        return this.parseToPage(data)
    }
}