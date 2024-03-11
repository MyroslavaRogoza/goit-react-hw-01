import css from "./TransactionTable.module.css";
const TransactionTable = ({ children }) => {
  return (
    <table className={css.transactionTable}>
      <thead className={css.transactionHead}>
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
export default TransactionTable;
