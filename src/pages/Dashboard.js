import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const env = "copilot create multip page branch";

  const kpis = {
    totalOrders: 128450,
    pending: 31250,
    shipped: 89560,
    inventoryValue: "$2.45M"
  };

  const recentActivity = [
    { time: "2 mins ago", action: "New order #ORD-1210 from Client I", type: "order" },
    { time: "15 mins ago", action: "Line 2 completed maintenance", type: "production" },
    { time: "1 hour ago", action: "Shipment SHP-5507 delivered", type: "logistics" },
    { time: "2 hours ago", action: "Low stock alert: Titanium Oxide", type: "alert" },
    { time: "3 hours ago", action: "Quality check passed for Batch B-445", type: "quality" },
  ];

  const alerts = [
    { severity: "warning", message: "Low inventory: Titanium Oxide (650 kg remaining)" },
    { severity: "info", message: "Line 2 scheduled for maintenance tomorrow" },
    { severity: "success", message: "All shipments on schedule for this week" },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>Dashboard Overview</h2>
          <p className="page-subtitle">Real-time supply chain operations monitoring</p>
        </div>
        <span className={`env ${env.toLowerCase().replace(/\s+/g, '-')}`}>{env}</span>
      </div>

      <div className="kpi-row">
        <div className="kpi-card">
          <h4>{kpis.totalOrders}</h4>
          <span>Total Orders</span>
          <div className="kpi-trend up">↑ 12% vs last month</div>
        </div>
        <div className="kpi-card">
          <h4>{kpis.pending}</h4>
          <span>Pending</span>
          <div className="kpi-trend neutral">→ Same as yesterday</div>
        </div>
        <div className="kpi-card">
          <h4>{kpis.shipped}</h4>
          <span>Shipped</span>
          <div className="kpi-trend up">↑ 8% this week</div>
        </div>
        <div className="kpi-card">
          <h4>{kpis.inventoryValue}</h4>
          <span>Inventory Value</span>
          <div className="kpi-trend down">↓ 3% (normal)</div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h3>Recent Activity</h3>
          <ul className="activity-list">
            {recentActivity.map((activity, index) => (
              <li key={index} className={`activity-item ${activity.type}`}>
                <span className="activity-time">{activity.time}</span>
                <span className="activity-action">{activity.action}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>System Alerts</h3>
          <div className="alerts-container">
            {alerts.map((alert, index) => (
              <div key={index} className={`alert alert-${alert.severity}`}>
                <span className="alert-icon">
                  {alert.severity === 'warning' && '⚠️'}
                  {alert.severity === 'info' && 'ℹ️'}
                  {alert.severity === 'success' && '✅'}
                </span>
                <span className="alert-message">{alert.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="quick-stats">
        <div className="stat-box">
          <div className="stat-icon">🏭</div>
          <div className="stat-content">
            <h4>4/6</h4>
            <span>Production Lines Active</span>
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-icon">📦</div>
          <div className="stat-content">
            <h4>8</h4>
            <span>Items Need Restocking</span>
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-icon">🚚</div>
          <div className="stat-content">
            <h4>4</h4>
            <span>Shipments In Transit</span>
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-icon">⏱️</div>
          <div className="stat-content">
            <h4>92%</h4>
            <span>On-Time Delivery Rate</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
