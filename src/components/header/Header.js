import React, { useState } from "react";

// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";

function Header() {
  let [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const handleClick = () => {
    if (window.innerWidth < 768) {
      setIsOpenNavbar(!isOpenNavbar);
    }
  };
  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <div
            className={`overlay ${isOpenNavbar ? "active" : ""}`}
            onClick={handleClick}
          ></div>

          <div to="/" className="logo navbar-item">
            <p>Test quality</p>
          </div>

          <button
            className="nav-open-btn"
            aria-label="Open Menu"
            onClick={handleClick}
          >
            <ion-icon name="menu-outline"></ion-icon>
          </button>
          <nav className={`navbar ${isOpenNavbar ? "active" : ""}`}>
            <button className="nav-close-btn" onClick={handleClick}>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <ul className="navbar-list">
              <li className="navbar-item" onClick={handleClick}>
                <HashLink className="navbar-link" to="" smooth>
                  test1
                </HashLink>
              </li>

              <li className="navbar-item" onClick={handleClick}>
                <HashLink className="navbar-link" to="/test2" smooth>
                  test2
                </HashLink>
              </li>

              <li className="navbar-item" onClick={handleClick}>
                <HashLink className="navbar-link" to="/test3" smooth>
                  test3
                </HashLink>
              </li>

              <li className="navbar-item" onClick={handleClick}>
                <HashLink className="navbar-link" to="/test4" smooth>
                  test4
                </HashLink>
              </li>

              <li className="navbar-item" onClick={handleClick}>
                <HashLink className="navbar-link" to="/test5" smooth>
                  test5
                </HashLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
