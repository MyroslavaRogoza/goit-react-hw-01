import css from './TransactionItem.module.css'
const TransactionItem = ({type, amount, currency}) => {
  return (
    <>
    <td className={css.transactionData}>{type}</td>
    <td className={css.transactionData}>{amount}</td>
    <td className={css.transactionData}>{currency}</td>
  </>
  )
}

export default TransactionItem