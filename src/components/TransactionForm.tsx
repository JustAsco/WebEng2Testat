import { useState } from 'react';

type TransactionFormProps = {
  currentBalance: number;
  onTransaction: (to: string, amount: number) => void;
};

const TransactionForm = ({ currentBalance, onTransaction }: TransactionFormProps) => {
  const [toAccount, setToAccount] = useState('');
  const[amountStr, setAmountStr] = useState('');

  // Typ-Cast und Grundvalidierung
  const amount = Number(amountStr);
  const isValidAmount = !isNaN(amount) && amount > 0;
  
  // Vorschau des Kontostands berechnen
  const balanceAfter = currentBalance - (isValidAmount ? amount : 0);
  
  // Überprüfen, ob das Formular gültig ist (Zielkonto existiert, positiver Betrag, kein Negativsaldo)
  const isFormValid = toAccount.trim() !== '' && isValidAmount && balanceAfter >= 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      onTransaction(toAccount.trim(), amount);
      // Felder zurücksetzen
      setToAccount('');
      setAmountStr('');
    }
  };

  return (
    <section>
      <h3>Neue Überweisung</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="toAccount">Zielkonto: </label>
          <input
            id="toAccount"
            type="text"
            value={toAccount}
            onChange={(e) => setToAccount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Betrag (CHF): </label>
          <input
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={amountStr}
            onChange={(e) => setAmountStr(e.target.value)}
            required
          />
        </div>
        
        <div className="preview">
          <p>
            <strong>Vorschau Kontostand:</strong> CHF {balanceAfter.toFixed(2)}
          </p>
          {balanceAfter < 0 && (
            <p style={{ color: 'red', margin: 0, fontSize: '0.9rem' }}>
              Ungenügender Kontostand für diese Transaktion!
            </p>
          )}
        </div>

        <button type="submit" disabled={!isFormValid}>
          Überweisen
        </button>
      </form>
    </section>
  );
};

export default TransactionForm;