import { DatabaseIntegration } from "../../adapters/database.integration";
import { IDatabaseIntegration } from "../types/i-database-integration";

export class PaymentTransactionService {
    private readonly database: IDatabaseIntegration;

    constructor() {
        //  TODO: Use DI over here
        this.database = new DatabaseIntegration();
    }

    public getAll() {
        return this.database.getAll();
    }
}