import { useState } from 'react';
import { mockUser } from '../data/mock-user';
import type{ Account, TransactionHistoryItem } from '../types/types';
import AccountInfo from '../components/AccountInfo.tsx';
import TransactionForm from '../components/TransactionForm.tsx';
import TransactionHistory from '../components/TransactionHistory.tsx';

const Dashboard = () => {
  // State mit Mock-Daten initialisieren
  const [account, setAccount] = useState<Account>(mockUser);

  // Transaktion durchführen und State aktualisieren
  const handleTransaction = (to: string, amount: number) => {
    const newBalance = account.balance - amount;
    
    const newTransaction: TransactionHistoryItem = {
      from: account.accountNr,
      to,
      amount,
      balanceAfterTransaction: newBalance,
    };

    setAccount((prevAccount) => ({
      ...prevAccount,
      balance: newBalance,
      // Neue Transaktion an die History anhängen
      transactionHistory:[...prevAccount.transactionHistory, newTransaction],
    }));
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <AccountInfo account={account} />
      <TransactionForm currentBalance={account.balance} onTransaction={handleTransaction} />
      <TransactionHistory history={account.transactionHistory} />
    </div>
  );
};

export default Dashboard;