import { useContext, useMemo, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TransactionsContext } from '../contexts/TransactionsContext';

function TransactionList() {
  const [hoverId, setHoverId] = useState('');
  // Access the contexts
  const { theme, setTheme } = useContext(ThemeContext);
  const { transactions, setTransactions } = useContext(TransactionsContext);

  // Optimize sorting with useMemo so we only sort when the transactions state is modified
  const sortTransactions = () =>
    useMemo(() => {
      return [...transactions].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    }, [transactions]);

  // Return the styles transaction type
  const getTransType = (transType) => {
    return (
      <span
        style={{
          color: transType === 'Expense' ? '#FF775C' : '#15934D',
          fontWeight: '500',
        }}
      >
        {transType}
      </span>
    );
  };

  // Delete a transaction from the transaction state
  const deleteTrans = (event) => {
    // Get the id of the transaction
    const deleteId = event.target.value;
    // Find the index using the id
    const deleteIndex = transactions.findIndex(
      (trans) => trans.id === deleteId
    );
    // Delete the transaction
    setTransactions((prev) => [
      ...prev.slice(0, deleteIndex),
      ...prev.slice(deleteIndex + 1),
    ]);
  };

  const pStyle = {
    fontSize: '12px',
    width: '7rem',
    color: theme === 'light' ? '#4b4b4b' : '#fff',
  };

  const hrStyle = {
    margin: '0',
    border: 'none',
    height: '1px',
    backgroundColor: '#e0e0e0',
    borderRadius: '9999px',
  };

  return (
    <>
      <div
        className="scrollable-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '10px',
          maxHeight: '23.5rem',
          overflowY: 'auto',
        }}
      >
        {transactions.length > 0 ? (
          sortTransactions().map((trans, index) => (
            <div
              key={trans.id}
              onMouseEnter={() => setHoverId(trans.id)}
              onMouseLeave={() => setHoverId('')}
              style={{ padding: '0 4.5rem 0 5rem' }}
            >
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  minHeight: '3.5rem',
                  position: 'relative',
                }}
              >
                {/* Currently hovering this item ? display x : don't */}
                {hoverId === trans.id ? (
                  <button
                    value={trans.id}
                    onClick={deleteTrans}
                    style={{
                      position: 'absolute',
                      left: '-1.5rem',
                      color: theme === 'light' ? '#4b4b4b' : '#fff',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    &times;
                  </button>
                ) : (
                  ''
                )}
                <p style={pStyle}>{getTransType(trans.type)}</p>
                <p style={pStyle}>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(trans.amount)}
                </p>
                <p style={pStyle}>
                  {(() => {
                    const [year, month, day] = trans.date.split('-');
                    return new Date(year, month - 1, day).toLocaleDateString(
                      'en-GB',
                      {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      }
                    );
                  })()}
                </p>
                <p style={pStyle}>{trans.category}</p>
                <p style={pStyle}>{trans.description}</p>
              </div>{' '}
              {index != transactions.length - 1 && (
                <span>
                  <hr style={hrStyle}></hr>
                </span>
              )}
            </div>
          ))
        ) : (
          <p
            style={{
              fontSize: '12px',
              color: theme === 'light' ? '#4b4b4b' : '#fff',
              margin: '2rem 0',
              padding: '0 4.5rem 0 5rem',
            }}
          >
            No transactions yet...
          </p>
        )}
      </div>
    </>
  );
}

export default TransactionList;
