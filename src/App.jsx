import './App.css';
import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import TransactionTable from './components/TransactionTable';
import { TransactionsContext } from './contexts/TransactionsContext';
import { ThemeContext } from './contexts/ThemeContext';
import { useEffect, useState } from 'react';

function App() {
  // Check localStorage for a theme else use 'light
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );
  // Initalize the transactions with some data
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem('transactions')) || [
      {
        type: 'Expense',
        amount: 30.37,
        date: '2025-08-18',
        category: 'Groceries',
        description: 'Valentines day flowers and milk',
        id: crypto.randomUUID(),
      },
      {
        type: 'Expense',
        amount: 15.99,
        date: '2025-08-20',
        category: 'Entertainment',
        description: 'Movie tickets for a date night',
        id: crypto.randomUUID(),
      },
      {
        type: 'Expense',
        amount: 50.0,
        date: '2025-08-22',
        category: 'Dining',
        description: 'Dinner at a nice restaurant',
        id: crypto.randomUUID(),
      },
      {
        type: 'Expense',
        amount: 120.0,
        date: '2025-08-25',
        category: 'Shopping',
        description: 'New clothes for summer',
        id: crypto.randomUUID(),
      },
      {
        type: 'Income',
        amount: 2000.0,
        date: '2025-08-30',
        category: 'Salary',
        description: 'Monthly salary payment',
        id: crypto.randomUUID(),
      },
      {
        type: 'Expense',
        amount: 9.99,
        date: '2025-09-02',
        category: 'Entertainment',
        description: 'Streaming service subscription',
        id: crypto.randomUUID(),
      },
      {
        type: 'Expense',
        amount: 75.0,
        date: '2025-09-05',
        category: 'Groceries',
        description: 'Weekly grocery shopping',
        id: crypto.randomUUID(),
      },
      {
        type: 'Income',
        amount: 150.0,
        date: '2025-09-10',
        category: 'Freelance',
        description: 'Freelance web design work',
        id: crypto.randomUUID(),
      },
      {
        type: 'Expense',
        amount: 200.0,
        date: '2025-09-12',
        category: 'Rent',
        description: 'Monthly rent payment',
        id: crypto.randomUUID(),
      },
      {
        type: 'Expense',
        amount: 40.0,
        date: '2025-09-15',
        category: 'Dining',
        description: 'Lunch with friends',
        id: crypto.randomUUID(),
      },
      {
        type: 'Income',
        amount: 500.0,
        date: '2025-09-18',
        category: 'Freelance',
        description: 'Freelance consulting work',
        id: crypto.randomUUID(),
      },
      {
        type: 'Expense',
        amount: 12.5,
        date: '2025-09-20',
        category: 'Transportation',
        description: 'Gas for the car',
        id: crypto.randomUUID(),
      },
    ]
  );

  // Update the theme in local storage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Update transactions in local storage when it changes
  useEffect(() => {
    transactions.length > 0 &&
      localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  return (
    <>
      <div
        style={{
          backgroundColor: theme === 'light' ? '#fff' : '#384152',
          height: '100vh',
        }}
      >
        <ThemeContext value={{ theme, setTheme }}>
          <TransactionsContext value={{ transactions, setTransactions }}>
            <Header />
            <main
              style={{
                display: 'flex',
                gap: '7rem',
                padding: '3rem 6rem',
                maxHeight: '100vh',
              }}
            >
              {/* Form */}
              <div>
                <h1
                  style={{
                    fontSize: '20px',
                    margin: '0 0 2rem 0',
                    color: theme === 'light' ? '#000' : '#fff',
                  }}
                >
                  Add a Transaction
                </h1>
                <AddTransaction />
              </div>
              {/* Transactions */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  <h1
                    style={{
                      fontSize: '20px',
                      margin: '0 0 2rem 0',
                      color: theme === 'light' ? '#000' : '#fff',
                    }}
                  >
                    My Transactions
                  </h1>
                  <span
                    style={{
                      marginLeft: 'auto',
                      color: theme === 'light' ? '#000' : '#fff',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor:
                          theme === 'light' ? '#fafafa' : '#404753',
                        padding: '8px 15px',
                        borderRadius: '10px',
                        color: theme === 'light' ? '#000' : '#fff',
                        fontSize: '13px',
                        fontWeight: '500',
                        boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      <label>Filter</label>
                      <select
                        style={{
                          backgroundColor:
                            theme === 'light' ? '#fafafa' : '#404753',
                          border: 'none',
                          color: theme === 'light' ? '#000' : '#fff',
                          cursor: 'pointer',
                        }}
                      >
                        {/* TODO: Add categories */}
                      </select>
                    </div>
                  </span>
                </div>
                <div style={{ display: 'flex' }}>
                  <TransactionTable />
                </div>
              </div>
            </main>
          </TransactionsContext>
        </ThemeContext>
      </div>
    </>
  );
}

export default App;
