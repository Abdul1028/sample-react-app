import React, { useState } from 'react';
import './Logistics.css';

function Logistics() {
  const [filter, setFilter] = useState('all');

  const shipments = [
    { shipment: "SHP-5501", carrier: "DHL", destination: "New York, USA", eta: "2 days", status: "In Transit", items: 145, weight: "2,450 kg" },
    { shipment: "SHP-5502", carrier: "BlueDart", destination: "Mumbai, India", eta: "Delivered", status: "Delivered", items: 234, weight: "3,120 kg" },
    { shipment: "SHP-5503", carrier: "FedEx", destination: "London, UK", eta: "1 day", status: "In Transit", items: 89, weight: "1,200 kg" },
    { shipment: "SHP-5504", carrier: "UPS", destination: "Toronto, Canada", eta: "3 days", status: "In Transit", items: 178, weight: "2,890 kg" },
    { shipment: "SHP-5505", carrier: "DHL", destination: "Berlin, Germany", eta: "Delivered", status: "Delivered", items: 312, weight: "4,560 kg" },
    { shipment: "SHP-5506", carrier: "BlueDart", destination: "Sydney, Australia", eta: "4 days", status: "In Transit", items: 92, weight: "1,670 kg" },
    { shipment: "SHP-5507", carrier: "FedEx", destination: "Tokyo, Japan", eta: "Delivered", status: "Delivered", items: 256, weight: "3,450 kg" },
    { shipment: "SHP-5508", carrier: "UPS", destination: "Paris, France", eta: "Pending", status: "Pending", items: 67, weight: "980 kg" },
  ];

  const carriers = [
    { name: "DHL", activeShipments: 2, onTimeRate: 96, totalDelivered: 847 },
    { name: "FedEx", activeShipments: 2, onTimeRate: 94, totalDelivered: 723 },
    { name: "UPS", activeShipments: 2, onTimeRate: 92, totalDelivered: 692 },
    { name: "BlueDart", activeShipments: 2, onTimeRate: 98, totalDelivered: 561 },
  ];

  const statuses = ['all', 'In Transit', 'Delivered', 'Pending'];

  const filteredShipments = filter === 'all' 
    ? shipments 
    : shipments.filter(s => s.status === filter);

  const shipmentStats = {
    total: shipments.length,
    inTransit: shipments.filter(s => s.status === 'In Transit').length,
    delivered: shipments.filter(s => s.status === 'Delivered').length,
    pending: shipments.filter(s => s.status === 'Pending').length,
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>Logistics Management</h2>
          <p className="page-subtitle">Track shipments and manage delivery operations</p>
        </div>
      </div>

      <div className="logistics-stats">
        <div className="stat-card">
          <h4>{shipmentStats.total}</h4>
          <span>Total Shipments</span>
        </div>
        <div className="stat-card in-transit">
          <h4>{shipmentStats.inTransit}</h4>
          <span>In Transit</span>
        </div>
        <div className="stat-card delivered">
          <h4>{shipmentStats.delivered}</h4>
          <span>Delivered</span>
        </div>
        <div className="stat-card pending">
          <h4>{shipmentStats.pending}</h4>
          <span>Pending</span>
        </div>
      </div>

      <div className="logistics-controls">
        <div className="filter-buttons">
          {statuses.map(status => (
            <button
              key={status}
              className={`filter-btn ${filter === status ? 'active' : ''}`}
              onClick={() => setFilter(status)}
            >
              {status === 'all' ? 'All Shipments' : status}
            </button>
          ))}
        </div>
      </div>

      <div className="shipments-section card">
        <h3>Active Shipments</h3>
        <div className="shipments-list">
          {filteredShipments.map((shipment) => (
            <div key={shipment.shipment} className={`shipment-card ${shipment.status.toLowerCase().replace(' ', '-')}`}>
              <div className="shipment-header">
                <div className="shipment-id">{shipment.shipment}</div>
                <span className={`shipment-status ${shipment.status.toLowerCase().replace(' ', '-')}`}>
                  {shipment.status}
                </span>
              </div>
              <div className="shipment-destination">
                <span className="destination-icon">📍</span>
                <strong>{shipment.destination}</strong>
              </div>
              <div className="shipment-details">
                <div className="shipment-row">
                  <span className="shipment-label">Carrier:</span>
                  <span className="shipment-value">{shipment.carrier}</span>
                </div>
                <div className="shipment-row">
                  <span className="shipment-label">ETA:</span>
                  <span className="shipment-value">{shipment.eta}</span>
                </div>
                <div className="shipment-row">
                  <span className="shipment-label">Items:</span>
                  <span className="shipment-value">{shipment.items}</span>
                </div>
                <div className="shipment-row">
                  <span className="shipment-label">Weight:</span>
                  <span className="shipment-value">{shipment.weight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carriers-section card">
        <h3>Carrier Performance</h3>
        <div className="carriers-grid">
          {carriers.map((carrier) => (
            <div key={carrier.name} className="carrier-card">
              <div className="carrier-header">
                <h4>{carrier.name}</h4>
                <div className="carrier-badge">
                  {carrier.onTimeRate}% On-Time
                </div>
              </div>
              <div className="carrier-stats">
                <div className="carrier-stat">
                  <span className="stat-icon">🚚</span>
                  <div>
                    <strong>{carrier.activeShipments}</strong>
                    <span>Active</span>
                  </div>
                </div>
                <div className="carrier-stat">
                  <span className="stat-icon">✓</span>
                  <div>
                    <strong>{carrier.totalDelivered}</strong>
                    <span>Delivered</span>
                  </div>
                </div>
              </div>
              <div className="performance-bar">
                <div 
                  className="performance-fill" 
                  style={{ width: `${carrier.onTimeRate}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Logistics;
