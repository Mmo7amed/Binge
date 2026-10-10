import React from 'react'
import logo from '../../assets/logo.webp'
import { Link, NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css";


function Navbar() {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark sticky-top shadow-lg py-2 ${styles.navBackg}`}>
            <div className="container-fluid px-md-5">
                
                <Link className="navbar-brand d-flex align-items-center gap-3" to="/home">
                    <img src={logo} alt="Binge Logo" className="rounded shadow-sm" style={{ width: '3.5rem' }} />
                    <span className="fs-3 fw-bolder tracking-wide" style={{ color: '#ebc55d', letterSpacing: '2px' }}>BINGE</span>
                </Link>

                <button 
                    className="navbar-toggler border-0 shadow-none" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#bingeNav" 
                    aria-controls="bingeNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="bingeNav">
                    
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold fs-5 gap-3">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies">Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/shows">TV Shows</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/watchlist">Watchlist</NavLink>
                        </li>
                    </ul>

                    <form className="d-flex align-items-center gap-2" role="search">
                        <input 
                            className="form-control bg-dark text-light border-secondary shadow-none" 
                            type="search" 
                            placeholder="Search titles..." 
                            aria-label="Search" 
                        />
                        <button className="btn px-4 fw-bold text-dark" style={{ backgroundColor: '#ebc55d' }} type="submit">
                            Search
                        </button>
                    </form>
                    
                </div>
            </div>
        </nav>
        </>

    )
}

export default Navbar
