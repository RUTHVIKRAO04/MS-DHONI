import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container header-content">
        <h1 className="logo">MS Dhoni</h1>
        <nav className="nav">
          <Link to="/" className={location.pathname === '/' }>
            Home
          </Link>
          <Link to="/stats" className={location.pathname === '/stats' }>
            Stats
          </Link>
          <Link to="/records" className={location.pathname === '/records'}>
            Records
          </Link>
          <Link to="/timeline" className={location.pathname === '/timeline'}>
            Timeline
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;