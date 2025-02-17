import '../styles/TransactionTable.css';
import { useContext, useMemo, useState } from 'react';
import { TransactionsContext } from '../contexts/TransactionsContext.js';
import TransactionList from './TransactionList.jsx';
import { ThemeContext } from '../contexts/ThemeContext';

function TransactionTable() {
  // Access the contexts
  const { transactions, setTransactions } = useContext(TransactionsContext);
  const { theme, setTheme } = useContext(ThemeContext);

  // Memoize the totals to optimize performance
  const getTotals = useMemo(() => {
    const totals = { totalIncome: 0, totalExpenses: 0, netBalance: 0 };
    // Calculate total income and expenses
    transactions.forEach((trans) => {
      trans.type === 'Expense'
        ? (totals.totalExpenses += trans.amount)
        : (totals.totalIncome += trans.amount);
    });
    // Format totals
    const formatAmount = (amount) =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
    // Return the totals
    totals.netBalance = formatAmount(totals.totalIncome - totals.totalExpenses);
    totals.totalExpenses = formatAmount(totals.totalExpenses);
    totals.totalIncome = formatAmount(totals.totalIncome);
    return totals;
  }, [transactions]);

  const h1Style = {
    fontSize: '14px',
    width: '7rem',
    fontWeight: '600',
    color: theme === 'light' ? '#000' : '#fff',
  };
  const h2Style = {
    fontSize: '13px',
    fontWeight: '500',
    color: theme === 'light' ? '#000' : '#fff',
  };

  return (
    <>
      <div
        style={{
          backgroundColor: theme === 'light' ? '#fff' : '#384152',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)',
          width: '100%',
        }}
      >
        {/* Heading */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: theme === 'light' ? '#FAFAFA' : '#3F4753',
            borderRadius: '10px 10px 0 0 ',
            padding: '1rem 5rem',
          }}
        >
          <h1 style={h1Style}>Type</h1>
          <h1 style={h1Style}>Amount</h1>
          <h1 style={h1Style}>Date</h1>
          <h1 style={h1Style}>Category</h1>
          <h1 style={h1Style}>Description</h1>
        </div>
        {/* List */}
        <TransactionList />
        {/* Totals */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: theme === 'light' ? '#FAFAFA' : '#3F4753',
            borderRadius: '0 0 10px 10px',
            padding: '1rem 5rem',
          }}
        >
          <h2 style={h2Style}>Total Income: {getTotals.totalIncome}</h2>
          <h2 style={h2Style}>Total Expenses: {getTotals.totalExpenses}</h2>
          <h2 style={h2Style}>Net Balance: {getTotals.netBalance}</h2>
        </div>
      </div>
    </>
  );
}

export default TransactionTable;
