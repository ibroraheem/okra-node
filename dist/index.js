"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class OkraClient {
    apiKey;
    baseUrl;
    commonHeaders;
    constructor(apiKey, baseUrl) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.commonHeaders = {
            method: "POST",
            headers: {
                accept: "application/json; charset=utf-8",
                "content-type": "application/json",
            },
        };
    }
    async sendRequest(options) {
        try {
            const response = await axios_1.default.request(options);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
    createRequestConfig(endpoint, data) {
        return {
            ...this.commonHeaders,
            url: `${this.baseUrl}${endpoint}`,
            headers: {
                ...this.commonHeaders.headers,
                authorization: `Bearer ${this.apiKey}`,
            },
            data,
        };
    }
    async getAuthById(id) {
        const options = this.createRequestConfig("/auth/getById", { id });
        return this.sendRequest(options);
    }
    async getAuthByCustomer(customer, page, limit) {
        const data = { customer, page, limit };
        const options = this.createRequestConfig("/auth/getByCustomer", data);
        return this.sendRequest(options);
    }
    async getAuthByDate(from, to, page, limit) {
        const data = { from, to, page, limit };
        const options = this.createRequestConfig("/auth/getByDate", data);
        return this.sendRequest(options);
    }
    async getAuthByBank(bank, page, limit) {
        const data = { bank, page, limit };
        const options = this.createRequestConfig("/auth/getByBank", data);
        return this.sendRequest(options);
    }
    async getAuthByCustomerDate(from, to, customer, page, limit) {
        const data = { from, to, customer, page, limit };
        const options = this.createRequestConfig("/auth/getByCustomerDate", data);
        return this.sendRequest(options);
    }
    async getProducts(page, limit) {
        const data = { page, limit };
        const options = this.createRequestConfig("/products/auths", data);
        return this.sendRequest(options);
    }
    async getBalanceById(id) {
        const data = { id };
        const options = this.createRequestConfig("/balance/getById", data);
        return this.sendRequest(options);
    }
    async getBalanceByCustomer(customer, page, limit) {
        const data = { customer, page, limit };
        const options = this.createRequestConfig("/balance/getByCustomer", data);
        return this.sendRequest(options);
    }
    async balanceCheck(account_id, record_id) {
        const data = { account_id, record_id };
        const options = this.createRequestConfig("/balance/check", data);
        return this.sendRequest(options);
    }
    async getBalanceByAccount(account_id, page, limit) {
        const data = { account_id, page, limit };
        const options = this.createRequestConfig("/balance/getByAccount", data);
        return this.sendRequest(options);
    }
    async getBalanceByCustomerDate(from, to, customer, page, limit) {
        const data = { from, to, customer, page, limit };
        const options = this.createRequestConfig("/balance/getByCustomerDate", data);
        return this.sendRequest(options);
    }
    async getBalanceByDate(from, to, page, limit) {
        const data = { from, to, page, limit };
        const options = this.createRequestConfig("/balance/getByDate", data);
        return this.sendRequest(options);
    }
    async balanceByOptions(tester_id) {
        const data = { options: { tester_id } };
        const options = this.createRequestConfig("/balance/byOptions", data);
        return this.sendRequest(options);
    }
    async listBanks() {
        const options = this.createRequestConfig("/banks/list");
        return this.sendRequest(options);
    }
    async getBankById(bankId) {
        const options = this.createRequestConfig(`/banks/getById?id=${bankId}`);
        return this.sendRequest(options);
    }
    async getIdentityById(id) {
        const options = this.createRequestConfig("/identity/getById", { id });
        return this.sendRequest(options);
    }
    async getIdentityByBvn(bvn) {
        const options = this.createRequestConfig("/identity/getByBvn", { bvn });
        return this.sendRequest(options);
    }
    async getIdentityByNuban(bank, nuban) {
        const data = { bank, nuban };
        const options = this.createRequestConfig("/identity/getByNuban", data);
        return this.sendRequest(options);
    }
    async getIdentityByCustomer(customer) {
        const options = this.createRequestConfig("/identity/getByCustomer", {
            customer,
        });
        return this.sendRequest(options);
    }
    async getIdentityByDate(from, to) {
        const data = { from, to };
        const options = this.createRequestConfig("/identity/getByDate", data);
        return this.sendRequest(options);
    }
    async getIdentityByCustomerDate(from, to, customer) {
        const data = { from, to, customer };
        const options = this.createRequestConfig("/identity/getByCustomerDate", data);
        return this.sendRequest(options);
    }
    async kycCustomerVerify(customer) {
        const options = this.createRequestConfig("/products/kyc/customer-verify", {
            customer,
        });
        return this.sendRequest(options);
    }
    async kycNubanVerify(nuban, bank) {
        const data = { nuban, bank };
        const options = this.createRequestConfig("/products/kyc/nuban-verify", data);
        return this.sendRequest(options);
    }
    async kycNubanNameVerify(nuban, bank) {
        const data = { nuban, bank };
        const options = this.createRequestConfig("/products/kyc/nuban-name-verify", data);
        return this.sendRequest(options);
    }
    async fraudDetectionProcess(bvn) {
        const options = this.createRequestConfig("/fraud-detection/process", {
            bvn,
        });
        return this.sendRequest(options);
    }
    async getAllFraudDetections(page, limit) {
        const data = { page, limit };
        const options = this.createRequestConfig("/fraud-detection/getAll", data);
        return this.sendRequest(options);
    }
    async getFraudDetectionById(_id) {
        const options = this.createRequestConfig("/fraud-detection/getById", {
            _id,
        });
        return this.sendRequest(options);
    }
    async getFraudDetectionByBvn(bvn) {
        const options = this.createRequestConfig("/fraud-detection/getByBvn", {
            bvn,
        });
        return this.sendRequest(options);
    }
    async getIncomeById(id, version) {
        const options = this.createRequestConfig("/income/getById", {
            id,
            version,
        });
        return this.sendRequest(options);
    }
    async getIncomeByCustomer(customer, version) {
        const options = this.createRequestConfig("/income/getByCustomer", {
            customer,
            version,
        });
        return this.sendRequest(options);
    }
    async getIncomeByDate(from, to, version) {
        const options = this.createRequestConfig("/income/getByDate", {
            from,
            to,
            version,
        });
        return this.sendRequest(options);
    }
    async getIncomeByRecord(record, version) {
        const options = this.createRequestConfig("/income/getByRecord", {
            record,
            version,
        });
        return this.sendRequest(options);
    }
    async getAllIncome(page, version) {
        const options = this.createRequestConfig("/income/getAll", {
            page,
            version,
        });
        return this.sendRequest(options);
    }
    async processIncome(customer_id, version) {
        const options = this.createRequestConfig("/income/process", {
            customer_id,
            version,
        });
        return this.sendRequest(options);
    }
    async getTransactionsById(id) {
        const data = { id };
        const options = this.createRequestConfig("/transactions/getById", data);
        return this.sendRequest(options);
    }
    async getTransactionsByCustomer(customer, page, limit) {
        const data = { customer, page, limit };
        const options = this.createRequestConfig("/transactions/getByCustomer", data);
        return this.sendRequest(options);
    }
    async getTransactionsByAccount(account, page, limit) {
        const data = { account, page, limit };
        const options = this.createRequestConfig("/transactions/getByAccount", data);
        return this.sendRequest(options);
    }
    async getTransactionsByBank(bank, page, limit) {
        const data = { bank, page, limit };
        const options = this.createRequestConfig("/transactions/getByBank", data);
        return this.sendRequest(options);
    }
    async getTransactionsByDate(from, to, page, limit) {
        const data = { from, to, page, limit };
        const options = this.createRequestConfig("/transactions/getByDate", data);
        return this.sendRequest(options);
    }
    async getTransactionsByCustomerDate(from, to, page, limit, customer_id) {
        const data = { from, to, page, limit, customer_id };
        const options = this.createRequestConfig("/transactions/getByCustomerDate", data);
        return this.sendRequest(options);
    }
    async processTransactions(account, page, limit) {
        const data = { account, page, limit };
        const options = this.createRequestConfig("/transactions/process", data);
        return this.sendRequest(options);
    }
    async getTransactionsByNuban(nuban, page, limit) {
        const data = { nuban, page, limit };
        const options = this.createRequestConfig("/transactions/getByNuban", data);
        return this.sendRequest(options);
    }
    async transactionsByOptions(customerData) {
        const data = { customerData };
        const options = this.createRequestConfig("/transactions/byOptions", data);
        return this.sendRequest(options);
    }
    async transactionsDownload(record, downloadType) {
        const data = { record, downloadType };
        const options = this.createRequestConfig("/transactions/download", data);
        return this.sendRequest(options);
    }
    async recordDownload(downloadType) {
        const data = { downloadType };
        const options = this.createRequestConfig("/record/download", data);
        return this.sendRequest(options);
    }
    async processSpendingPatterns(customer_id) {
        const data = { customer_id };
        const options = this.createRequestConfig("/spending-patterns/process", data);
        return this.sendRequest(options);
    }
    async getAllSpendingPatterns(page, limit) {
        const data = { page, limit };
        const options = this.createRequestConfig("/spending-patterns/getAll", data);
        return this.sendRequest(options);
    }
    async getSpendingPatternsById(id) {
        const data = { id };
        const options = this.createRequestConfig("/spending-patterns/getById", data);
        return this.sendRequest(options);
    }
    async getSpendingPatternsByCustomer(customer_id) {
        const data = { customer_id };
        const options = this.createRequestConfig("/spending-patterns/getByCustomer", data);
        return this.sendRequest(options);
    }
    async getSpendingPatternsByDate(from, to, page) {
        const data = { from, to, page };
        const options = this.createRequestConfig("/spending-patterns/getByDate", data);
        return this.sendRequest(options);
    }
    async createPaymentLink(paymentData) {
        const url = "/pay/link/create";
        const data = {
            type: "one-time",
            filter: { banks: paymentData.banks },
            amount: paymentData.amount,
            name: paymentData.name,
            currency: paymentData.currency,
            note: paymentData.note,
            countries: paymentData.countries,
            account: paymentData.account,
        };
        return this.sendRequest(this.createRequestConfig(url, data));
    }
    async verifyPayment(paymentId) {
        const url = "/pay/verify";
        const data = { payment_id: paymentId };
        return this.sendRequest(this.createRequestConfig(url, data));
    }
    async listPayments(paymentId) {
        const url = "/pay/list";
        const data = { payment_id: paymentId };
        return this.sendRequest(this.createRequestConfig(url, data));
    }
    async getPaymentById(paymentId) {
        const url = "/pay/get/id";
        const data = { payment_id: paymentId };
        return this.sendRequest(this.createRequestConfig(url, data));
    }
    async verifyPaymentByOptions(options, page, limit) {
        const url = "/pay/verifyByOptions";
        const data = { options, page, limit };
        return this.sendRequest(this.createRequestConfig(url, data));
    }
}
exports.default = OkraClient;
