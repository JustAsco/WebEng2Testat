import type { Account } from '../types/types';

type AccountInfoProps = {
  account: Account;
};

const AccountInfo = ({ account }: AccountInfoProps) => {
  return (
    <section>
      <h3>Kontoinformationen</h3>
      <p><strong>Inhaber:</strong> {account.owner.name}</p>
      <p><strong>Kontonummer:</strong> {account.accountNr}</p>
      <p><strong>Aktueller Kontostand:</strong> CHF {account.balance.toFixed(2)}</p>
    </section>
  );
};

export default AccountInfo; 