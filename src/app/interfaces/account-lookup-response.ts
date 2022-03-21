import { TransactionLookupResponse } from './transaction-lookup-response';

export interface AccountLookupResponse {
  accountNumber: number;
  customerName: string;

  accountBalance: number;
  transactions: TransactionLookupResponse[];
}
