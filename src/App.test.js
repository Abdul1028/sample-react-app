import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation with WA Ops brand', () => {
  render(<App />);
  const brandElement = screen.getByText(/WA Ops/i);
  expect(brandElement).toBeInTheDocument();
});

test('renders navigation menu items', () => {
  render(<App />);
  const dashboard = screen.getByText(/Dashboard/i);
  const inventory = screen.getByText(/Inventory/i);
  const orders = screen.getByText(/Orders/i);
  const production = screen.getByText(/Production/i);
  const logistics = screen.getByText(/Logistics/i);
  const analytics = screen.getByText(/Analytics/i);
  
  expect(dashboard).toBeInTheDocument();
  expect(inventory).toBeInTheDocument();
  expect(orders).toBeInTheDocument();
  expect(production).toBeInTheDocument();
  expect(logistics).toBeInTheDocument();
  expect(analytics).toBeInTheDocument();
});

test('renders dashboard page by default', () => {
  render(<App />);
  const dashboardHeader = screen.getByText(/Dashboard Overview/i);
  expect(dashboardHeader).toBeInTheDocument();
});
