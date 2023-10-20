import axios, { AxiosRequestConfig } from "axios";

class OkraClient {
  private apiKey: string;
  private baseUrl: string;
  private commonHeaders: AxiosRequestConfig;

  constructor(apiKey: string, baseUrl: string) {
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

  private async sendRequest(options: AxiosRequestConfig): Promise<any> {
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  private createRequestConfig(
    endpoint: string,
    data?: any
  ): AxiosRequestConfig {
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

  async getAuthById(id: string): Promise<any> {
    const options = this.createRequestConfig("/auth/getById", { id });
    return this.sendRequest(options);
  }

  async getAuthByCustomer(
    customer: string,
    page: number,
    limit: number
  ): Promise<any> {
    const data = { customer, page, limit };
    const options = this.createRequestConfig("/auth/getByCustomer", data);
    return this.sendRequest(options);
  }

  async getAuthByDate(
    from: string,
    to: string,
    page: number,
    limit: number
  ): Promise<any> {
    const data = { from, to, page, limit };
    const options = this.createRequestConfig("/auth/getByDate", data);
    return this.sendRequest(options);
  }
  async getAuthByBank(bank: string, page: number, limit: number): Promise<any> {
    const data = { bank, page, limit };
    const options = this.createRequestConfig("/auth/getByBank", data);
    return this.sendRequest(options);
  }

  async getAuthByCustomerDate(
    from: string,
    to: string,
    customer: string,
    page: number,
    limit: number
  ): Promise<any> {
    const data = { from, to, customer, page, limit };
    const options = this.createRequestConfig("/auth/getByCustomerDate", data);
    return this.sendRequest(options);
  }

  async getProducts(page: number, limit: number): Promise<any> {
    const data = { page, limit };
    const options = this.createRequestConfig("/products/auths", data);
    return this.sendRequest(options);
  }

  async getBalanceById(id: string): Promise<any> {
    const data = { id };
    const options = this.createRequestConfig("/balance/getById", data);
    return this.sendRequest(options);
  }

  async getBalanceByCustomer(
    customer: string,
    page: number,
    limit: number
  ): Promise<any> {
    const data = { customer, page, limit };
    const options = this.createRequestConfig("/balance/getByCustomer", data);
    return this.sendRequest(options);
  }

  async balanceCheck(account_id: string, record_id: string): Promise<any> {
    const data = { account_id, record_id };
    const options = this.createRequestConfig("/balance/check", data);
    return this.sendRequest(options);
  }

  async getBalanceByAccount(
    account_id: string,
    page: number,
    limit: number
  ): Promise<any> {
    const data = { account_id, page, limit };
    const options = this.createRequestConfig("/balance/getByAccount", data);
    return this.sendRequest(options);
  }

  async getBalanceByCustomerDate(
    from: string,
    to: string,
    customer: string,
    page: number,
    limit: number
  ): Promise<any> {
    const data = { from, to, customer, page, limit };
    const options = this.createRequestConfig(
      "/balance/getByCustomerDate",
      data
    );
    return this.sendRequest(options);
  }

  async getBalanceByDate(
    from: string,
    to: string,
    page: number,
    limit: number
  ): Promise<any> {
    const data = { from, to, page, limit };
    const options = this.createRequestConfig("/balance/getByDate", data);
    return this.sendRequest(options);
  }

  async balanceByOptions(tester_id: string): Promise<any> {
    const data = { options: { tester_id } };
    const options = this.createRequestConfig("/balance/byOptions", data);
    return this.sendRequest(options);
  }
  async listBanks(): Promise<any> {
    const options = this.createRequestConfig("/banks/list");
    return this.sendRequest(options);
  }

  async getBankById(bankId: string): Promise<any> {
    const options = this.createRequestConfig(`/banks/getById?id=${bankId}`);
    return this.sendRequest(options);
  }
  async getIdentityById(id: string): Promise<any> {
    const options = this.createRequestConfig("/identity/getById", { id });
    return this.sendRequest(options);
  }

  async getIdentityByBvn(bvn: string): Promise<any> {
    const options = this.createRequestConfig("/identity/getByBvn", { bvn });
    return this.sendRequest(options);
  }

  async getIdentityByNuban(bank: string, nuban: string): Promise<any> {
    const data = { bank, nuban };
    const options = this.createRequestConfig("/identity/getByNuban", data);
    return this.sendRequest(options);
  }

  async getIdentityByCustomer(customer: string): Promise<any> {
    const options = this.createRequestConfig("/identity/getByCustomer", {
      customer,
    });
    return this.sendRequest(options);
  }

  async getIdentityByDate(from: string, to: string): Promise<any> {
    const data = { from, to };
    const options = this.createRequestConfig("/identity/getByDate", data);
    return this.sendRequest(options);
  }

  async getIdentityByCustomerDate(
    from: string,
    to: string,
    customer: string
  ): Promise<any> {
    const data = { from, to, customer };
    const options = this.createRequestConfig(
      "/identity/getByCustomerDate",
      data
    );
    return this.sendRequest(options);
  }

  async kycCustomerVerify(customer: string): Promise<any> {
    const options = this.createRequestConfig("/products/kyc/customer-verify", {
      customer,
    });
    return this.sendRequest(options);
  }

  async kycNubanVerify(nuban: string, bank: string): Promise<any> {
    const data = { nuban, bank };
    const options = this.createRequestConfig(
      "/products/kyc/nuban-verify",
      data
    );
    return this.sendRequest(options);
  }

  async kycNubanNameVerify(nuban: string, bank: string): Promise<any> {
    const data = { nuban, bank };
    const options = this.createRequestConfig(
      "/products/kyc/nuban-name-verify",
      data
    );
    return this.sendRequest(options);
  }
  async fraudDetectionProcess(bvn: string): Promise<any> {
    const options = this.createRequestConfig("/fraud-detection/process", {
      bvn,
    });
    return this.sendRequest(options);
  }

  async getAllFraudDetections(page: number, limit: number): Promise<any> {
    const data = { page, limit };
    const options = this.createRequestConfig("/fraud-detection/getAll", data);
    return this.sendRequest(options);
  }

  async getFraudDetectionById(_id: string): Promise<any> {
    const options = this.createRequestConfig("/fraud-detection/getById", {
      _id,
    });
    return this.sendRequest(options);
  }

  async getFraudDetectionByBvn(bvn: string): Promise<any> {
    const options = this.createRequestConfig("/fraud-detection/getByBvn", {
      bvn,
    });
    return this.sendRequest(options);
  }
  async getIncomeById(id: string, version: string): Promise<any> {
    const options = this.createRequestConfig("/income/getById", {
      id,
      version,
    });
    return this.sendRequest(options);
  }

  async getIncomeByCustomer(customer: string, version: string): Promise<any> {
    const options = this.createRequestConfig("/income/getByCustomer", {
      customer,
      version,
    });
    return this.sendRequest(options);
  }

  async getIncomeByDate(
    from: string,
    to: string,
    version: string
  ): Promise<any> {
    const options = this.createRequestConfig("/income/getByDate", {
      from,
      to,
      version,
    });
    return this.sendRequest(options);
  }

  async getIncomeByRecord(record: string, version: string): Promise<any> {
    const options = this.createRequestConfig("/income/getByRecord", {
      record,
      version,
    });
    return this.sendRequest(options);
  }

  async getAllIncome(page: string, version: string): Promise<any> {
    const options = this.createRequestConfig("/income/getAll", {
      page,
      version,
    });
    return this.sendRequest(options);
  }

  async processIncome(customer_id: string, version: string): Promise<any> {
    const options = this.createRequestConfig("/income/process", {
      customer_id,
      version,
    });
    return this.sendRequest(options);
  }
  async getTransactionsById(id: string): Promise<any> {
    const data = { id };
    const options = this.createRequestConfig("/transactions/getById", data);
    return this.sendRequest(options);
  }

  async getTransactionsByCustomer(
    customer: string,
    page: number,
    limit: number
  ): Promise<any> {
    const data = { customer, page, limit };
    const options = this.createRequestConfig(
      "/transactions/getByCustomer",
      data
    );
    return this.sendRequest(options);
  }

  async getTransactionsByAccount(
    account: string,
    page: number,
    limit: number
  ): Promise<any> {
    const data = { account, page, limit };
    const options = this.createRequestConfig(
      "/transactions/getByAccount",
      data
    );
    return this.sendRequest(options);
  }

  async getTransactionsByBank(
    bank: string,
    page: number,
    limit: number
  ): Promise<any> {
    const data = { bank, page, limit };
    const options = this.createRequestConfig("/transactions/getByBank", data);
    return this.sendRequest(options);
  }

  async getTransactionsByDate(
    from: string,
    to: string,
    page: number,
    limit: number
  ): Promise<any> {
    const data = { from, to, page, limit };
    const options = this.createRequestConfig("/transactions/getByDate", data);
    return this.sendRequest(options);
  }

  async getTransactionsByCustomerDate(
    from: string,
    to: string,
    page: number,
    limit: number,
    customer_id: string
  ): Promise<any> {
    const data = { from, to, page, limit, customer_id };
    const options = this.createRequestConfig(
      "/transactions/getByCustomerDate",
      data
    );
    return this.sendRequest(options);
  }

  async processTransactions(
    account: string,
    page: number,
    limit: number
  ): Promise<any> {
    const data = { account, page, limit };
    const options = this.createRequestConfig("/transactions/process", data);
    return this.sendRequest(options);
  }

  async getTransactionsByNuban(
    nuban: string,
    page: number,
    limit: number
  ): Promise<any> {
    const data = { nuban, page, limit };
    const options = this.createRequestConfig("/transactions/getByNuban", data);
    return this.sendRequest(options);
  }

  async transactionsByOptions(customerData: {
    first_name: string;
    last_name: string;
  }): Promise<any> {
    const data = { customerData };
    const options = this.createRequestConfig("/transactions/byOptions", data);
    return this.sendRequest(options);
  }

  async transactionsDownload(
    record: string,
    downloadType: string
  ): Promise<any> {
    const data = { record, downloadType };
    const options = this.createRequestConfig("/transactions/download", data);
    return this.sendRequest(options);
  }

  async recordDownload(downloadType: string): Promise<any> {
    const data = { downloadType };
    const options = this.createRequestConfig("/record/download", data);
    return this.sendRequest(options);
  }
  async processSpendingPatterns(customer_id: string): Promise<any> {
    const data = { customer_id };
    const options = this.createRequestConfig(
      "/spending-patterns/process",
      data
    );
    return this.sendRequest(options);
  }

  async getAllSpendingPatterns(page: number, limit: number): Promise<any> {
    const data = { page, limit };
    const options = this.createRequestConfig("/spending-patterns/getAll", data);
    return this.sendRequest(options);
  }

  async getSpendingPatternsById(id: string): Promise<any> {
    const data = { id };
    const options = this.createRequestConfig(
      "/spending-patterns/getById",
      data
    );
    return this.sendRequest(options);
  }

  async getSpendingPatternsByCustomer(customer_id: string): Promise<any> {
    const data = { customer_id };
    const options = this.createRequestConfig(
      "/spending-patterns/getByCustomer",
      data
    );
    return this.sendRequest(options);
  }

  async getSpendingPatternsByDate(
    from: string,
    to: string,
    page: number
  ): Promise<any> {
    const data = { from, to, page };
    const options = this.createRequestConfig(
      "/spending-patterns/getByDate",
      data
    );
    return this.sendRequest(options);
  }
  async createPaymentLink(paymentData: any): Promise<any> {
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

  async verifyPayment(paymentId: string): Promise<any> {
    const url = "/pay/verify";
    const data = { payment_id: paymentId };
    return this.sendRequest(this.createRequestConfig(url, data));
  }

  async listPayments(paymentId: string): Promise<any> {
    const url = "/pay/list";
    const data = { payment_id: paymentId };
    return this.sendRequest(this.createRequestConfig(url, data));
  }

  async getPaymentById(paymentId: string): Promise<any> {
    const url = "/pay/get/id";
    const data = { payment_id: paymentId };
    return this.sendRequest(this.createRequestConfig(url, data));
  }

  async verifyPaymentByOptions(
    options: string,
    page: number,
    limit: number
  ): Promise<any> {
    const url = "/pay/verifyByOptions";
    const data = { options, page, limit };
    return this.sendRequest(this.createRequestConfig(url, data));
  }
  async getAccountDetails(account: string): Promise<any> {
    const encodedParams = new URLSearchParams();
    encodedParams.set("account", account);
    const url = "/accounts/getAccountDetails";
    return this.sendRequest(this.createRequestConfig(url, encodedParams));
  }

  async getAccountById(id: string): Promise<any> {
    const encodedParams = new URLSearchParams();
    encodedParams.set("id", id);
    const url = "/accounts/getById";
    return this.sendRequest(this.createRequestConfig(url, encodedParams));
  }

  async getAccountsByCustomer(customer: string): Promise<any> {
    const data = { customer };
    const url = "/accounts/getByCustomer";
    return this.sendRequest(this.createRequestConfig(url, data));
  }

  async getAccountsByName(name: string): Promise<any> {
    const encodedParams = new URLSearchParams();
    encodedParams.set("name", name);
    const url = "/accounts/getByName";
    return this.sendRequest(this.createRequestConfig(url, encodedParams));
  }

  async getAccountsByBank(bank: string): Promise<any> {
    const encodedParams = new URLSearchParams();
    encodedParams.set("bank", bank);
    const url = "/accounts/getByBank";
    return this.sendRequest(this.createRequestConfig(url, encodedParams));
  }

  async getAccountsByBalance(balance: string): Promise<any> {
    const encodedParams = new URLSearchParams();
    encodedParams.set("balance", balance);
    const url = "/accounts/getByBalance";
    return this.sendRequest(this.createRequestConfig(url, encodedParams));
  }

  async getAccountsByCustomerDate(
    from: string,
    to: string,
    customer: string
  ): Promise<any> {
    const encodedParams = new URLSearchParams();
    encodedParams.set("from", from);
    encodedParams.set("to", to);
    encodedParams.set("customer", customer);
    const url = "/accounts/getByCustomerDate";
    return this.sendRequest(this.createRequestConfig(url, encodedParams));
  }
  async listCustomers(page: number, limit: number): Promise<any> {
    const encodedParams = new URLSearchParams();
    encodedParams.set("page", page.toString());
    encodedParams.set("limit", limit.toString());
    const url = "/customers/list";
    return this.sendRequest(this.createRequestConfig(url, encodedParams));
  }

  async findCustomersByKeyValue(key: string, value: string): Promise<any> {
    const encodedParams = new URLSearchParams();
    encodedParams.set("key", key);
    encodedParams.set("value", value);
    const url = "/customers/find-customers-by";
    return this.sendRequest(this.createRequestConfig(url, encodedParams));
  }

  async flagCustomer(bank: string, customer: string): Promise<any> {
    const encodedParams = new URLSearchParams();
    encodedParams.set("bank", bank);
    encodedParams.set("customer", customer);
    const url = "/customers/flag";
    return this.sendRequest(this.createRequestConfig(url, encodedParams));
  }

  async unflagCustomer(
    bank: string,
    customer: string,
    unflag: boolean
  ): Promise<any> {
    const data = { bank, customer, unflag };
    const url = "/customers/unflag";
    return this.sendRequest(this.createRequestConfig(url, data));
  }

  async removeCustomer(customer: string): Promise<any> {
    const data = { customer };
    const url = "/customers/remove";
    return this.sendRequest(this.createRequestConfig(url, data));
  }
  async getWallet(): Promise<any> {
    const options = this.createRequestConfig("/wallet/get");
    return this.sendRequest(options);
  }

  async listWallet(
    page: number,
    limit: number,
    project: string,
    id: string,
    term: string
  ): Promise<any> {
    const data = { page, limit, project, id, term };
    const options = this.createRequestConfig("/wallet/list", data);
    return this.sendRequest(options);
  }

  async checkWalletBalance(project: string, id: string): Promise<any> {
    const data = { project, id };
    const options = this.createRequestConfig("/wallet/balance/check", data);
    return this.sendRequest(options);
  }
  async createSandboxCustomers(customers: any[]): Promise<any> {
    const options = this.createRequestConfig(
      "/sandbox/customers/create",
      customers
    );
    return this.sendRequest(options);
  }

  async listSandboxCustomers(): Promise<any> {
    const options = this.createRequestConfig("/sandbox/customers/list");
    return this.sendRequest(options);
  }

  async getSandboxCustomer(customer: string): Promise<any> {
    const data = { customer };
    const options = this.createRequestConfig("/sandbox/customers/get", data);
    return this.sendRequest(options);
  }

  async generateSandboxCustomers(number: number): Promise<any> {
    const data = { create: true, number };
    const options = this.createRequestConfig(
      "/sandbox/customers/generate",
      data
    );
    return this.sendRequest(options);
  }
}

export default OkraClient;
