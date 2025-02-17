# Expendo

A finance tracking application that helps users manage their finances by recording income and expenses. Built with React, this app features light/dark mode, persistent data storage, and intuitive transaction management.

<img width="1440" alt="Image" src="https://github.com/user-attachments/assets/8d4bcefc-d891-4f23-be68-8c04ba083598" />

<img width="1440" alt="Image" src="https://github.com/user-attachments/assets/b81c3e00-a4f1-4a3d-9b0b-930143dda774" />

### Header

- **Logo & App Name**: Clean branding
- **Theme Toggle**: Switch between light and dark modes
  - Uses `useContext` and `useState` for theme management
  - Persists user preference via `localStorage`

### Add Transaction Form

- **Input Fields**: Record transaction details including:
  - Type (Income/Expense)
  - Amount
  - Date
  - Category (e.g., Groceries, Rent, Salary)
  - Description
- **Data Persistence**: Transactions are saved in `localStorage` for continuity between sessions

### Transactions Table

- **Transaction List**:
- View all recorded transactions in a clean, tabular format
- Transactions are sorted by date, with sorting optimized using `useMemo`
- **Interactive UI**:
  - Hover to reveal delete option (× icon)
  - Instant removal of transactions
- **Financial Summary**:
  - Total Income
  - Total Expenses
  - Net Balance
  - Optimized calculations using `useMemo` for performance

### Tech

- React
- JavaScript (ES6+)
- Hooks: `useState`, `useContext`, `useEffect`, `useMemo`
- Vite
- CSS

## Future Enhancements

- **Improved Form Validation**: Better error handling and user feedback
- **Mobile Responsiveness**: Optimize UI for smaller screens
- **Edit Transactions**: Modify existing entries
- **Filtering**: Sort transactions by type, date, or category
- **Data Visualization**:
  - Pie charts for category breakdown
  - Bar graphs for income vs. expenses over time
- **Database Integration**: Replace `localStorage` with a backend solution

## Installation

1. Clone the repository
2. Install dependencies

- cd expendo-finance-tracker
- npm install

3. Start the development server:

- npm run dev
