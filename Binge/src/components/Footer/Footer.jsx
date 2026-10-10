import React from "react";
import logo from '../../assets/logo.webp'
import { Link, NavLink } from 'react-router-dom';
import styles from './Footer.module.css'

function Footer() {
  return (
    <>
    <footer className={`d-flex flex-wrap justify-content-between align-items-center py-4 px-md-5 mt-auto border-top ${styles.footBackg}`}>
        
        <div className="col-md-4 d-flex align-items-center gap-3">
            <Link to="/home" className="text-decoration-none">
            <img src={logo} alt="Binge Logo" className="rounded" style={{ width: '2.5rem' }} />
            </Link>
            <span className="text-light fw-semibold">
            © 2026 BINGE
            </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex gap-4 fw-semibold">
            <li>
            <Link to="/explore" className="text-decoration-none" style={{ color: '#ebc55d' }}>Explore</Link>
            </li>
            <li>
            <Link to="/watchlist" className="text-decoration-none" style={{ color: '#ebc55d' }}>Watchlist</Link>
            </li>
        </ul>
    </footer>
    </>
  );
}

export default Footer;
