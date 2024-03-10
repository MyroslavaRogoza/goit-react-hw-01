import css from "./TransactionHistory.module.css";
import TransactionItem from "../TransactionItem/TransactionItem";
const TransactionTable = ({ children }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {children}
    </table>
  );
};
const TransactionHistory = ({ items }) => {
  const transactionMarkup = items.map((item) => {
    return (
      <tr key={item.id}>
        <TransactionItem
          type={item.type}
          amount={item.amount}
          currency={item.currency}
        />
      </tr>
    );
  });
  return (
    <TransactionTable>
      <tbody>{transactionMarkup}</tbody>
    </TransactionTable>
  );
};

export default TransactionHistory;
