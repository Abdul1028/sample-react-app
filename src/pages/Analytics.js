import React from 'react';
import './Analytics.css';

function Analytics() {
  const monthlyData = [
    { month: 'Jan', orders: 1200, revenue: 245000, efficiency: 89 },
    { month: 'Feb', orders: 1350, revenue: 278000, efficiency: 91 },
    { month: 'Mar', orders: 1180, revenue: 234000, efficiency: 87 },
    { month: 'Apr', orders: 1520, revenue: 312000, efficiency: 93 },
    { month: 'May', orders: 1680, revenue: 345000, efficiency: 95 },
    { month: 'Jun', orders: 1450, revenue: 298000, efficiency: 92 },
  ];

  const topProducts = [
    { name: "Resin Compound A", units: 89000, revenue: "$445K", growth: "+12%" },
    { name: "Paint Mixture B", units: 67000, revenue: "$378K", growth: "+8%" },
    { name: "Adhesive Solution", units: 54000, revenue: "$312K", growth: "+15%" },
    { name: "Coating Formula C", units: 42000, revenue: "$256K", growth: "+5%" },
    { name: "Sealant Compound", units: 38000, revenue: "$198K", growth: "+10%" },
  ];

  const topClients = [
    { name: "Client A", orders: 145, revenue: "$567K", satisfaction: 98 },
    { name: "Client B", orders: 132, revenue: "$489K", satisfaction: 95 },
    { name: "Client C", orders: 128, revenue: "$456K", satisfaction: 97 },
    { name: "Client D", orders: 98, revenue: "$378K", satisfaction: 93 },
    { name: "Client E", orders: 87, revenue: "$312K", satisfaction: 96 },
  ];

  const regionalBreakdown = [
    { region: "North America", percentage: 35, orders: 4500, color: "#3b82f6" },
    { region: "Europe", percentage: 30, orders: 3850, color: "#10b981" },
    { region: "Asia Pacific", percentage: 25, orders: 3200, color: "#f59e0b" },
    { region: "Others", percentage: 10, orders: 1295, color: "#8b5cf6" },
  ];

  const maxRevenue = Math.max(...monthlyData.map(d => d.revenue));

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>Analytics & Insights</h2>
          <p className="page-subtitle">Data-driven insights for supply chain operations</p>
        </div>
      </div>

      <div className="analytics-summary">
        <div className="summary-card">
          <div className="summary-icon">📊</div>
          <div className="summary-content">
            <h4>$1.92M</h4>
            <span>Total Revenue (6 months)</span>
            <div className="trend-up">↑ 11.2% vs last period</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">📈</div>
          <div className="summary-content">
            <h4>8,380</h4>
            <span>Total Orders (6 months)</span>
            <div className="trend-up">↑ 9.8% vs last period</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">⚡</div>
          <div className="summary-content">
            <h4>91.2%</h4>
            <span>Avg Efficiency</span>
            <div className="trend-up">↑ 2.1% vs last period</div>
          </div>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="card chart-card">
          <h3>Monthly Revenue Trend</h3>
          <div className="bar-chart">
            {monthlyData.map((data, index) => (
              <div key={index} className="bar-item">
                <div className="bar-container">
                  <div 
                    className="bar-fill" 
                    style={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
                  >
                    <span className="bar-value">${(data.revenue / 1000).toFixed(0)}K</span>
                  </div>
                </div>
                <span className="bar-label">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Top Products</h3>
          <div className="products-list">
            {topProducts.map((product, index) => (
              <div key={index} className="product-item">
                <div className="product-rank">{index + 1}</div>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <div className="product-stats">
                    <span>{product.units.toLocaleString()} units</span>
                    <span className="product-revenue">{product.revenue}</span>
                  </div>
                </div>
                <div className={`product-growth ${product.growth.startsWith('+') ? 'positive' : 'negative'}`}>
                  {product.growth}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="card">
          <h3>Top Clients</h3>
          <div className="clients-list">
            {topClients.map((client, index) => (
              <div key={index} className="client-item">
                <div className="client-info">
                  <strong>{client.name}</strong>
                  <div className="client-metrics">
                    <span>🛒 {client.orders} orders</span>
                    <span>💰 {client.revenue}</span>
                  </div>
                </div>
                <div className="satisfaction-score">
                  <div className="score-circle">{client.satisfaction}%</div>
                  <span className="score-label">Satisfaction</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Regional Distribution</h3>
          <div className="regional-breakdown">
            {regionalBreakdown.map((region, index) => (
              <div key={index} className="region-item">
                <div className="region-header">
                  <strong>{region.region}</strong>
                  <span className="region-percentage">{region.percentage}%</span>
                </div>
                <div className="region-bar">
                  <div 
                    className="region-fill" 
                    style={{ 
                      width: `${region.percentage}%`,
                      background: region.color
                    }}
                  ></div>
                </div>
                <div className="region-orders">{region.orders.toLocaleString()} orders</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card insights-card">
        <h3>Key Insights</h3>
        <div className="insights-grid">
          <div className="insight-item">
            <span className="insight-icon">🎯</span>
            <div className="insight-content">
              <strong>Peak Performance</strong>
              <p>May showed the highest revenue at $345K with 95% efficiency</p>
            </div>
          </div>
          <div className="insight-item">
            <span className="insight-icon">🚀</span>
            <div className="insight-content">
              <strong>Growth Leader</strong>
              <p>Adhesive Solution leads with 15% growth rate this quarter</p>
            </div>
          </div>
          <div className="insight-item">
            <span className="insight-icon">⭐</span>
            <div className="insight-content">
              <strong>Top Client</strong>
              <p>Client A maintains 98% satisfaction with 145 orders</p>
            </div>
          </div>
          <div className="insight-item">
            <span className="insight-icon">🌍</span>
            <div className="insight-content">
              <strong>Regional Focus</strong>
              <p>North America leads with 35% of total orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
