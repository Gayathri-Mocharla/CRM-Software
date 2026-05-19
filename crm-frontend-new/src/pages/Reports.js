import React from "react";
import "./Reports.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";

function Reports() {

  const salesData = [

    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4500 },
    { month: "May", sales: 6000 }

  ];

  const revenueData = [

    { month: "Jan", revenue: 2400 },
    { month: "Feb", revenue: 1398 },
    { month: "Mar", revenue: 3800 },
    { month: "Apr", revenue: 2908 },
    { month: "May", revenue: 4800 }

  ];

  const customerData = [

    { name: "Active", value: 70 },
    { name: "Pending", value: 20 },
    { name: "Inactive", value: 10 }

  ];

  const COLORS = [
    "#0066ff",
    "#ff9800",
    "#ff3b3b"
  ];

  return (

    <div className="reports-page">

      <div className="reports-header">

        <h1>Reports & Analytics 📊</h1>

        <p>
          Visual overview of your CRM performance
        </p>

      </div>

      {/* TOP CARDS */}

      <div className="report-cards">

        <div className="report-card blue">

          <h2>$25K</h2>

          <p>Total Revenue</p>

        </div>

        <div className="report-card green">

          <h2>320</h2>

          <p>Total Customers</p>

        </div>

        <div className="report-card purple">

          <h2>78%</h2>

          <p>Growth Rate</p>

        </div>

      </div>

      {/* CHARTS */}

      <div className="charts-grid">

        {/* BAR CHART */}

        <div className="chart-box">

          <h2>Monthly Sales</h2>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={salesData}>

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="sales"
                fill="#0066ff"
                radius={[10, 10, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* LINE CHART */}

        <div className="chart-box">

          <h2>Revenue Growth</h2>

          <ResponsiveContainer width="100%" height={300}>

            <LineChart data={revenueData}>

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#00b894"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* PIE CHART */}

        <div className="chart-box pie-box">

          <h2>Customer Status</h2>

          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={customerData}
                cx="50%"
                cy="50%"
                outerRadius={90}
                dataKey="value"
                label
              >

                {customerData.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />

                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );
}

export default Reports;
