import type { TransactionHistoryItem } from '../types/types';

type TransactionHistoryProps = {
  history: TransactionHistoryItem[];
};

const TransactionHistory = ({ history }: TransactionHistoryProps) => {
  // Letzte 5 Elemente holen und umkehren, sodass das neuste oben steht
  const lastFive = [...history].slice(-5).reverse();

  return (
    <section>
      <h3>Letzte Transaktionen (max. 5)</h3>
      {lastFive.length === 0 ? (
        <p>Keine Transaktionen vorhanden.</p>
      ) : (
        <ul>
          {lastFive.map((tx, index) => (
            <li key={index}>
              <strong>An:</strong> {tx.to} &mdash; <strong>Betrag:</strong> CHF {tx.amount.toFixed(2)} <br />
              <small>Kontostand danach: CHF {tx.balanceAfterTransaction.toFixed(2)}</small>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TransactionHistory;