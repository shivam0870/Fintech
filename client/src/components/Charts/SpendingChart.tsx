import React, { useMemo } from "react";
import { ArcElement, Tooltip, Legend, Title, ChartOptions, Chart } from "chart.js";
import { Pie } from "react-chartjs-2";
import { SpendingByCategory } from "../../types";


Chart.register(ArcElement, Tooltip, Legend, Title);

const SpendingChart: React.FC = () => {
  const dummyData: SpendingByCategory[] = [
    { category: "Food", amount: 300, transactionCount: 5 },
    { category: "Transport", amount: 200, transactionCount: 8 },
    { category: "Entertainment", amount: 150, transactionCount: 3 },
    { category: "Bills", amount: 400, transactionCount: 4 },
    { category: "Shopping", amount: 250, transactionCount: 6 },
  ];

  const sanitizedData = dummyData.filter(
    (item) => item.amount > 0 && item.transactionCount > 0
  );

  const chartData = useMemo(() => {
    return {
      labels: sanitizedData.map((item) => item.category),
      datasets: [
        {
          data: sanitizedData.map((item) => item.amount),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
          ],
          hoverBackgroundColor: [
            "#FF4D70",
            "#339FEA",
            "#FFC745",
            "#48AFAF",
            "#8F5FFF",
          ],
        },
      ],
    };
  }, [sanitizedData]);

  const chartOptions: ChartOptions<"pie"> = useMemo(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Spending by Category",
          font: {
            size: 18,
          },
        },
        tooltip: {
          callbacks: {
            label: (context: any) => {
              const index = context.dataIndex;
              const category = sanitizedData[index];
              return `${category.category}: $${category.amount} (${category.transactionCount} transactions)`;
            },
            afterLabel: (context: any) => {
              const index = context.dataIndex;
              const category = sanitizedData[index];
              const percentage = (
                (category.amount /
                  sanitizedData.reduce((sum, item) => sum + item.amount, 0)) *
                100
              ).toFixed(2);
              return `Percentage: ${percentage}%`;
            },
          },
        },
        legend: {
          position: "bottom",
        },
      },
      animation: {
        duration: 1000,
        easing: "easeOutBounce",
      },
    };
  }, [sanitizedData]);

  return (
    <div className="relative h-64">
      <Pie data={chartData} options={chartOptions as any} /> 
    </div>
  );
};

export default SpendingChart;
