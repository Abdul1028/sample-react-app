import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h1>WA Ops</h1>
        <span className="nav-subtitle">Supply Chain Operations</span>
      </div>
      <ul className="nav-menu">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="nav-icon">📊</span>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/inventory" className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="nav-icon">📦</span>
            Inventory
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="nav-icon">🛒</span>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/production" className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="nav-icon">⚙️</span>
            Production
          </NavLink>
        </li>
        <li>
          <NavLink to="/logistics" className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="nav-icon">🚚</span>
            Logistics
          </NavLink>
        </li>
        <li>
          <NavLink to="/analytics" className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="nav-icon">📈</span>
            Analytics
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
