import React, { useState } from 'react';
import './Inventory.css';

function Inventory() {
  const [filter, setFilter] = useState('all');

  const inventory = [
    { id: 'INV-001', item: "Resin Binder", category: "Raw Material", qty: 90000, unit: "kg", minStock: 50000, location: "Warehouse A", status: "adequate" },
    { id: 'INV-002', item: "Titanium Oxide", category: "Raw Material", qty: 650, unit: "kg", minStock: 1000, location: "Warehouse A", status: "low" },
    { id: 'INV-003', item: "Solvent", category: "Chemical", qty: 1200, unit: "L", minStock: 800, location: "Warehouse B", status: "adequate" },
    { id: 'INV-004', item: "Packaging Boxes", category: "Packaging", qty: 800, unit: "pcs", minStock: 500, location: "Warehouse C", status: "adequate" },
    { id: 'INV-005', item: "Pigment Blue", category: "Raw Material", qty: 450, unit: "kg", minStock: 600, location: "Warehouse A", status: "low" },
    { id: 'INV-006', item: "Adhesive Compound", category: "Chemical", qty: 2800, unit: "L", minStock: 1500, location: "Warehouse B", status: "adequate" },
    { id: 'INV-007', item: "Safety Labels", category: "Packaging", qty: 5500, unit: "pcs", minStock: 2000, location: "Warehouse C", status: "good" },
    { id: 'INV-008', item: "Plastic Caps", category: "Packaging", qty: 12000, unit: "pcs", minStock: 5000, location: "Warehouse C", status: "good" },
    { id: 'INV-009', item: "Metal Drums", category: "Packaging", qty: 340, unit: "pcs", minStock: 400, location: "Warehouse C", status: "low" },
    { id: 'INV-010', item: "Catalyst Agent", category: "Chemical", qty: 890, unit: "kg", minStock: 500, location: "Warehouse B", status: "adequate" },
  ];

  const categories = ['all', 'Raw Material', 'Chemical', 'Packaging'];

  const filteredInventory = filter === 'all' 
    ? inventory 
    : inventory.filter(item => item.category === filter);

  const stockStats = {
    total: inventory.length,
    low: inventory.filter(i => i.status === 'low').length,
    adequate: inventory.filter(i => i.status === 'adequate').length,
    good: inventory.filter(i => i.status === 'good').length,
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>Inventory Management</h2>
          <p className="page-subtitle">Track and manage stock levels across all warehouses</p>
        </div>
      </div>

      <div className="inventory-stats">
        <div className="stat-card">
          <h4>{stockStats.total}</h4>
          <span>Total Items</span>
        </div>
        <div className="stat-card good">
          <h4>{stockStats.good}</h4>
          <span>Good Stock</span>
        </div>
        <div className="stat-card adequate">
          <h4>{stockStats.adequate}</h4>
          <span>Adequate Stock</span>
        </div>
        <div className="stat-card low">
          <h4>{stockStats.low}</h4>
          <span>Low Stock</span>
        </div>
      </div>

      <div className="inventory-controls">
        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'All Items' : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="table-container">
          <table className="inventory-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Item</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Min Stock</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item) => (
                <tr key={item.id}>
                  <td className="item-id">{item.id}</td>
                  <td className="item-name">{item.item}</td>
                  <td>{item.category}</td>
                  <td className="quantity">{item.qty.toLocaleString()} {item.unit}</td>
                  <td>{item.minStock.toLocaleString()} {item.unit}</td>
                  <td>{item.location}</td>
                  <td>
                    <span className={`status-badge ${item.status}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
