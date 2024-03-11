import css from "./TransactionHistory.module.css";
import TransactionItem from "../TransactionItem/TransactionItem";
import TransactionTable from "../TransactionTable/TransactionTable";
const TransactionHistory = ({ items }) => {
  const transactionMarkup = items.map((item) => {
    return (
      <tr key={item.id} className={css.transactionTableRow}>
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
