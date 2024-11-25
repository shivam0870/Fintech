import React from 'react';
import SpendingChart from '../Charts/SpendingChart';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Financial Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Summary Cards */}
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

      {/* Charts Section */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="mb-4 text-lg font-semibold text-gray-700">Spending by Category</h2>
          <SpendingChart />
        </div>
        
        <div className="card">
          <h2 className="mb-4 text-lg font-semibold text-gray-700">Recent Transactions</h2>
          {/* Transaction list will go here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 