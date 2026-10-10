import React from 'react'
import styles from './Login.module.css'
import logo from '../../assets/logo.webp'
import { Link, useNavigate } from 'react-router-dom'


function Login() {

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); 
        navigate('/home');
    };
    return (
        <>
            <div className={styles.loginBackg}>
                  <div className={`card p-4 text-center bg-dark m-auto shadow-lg ${styles.container2}`}>
                    <form onSubmit={handleLogin}>
                        <Link to='/'>
                            <img src={logo} alt="Binge Logo" className="rounded mb-3" style={{width: '60px', height: '60px'}}/>
                        </Link>
                      <h1 className="h4 mb-3 text-light fw-normal">Log In</h1>
                      
                      <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="email" placeholder="Email Address" required/>
                        <label htmlFor="email">Email Address</label>
                      </div>
                      
                      <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="password" placeholder="Password" required/>
                        <label htmlFor="password">Password</label>
                      </div>
                      
                      <div className="form-check text-start my-2">
                        <input className="form-check-input" type="checkbox" id="checkDefault" defaultValue="remember-me"/>
                        <label className="form-check-label text-light" htmlFor="checkDefault">Remember me</label>
                      </div>
                        <button className={`btn btn-warning w-100 py-2 mt-2 ${styles.loginBtn}`} type="submit">
                            Log In
                      </button>
                    </form>
                    <Link to='/signup' className="mt-3 text-decoration-none">
                        <p className='text-light opacity-75'>Don't have an account? Register here.</p>
                    </Link>
                  </div>
            </div>
        </>
    );
}

export default Login
