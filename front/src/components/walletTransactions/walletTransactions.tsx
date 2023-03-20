import React from "react";
import { WalletProfileProps } from "../interfaces/walletProfile.props";
import "./walletTransactions.css";
import { Transaction } from "../transaction/transaction";

export const WalletTransactions: React.FC<WalletProfileProps> = ({ address, coins }) => {
  return (
    <div>
      <h1 className="wallet-transaction-label">Transactions</h1>
      {address.txrefs.map((tx) => (
        <Transaction key={tx.tx_hash} transaction={tx} coins={coins}/>
      ))}
    </div>
  )
};