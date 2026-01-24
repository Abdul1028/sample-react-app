import "./App.css";
import "./index.css";

function App() {
  const env = "last test baby";

  const kpis = {
    totalOrders: 12845,
    pending: 3125,
    shipped: 8956,
    inventoryValue: "$2.45M"
  };

  const inventory = [
    { item: "Resin Binder", qty: 90000, unit: "kg" },
    { item: "Titanium Oxide", qty: 650, unit: "kg" },
    { item: "Solvent", qty: 1200, unit: "L" },
    { item: "Packaging Boxes", qty: 800, unit: "pcs" },
    { item: "Pigment Blue", qty: 450, unit: "kg" },
    { item: "Adhesive Compound", qty: 2800, unit: "L" },
    { item: "Safety Labels", qty: 5500, unit: "pcs" },
    { item: "Plastic Caps", qty: 12000, unit: "pcs" }
  ];

  const orders = [
    { id: "ORD-1202", client: "Client A", status: "Queued" },
    { id: "ORD-1203", client: "Client B", status: "Processing" },
    { id: "ORD-1204", client: "Client C", status: "Shipped" },
    { id: "ORD-1205", client: "Client D", status: "Queued" },
    { id: "ORD-1206", client: "Client E", status: "Processing" },
    { id: "ORD-1207", client: "Client F", status: "Shipped" },
    { id: "ORD-1208", client: "Client G", status: "Queued" },
    { id: "ORD-1209", client: "Client H", status: "Processing" }
  ];

  const production = [
    { line: "Line 1", status: "Running" },
    { line: "Line 2", status: "Maintenance" },
    { line: "Line 3", status: "Idle" },
    { line: "Line 4", status: "Running" },
    { line: "Line 5", status: "Running" },
    { line: "Line 6", status: "Idle" },
  ];

  const logistics = [
    { shipment: "SHP-5501", carrier: "DHL", eta: "2 days", status: "In Transit" },
    { shipment: "SHP-5502", carrier: "BlueDart", eta: "Delivered", status: "Delivered" },
    { shipment: "SHP-5503", carrier: "FedEx", eta: "1 day", status: "In Transit" },
    { shipment: "SHP-5504", carrier: "UPS", eta: "3 days", status: "In Transit" },
    { shipment: "SHP-5505", carrier: "DHL", eta: "Delivered", status: "Delivered" },
    { shipment: "SHP-5506", carrier: "BlueDart", eta: "4 days", status: "In Transit" },
  ];

  return (
    <div className="app">

      
      <div className="header">
        <h2>WA Ops Supply Chain Operations</h2>
        <span className={`env ${env.toLowerCase().replace(/\s+/g, '-')}`}>{env}</span>
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
          <h3>Staging</h3>
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
