import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa"; // ✅ Import icons

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header className={`header ${darkMode ? "dark-header" : ""}`}>
      <div className="header-container">

        <h1 className="logo">Hammad Olabamiji</h1>

        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Service</Link></li>
            <li><Link to="/projects">My Project</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* ✅ ICON TOGGLE */}
        <button
          className="dark-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>

      </div>
    </header>
  );
};

export default Header;
