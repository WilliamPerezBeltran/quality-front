import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div id="Footer">
      <footer className="footer">
        <div className="footer-top section">
          <div className="container">
            <div className="footer-link-box">
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Contacto</p>
                </li>

                <li>
                  <address className="footer-link">
                    <ion-icon name="location"></ion-icon>

                    <span className="footer-link-text">
                      Ingeniero William Pérez
                    </span>
                  </address>
                </li>

                <li>
                  <Link href="tel:+557343673257" className="footer-link">
                    <ion-icon name="call"></ion-icon>

                    <span className="footer-link-text">+57 3005661233</span>
                  </Link>
                </li>

                <li>
                  <Link href="mailto:footcap@help.com" className="footer-link">
                    <ion-icon name="mail"></ion-icon>

                    <span className="footer-link-text">
                      williampbeltranprogramador@gmail.com
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">test Quality test 2024 </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
