import "./App.css";
import "./index.css";

function App() {
  const env = window.location.hostname.includes("staging")
    ? "STAGING"
    : "PRODUCTION";

  const kpis = {
    totalOrders: 128,
    pending: 24,
    shipped: 90,
    inventoryValue: "$1.2M"
  };

  const inventory = [
    { item: "Resin Binder", qty: 900, unit: "kg" },
    { item: "Titanium Oxide", qty: 650, unit: "kg" },
    { item: "Solvent", qty: 1200, unit: "L" },
    { item: "Packaging Boxes", qty: 800, unit: "pcs" }
  ];

  const orders = [
    { id: "ORD-1202", client: "Client A", status: "Queued" },
    { id: "ORD-1203", client: "Client B", status: "Processing" },
    { id: "ORD-1204", client: "Client C", status: "Shipped" },
    { id: "ORD-1205", client: "Client D", status: "Queued" }
  ];

  const production = [
    { line: "Line 1", status: "Running" },
    { line: "Line 2", status: "Maintenance" },
    { line: "Line 3", status: "Idle" },
  ];

  const logistics = [
    { shipment: "SHP-5501", carrier: "DHL", eta: "2 days", status: "In Transit" },
    { shipment: "SHP-5502", carrier: "BlueDart", eta: "Delivered", status: "Delivered" },
  ];

  return (
    <div className="app">

      
      <div className="header">
        <h2>Supply Chain Operations</h2>
        <span className={`env ${env.toLowerCase()}`}>{env}</span>
      </div>

      <div className="kpi-row">
        <div className="kpi-card"><h4>{kpis.totalOrders}</h4><span>Total Orders</span></div>
        <div className="kpi-card"><h4>{kpis.pending}</h4><span>Pending</span></div>
        <div className="kpi-card"><h4>{kpis.shipped}</h4><span>Shipped</span></div>
        <div className="kpi-card"><h4>{kpis.inventoryValue}</h4><span>Inventory Value</span></div>
      </div>

      <div className="grid">
        
        <div className="card">
          <h3>Inventory</h3>
          <table>
            <thead><tr><th>Item</th><th>Qty</th><th>Unit</th></tr></thead>
            <tbody>
              {inventory.map((i, k) => (
                <tr key={k}><td>{i.item}</td><td>{i.qty}</td><td>{i.unit}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h3>Orders</h3>
          <ul>
            {orders.map((o, k) => (
              <li key={k}>
                {o.id} — {o.client}
                <span className={`tag ${o.status.toLowerCase()}`}>{o.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>Production</h3>
          <ul>
            {production.map((p, k) => (
              <li key={k}>
                {p.line} 
                <span className={`tag ${p.status.toLowerCase()}`}>{p.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>Logistics</h3>
          <ul>
            {logistics.map((l, k) => (
              <li key={k}>
                {l.shipment} — {l.carrier} — {l.eta}
                <span className={`tag ${l.status.toLowerCase()}`}>{l.status}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default App;
