import React from 'react';
import SpendingChart from '../Charts/SpendingChart';

const Dashboard: React.FC = () => {
  const recentTransactions = [
    { date: "2024-12-01", category: "Food", amount: 50.00, description: "Dinner at restaurant" },
    { date: "2024-12-02", category: "Transport", amount: 15.00, description: "Taxi fare" },
    { date: "2024-12-03", category: "Entertainment", amount: 40.00, description: "Movie tickets" },
    { date: "2024-12-05", category: "Bills", amount: 120.00, description: "Electricity bill" },
    { date: "2024-12-06", category: "Shopping", amount: 200.00, description: "Clothing purchase" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Financial Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="card">
          <h2 className="mb-2 text-lg font-semibold text-gray-700">Total Balance</h2>
          <p className="text-2xl font-bold text-primary-600">$24,500.00</p>
        </div>
        
        <div className="card">
          <h2 className="mb-2 text-lg font-semibold text-gray-700">Monthly Spending</h2>
          <p className="text-2xl font-bold text-primary-600">$3,250.00</p>
        </div>
        
        <div className="card">
          <h2 className="mb-2 text-lg font-semibold text-gray-700">Savings Goal</h2>
          <p className="text-2xl font-bold text-primary-600">75%</p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="mb-4 text-lg font-semibold text-gray-700">Spending by Category</h2>
          <SpendingChart />
        </div>
        
        <div className="card">
          <h2 className="mb-4 text-lg font-semibold text-gray-700">Recent Transactions</h2>
          <div className="overflow-auto max-h-72">
            <ul className="space-y-4">
              {recentTransactions.map((transaction, index) => (
                <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                  <p className="text-sm text-gray-600">{transaction.date}</p>
                  <p className="text-lg font-semibold text-gray-800">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.category}</p>
                  <p className="text-xl font-bold text-primary-600">${transaction.amount.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
