import React, { useState } from 'react';
import './Orders.css';

function Orders() {
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    { id: "ORD-1202", client: "Client A", status: "Queued", amount: "$12,450", date: "2026-01-15", items: 145, priority: "normal" },
    { id: "ORD-1203", client: "Client B", status: "Processing", amount: "$8,920", date: "2026-01-14", items: 89, priority: "high" },
    { id: "ORD-1204", client: "Client C", status: "Shipped", amount: "$24,780", date: "2026-01-13", items: 234, priority: "normal" },
    { id: "ORD-1205", client: "Client D", status: "Queued", amount: "$5,670", date: "2026-01-15", items: 56, priority: "low" },
    { id: "ORD-1206", client: "Client E", status: "Processing", amount: "$18,340", date: "2026-01-14", items: 178, priority: "high" },
    { id: "ORD-1207", client: "Client F", status: "Shipped", amount: "$32,100", date: "2026-01-12", items: 312, priority: "normal" },
    { id: "ORD-1208", client: "Client G", status: "Queued", amount: "$9,250", date: "2026-01-15", items: 92, priority: "normal" },
    { id: "ORD-1209", client: "Client H", status: "Processing", amount: "$14,560", date: "2026-01-14", items: 145, priority: "high" },
    { id: "ORD-1210", client: "Client I", status: "Delivered", amount: "$28,900", date: "2026-01-10", items: 289, priority: "normal" },
    { id: "ORD-1211", client: "Client J", status: "Delivered", amount: "$19,750", date: "2026-01-09", items: 197, priority: "normal" },
    { id: "ORD-1212", client: "Client K", status: "Cancelled", amount: "$6,420", date: "2026-01-13", items: 64, priority: "low" },
  ];

  const statuses = ['all', 'Queued', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

  const filteredOrders = statusFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === statusFilter);

  const orderStats = {
    total: orders.length,
    queued: orders.filter(o => o.status === 'Queued').length,
    processing: orders.filter(o => o.status === 'Processing').length,
    shipped: orders.filter(o => o.status === 'Shipped').length,
    delivered: orders.filter(o => o.status === 'Delivered').length,
  };

  const totalRevenue = orders
    .filter(o => o.status !== 'Cancelled')
    .reduce((sum, order) => sum + parseFloat(order.amount.replace(/[$,]/g, '')), 0);

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>Order Management</h2>
          <p className="page-subtitle">Track and manage customer orders</p>
        </div>
      </div>

      <div className="order-stats">
        <div className="stat-card">
          <h4>{orderStats.total}</h4>
          <span>Total Orders</span>
        </div>
        <div className="stat-card queued">
          <h4>{orderStats.queued}</h4>
          <span>Queued</span>
        </div>
        <div className="stat-card processing">
          <h4>{orderStats.processing}</h4>
          <span>Processing</span>
        </div>
        <div className="stat-card shipped">
          <h4>{orderStats.shipped}</h4>
          <span>Shipped</span>
        </div>
        <div className="stat-card delivered">
          <h4>{orderStats.delivered}</h4>
          <span>Delivered</span>
        </div>
        <div className="stat-card revenue">
          <h4>${(totalRevenue / 1000).toFixed(1)}K</h4>
          <span>Total Revenue</span>
        </div>
      </div>

      <div className="order-controls">
        <div className="filter-buttons">
          {statuses.map(status => (
            <button
              key={status}
              className={`filter-btn ${statusFilter === status ? 'active' : ''}`}
              onClick={() => setStatusFilter(status)}
            >
              {status === 'all' ? 'All Orders' : status}
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="orders-grid">
          {filteredOrders.map((order) => (
            <div key={order.id} className={`order-card ${order.status.toLowerCase()}`}>
              <div className="order-header">
                <div className="order-id">{order.id}</div>
                <span className={`priority-badge ${order.priority}`}>
                  {order.priority}
                </span>
              </div>
              <div className="order-client">
                <strong>{order.client}</strong>
              </div>
              <div className="order-details">
                <div className="detail-item">
                  <span className="detail-label">Amount:</span>
                  <span className="detail-value">{order.amount}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Items:</span>
                  <span className="detail-value">{order.items}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Date:</span>
                  <span className="detail-value">{order.date}</span>
                </div>
              </div>
              <div className="order-footer">
                <span className={`status-badge ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
