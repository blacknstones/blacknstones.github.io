import * as React from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  return (
    <header className="header">
      {menuIsOpen && (
        <div className="toggle">
          <Link to="/" className="link nav-link">
            Home
          </Link>
          <Link to="/projects" className="link nav-link">
            Projects
          </Link>
          <Link to="/about" className="link nav-link">
            About
          </Link>
        </div>
      )}
      <div
        className="menu-button"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        onMouseEnter={() => setMenuIsOpen(true)} 
       
      >
        ꕔ
      </div>
    </header>
  );
};

export default Header;
