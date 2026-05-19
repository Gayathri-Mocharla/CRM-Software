import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">

      <div className="sidebar">

        <h2 className="logo">CRM PRO 🚀</h2>

        <Link to="/dashboard" className="menu active">
          🏠 Dashboard
        </Link>

        <Link to="/customers" className="menu">
          👥 Customers
        </Link>

        <Link to="/leads" className="menu">
          📈 Leads
        </Link>

        <Link to="/reports" className="menu">
          📊 Reports
        </Link>

        <Link to="/settings" className="menu">
          ⚙ Settings
        </Link>

        <button className="logout-btn">Logout</button>

      </div>

      <div className="main-content">

        <div className="topbar">

          <div>
            <h1>Welcome Back 👋</h1>
            <p>Manage your CRM system efficiently.</p>
          </div>

          <div className="profile">

            <img
              src="data:image/jpeg;base64,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"
              alt="profile"
            />

            <span>Sowjanya</span>

          </div>

        </div>

        <div className="cards">

          <div className="card blue">
            <h1>120</h1>
            <p>Total Customers</p>
          </div>

          <div className="card green">
            <h1>45</h1>
            <p>New Leads</p>
          </div>

          <div className="card purple">
            <h1>$12K</h1>
            <p>Total Revenue</p>
          </div>

          <div className="card orange">
            <h1>18</h1>
            <p>Pending Tasks</p>
          </div>

        </div>

        <div className="bottom-section">

          <div className="activity-box">

            <h2>Recent Activities</h2>

            <ul>
              <li>✅ New customer added</li>
              <li>📞 Follow-up completed</li>
              <li>💰 Revenue updated</li>
              <li>📋 Task assigned</li>
            </ul>

          </div>

          <div className="calendar-box">

            <h2>May 2026</h2>

            <div className="calendar-grid">

              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div>1</div>
              <div>2</div>
              <div>3</div>

              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;


