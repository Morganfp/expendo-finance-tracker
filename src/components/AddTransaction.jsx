import { useContext, useEffect, useState } from 'react';
import { TransactionsContext } from '../contexts/TransactionsContext';
import { ThemeContext } from '../contexts/ThemeContext';

function AddTransaction() {
  // Access the contexts
  const { theme, setTheme } = useContext(ThemeContext);
  const { transactions, setTransactions } = useContext(TransactionsContext);

  const [formData, setFormData] = useState({
    type: '',
    amount: '',
    date: '',
    category: '',
    description: '',
  });

  // Add a new transaction to the transactions state
  const handleSubmit = (event) => {
    event.preventDefault();
    setTransactions((prev) => [
      // Assign a UUID to each transaction
      { ...formData, id: crypto.randomUUID() },
      ...prev,
    ]);
    // Clear the input fields after submission
    formData.type = '';
    formData.amount = '';
    formData.date = '';
    formData.category = '';
    formData.description = '';
  };

  const handleChange = (event) => {
    const eventName = event.target.name;
    const eventValue = event.target.value;
    if (eventName === 'type') {
      setFormData((prevData) => ({ ...prevData, type: eventValue }));
    } else if (eventName === 'amount') {
      setFormData((prevData) => ({ ...prevData, amount: Number(eventValue) }));
    } else if (eventName === 'date') {
      setFormData((prevData) => ({ ...prevData, date: eventValue }));
    } else if (eventName === 'category') {
      setFormData((prevData) => ({ ...prevData, category: eventValue }));
    } else if (eventName === 'description') {
      setFormData((prevData) => ({ ...prevData, description: eventValue }));
    }
  };

  const inputStyle = {
    border: 'none',
    padding: '.4rem .5rem',
    borderRadius: '5px',
  };

  const labelStyle = {
    fontSize: '14px',
    marginBottom: '7px',
    fontWeight: '400',
    color: theme === 'light' ? '#000' : '#fff',
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: theme === 'light' ? '#F3F5F4' : '#323943',
          padding: '2rem 4rem',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
          width: '14rem',
          boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Type */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={labelStyle}>Type</label>
          <select
            value={formData.type}
            name="type"
            onChange={handleChange}
            style={inputStyle}
            required
          >
            <option value="" hidden></option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        {/* Amount */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={labelStyle}>Amount</label>
          <input
            value={formData.amount}
            name="amount"
            onChange={handleChange}
            type="number"
            style={inputStyle}
            required
          ></input>
        </div>
        {/* date */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={labelStyle}>Date</label>
          <input
            value={formData.date}
            name="date"
            type="date"
            onChange={handleChange}
            style={inputStyle}
            required
          ></input>
        </div>
        {/* Category */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={labelStyle}>Category</label>
          <select
            value={formData.category}
            name="category"
            onChange={handleChange}
            style={inputStyle}
            required
          >
            <option value="" hidden></option>
            <option value="Groceries">Groceries</option>
            <option value="Dining">Dining</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Transportation">Transportation</option>
            <option value="Rent">Rent</option>
            <option value="Utilities">Utilities</option>
            <option value="Insurance">Insurance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Subscriptions">Subscriptions</option>
            <option value="Shopping">Shopping</option>
            <option value="Education">Education</option>
            <option value="Debt Payments">Debt Payments</option>
            <option value="Savings">Savings</option>
            <option value="Investment">Investment</option>
            <option value="Gifts & Donations">Gifts & Donations</option>
            <option value="Travel">Travel</option>
            <option value="Salary">Salary</option>
            <option value="Freelance">Freelance</option>
            <option value="Bonus">Bonus</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {/* Description */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={labelStyle}>Description</label>
          <input
            type="textarea"
            value={formData.description}
            name="description"
            onChange={handleChange}
            style={inputStyle}
            required
          ></input>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#4C85BE',
            border: 'none',
            padding: '.5rem',
            borderRadius: '5px',
            fontWeight: '600',
            color: '#fff',
            width: '6rem',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default AddTransaction;
