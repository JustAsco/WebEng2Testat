export const mockUser = {
  owner: {
    name: 'John',
    id: '1',
    email: 'john@bor.com',
    password: 'uqx4wcn4fzq7MZB*chm',
  },
  accountNr: '0001',
  balance: 1000,
  transactionHistory: [
    {
      from: '0001',
      to: '0003',
      amount: 300,
      balanceAfterTransaction: 1000,
    },
    {
      from: '0004',
      to: '0001',
      amount: 100,
      balanceAfterTransaction: 1300,
    },
  ],
};
