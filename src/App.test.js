import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WA Ops Supply Chain Operations header', () => {
  render(<App />);
  const headerElement = screen.getByText(/WA Ops Supply Chain Operations/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders KPI cards', () => {
  render(<App />);
  const totalOrders = screen.getByText(/Total Orders/i);
  const pending = screen.getByText(/Pending/i);
  const shipped = screen.getAllByText(/Shipped/i);
  const inventoryValue = screen.getByText(/Inventory Value/i);
  
  expect(totalOrders).toBeInTheDocument();
  expect(pending).toBeInTheDocument();
  expect(shipped.length).toBeGreaterThan(0);
  expect(inventoryValue).toBeInTheDocument();
});

test('renders all sections', () => {
  render(<App />);
  const inventory = screen.getByText('Inventory');
  const orders = screen.getByText('Orders');
  const staging = screen.getByText('Staging');
  const logistics = screen.getByText('Logistics');
  
  expect(inventory).toBeInTheDocument();
  expect(orders).toBeInTheDocument();
  expect(staging).toBeInTheDocument();
  expect(logistics).toBeInTheDocument();
});
