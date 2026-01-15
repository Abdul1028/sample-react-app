import React from 'react';
import './Production.css';

function Production() {
  const productionLines = [
    { 
      line: "Line 1", 
      status: "Running", 
      product: "Resin Compound A", 
      efficiency: 94,
      output: "2,450 kg/hr",
      uptime: "23.5 hrs",
      crew: 8
    },
    { 
      line: "Line 2", 
      status: "Maintenance", 
      product: "None", 
      efficiency: 0,
      output: "0 kg/hr",
      uptime: "0 hrs",
      crew: 3,
      nextStart: "Tomorrow 8:00 AM"
    },
    { 
      line: "Line 3", 
      status: "Idle", 
      product: "None", 
      efficiency: 0,
      output: "0 kg/hr",
      uptime: "0 hrs",
      crew: 0
    },
    { 
      line: "Line 4", 
      status: "Running", 
      product: "Paint Mixture B", 
      efficiency: 88,
      output: "1,890 kg/hr",
      uptime: "18.2 hrs",
      crew: 6
    },
    { 
      line: "Line 5", 
      status: "Running", 
      product: "Adhesive Solution", 
      efficiency: 96,
      output: "3,120 L/hr",
      uptime: "24 hrs",
      crew: 8
    },
    { 
      line: "Line 6", 
      status: "Idle", 
      product: "None", 
      efficiency: 0,
      output: "0 kg/hr",
      uptime: "0 hrs",
      crew: 0
    },
  ];

  const qualityChecks = [
    { batch: "B-445", product: "Resin Compound A", status: "Passed", time: "1 hour ago", inspector: "John D." },
    { batch: "B-446", product: "Paint Mixture B", status: "Passed", time: "2 hours ago", inspector: "Sarah M." },
    { batch: "B-447", product: "Adhesive Solution", status: "Pending", time: "30 mins ago", inspector: "Mike R." },
    { batch: "B-448", product: "Resin Compound A", status: "Failed", time: "4 hours ago", inspector: "Lisa K." },
  ];

  const shifts = [
    { name: "Morning Shift", time: "06:00 - 14:00", workers: 24, supervisor: "James Wilson" },
    { name: "Afternoon Shift", time: "14:00 - 22:00", workers: 28, supervisor: "Maria Garcia" },
    { name: "Night Shift", time: "22:00 - 06:00", workers: 18, supervisor: "Robert Chen" },
  ];

  const runningLines = productionLines.filter(l => l.status === 'Running').length;
  const totalLines = productionLines.length;
  const avgEfficiency = Math.round(
    productionLines
      .filter(l => l.status === 'Running')
      .reduce((sum, l) => sum + l.efficiency, 0) / runningLines
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>Production Management</h2>
          <p className="page-subtitle">Monitor production lines and operations</p>
        </div>
      </div>

      <div className="production-stats">
        <div className="stat-card running">
          <h4>{runningLines}/{totalLines}</h4>
          <span>Active Lines</span>
        </div>
        <div className="stat-card efficiency">
          <h4>{avgEfficiency}%</h4>
          <span>Avg Efficiency</span>
        </div>
        <div className="stat-card crew">
          <h4>{productionLines.reduce((sum, l) => sum + l.crew, 0)}</h4>
          <span>Total Crew</span>
        </div>
        <div className="stat-card quality">
          <h4>{qualityChecks.filter(q => q.status === 'Passed').length}/{qualityChecks.length}</h4>
          <span>Quality Passed</span>
        </div>
      </div>

      <div className="production-grid">
        {productionLines.map((line) => (
          <div key={line.line} className={`production-card ${line.status.toLowerCase()}`}>
            <div className="production-header">
              <h3>{line.line}</h3>
              <span className={`status-tag ${line.status.toLowerCase()}`}>
                {line.status}
              </span>
            </div>
            <div className="production-body">
              <div className="production-detail">
                <span className="detail-label">Product:</span>
                <span className="detail-value">{line.product}</span>
              </div>
              {line.status === 'Running' && (
                <>
                  <div className="production-detail">
                    <span className="detail-label">Output:</span>
                    <span className="detail-value">{line.output}</span>
                  </div>
                  <div className="production-detail">
                    <span className="detail-label">Efficiency:</span>
                    <span className="detail-value">
                      <div className="efficiency-bar">
                        <div 
                          className="efficiency-fill" 
                          style={{ width: `${line.efficiency}%` }}
                        ></div>
                        <span className="efficiency-text">{line.efficiency}%</span>
                      </div>
                    </span>
                  </div>
                  <div className="production-detail">
                    <span className="detail-label">Uptime:</span>
                    <span className="detail-value">{line.uptime}</span>
                  </div>
                  <div className="production-detail">
                    <span className="detail-label">Crew:</span>
                    <span className="detail-value">{line.crew} workers</span>
                  </div>
                </>
              )}
              {line.status === 'Maintenance' && line.nextStart && (
                <div className="production-detail">
                  <span className="detail-label">Next Start:</span>
                  <span className="detail-value">{line.nextStart}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="additional-info">
        <div className="card">
          <h3>Quality Control Checks</h3>
          <div className="quality-list">
            {qualityChecks.map((check, index) => (
              <div key={index} className="quality-item">
                <div className="quality-main">
                  <strong>{check.batch}</strong>
                  <span className="quality-product">{check.product}</span>
                </div>
                <div className="quality-meta">
                  <span className="quality-time">{check.time}</span>
                  <span className="quality-inspector">by {check.inspector}</span>
                  <span className={`quality-status ${check.status.toLowerCase()}`}>
                    {check.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Shift Schedule</h3>
          <div className="shift-list">
            {shifts.map((shift, index) => (
              <div key={index} className="shift-item">
                <div className="shift-header">
                  <strong>{shift.name}</strong>
                  <span className="shift-time">{shift.time}</span>
                </div>
                <div className="shift-details">
                  <span>👷 {shift.workers} workers</span>
                  <span>👔 {shift.supervisor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Production;
