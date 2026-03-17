export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

// does not do much typechecking, but is good for readability
export type AccountNr = string;

export type Account = {
  owner: User;
  accountNr: AccountNr;
  balance: number;
  transactionHistory: TransactionHistoryItem[];
};

export type TransactionHistoryItem = {
  from: AccountNr;
  to: AccountNr;
  amount: number;
  // date: Date; // not used in prototype
  balanceAfterTransaction: number;
};
