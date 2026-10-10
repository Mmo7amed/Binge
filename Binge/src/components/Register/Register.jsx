import React from "react";
import styles from "./Register.module.css";
import logo from '../../assets/logo.webp'
import { Link, useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault(); 
        navigate('/home');
    };

  return (
    <>
      <div className={styles.registerBackg}>
      <div className="card p-4 text-center bg-dark m-auto shadow-lg" style={{ width: '100%', maxWidth: '450px' }}>
        <form onSubmit={handleRegister}>
          <img src={logo} alt="Binge Logo" className="rounded mb-3" style={{width: '60px', height: '60px'}}/>
          <h1 className="h4 mb-3 text-light fw-normal">Create Account</h1>
          
          <div className="row g-2 mb-2">
            <div className="col-sm-6">
              <div className="form-floating">
                <input type="text" className="form-control" id="fName" placeholder="First Name" required/>
                <label htmlFor="fName">First Name</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-floating">
                <input type="text" className="form-control" id="lName" placeholder="Last Name"/>
                <label htmlFor="lName">Last Name</label>
              </div>
            </div>
          </div>
          <div className="form-floating mb-2">
            <input type="email" className="form-control" id="email" placeholder="Email Address" required/>
            <label htmlFor="email">Email Address</label>
          </div>
          
          <div className="form-floating mb-2">
            <input type="password" className="form-control" id="password" placeholder="Password" required/>
            <label htmlFor="password">Password</label>
          </div>
          
          <div className="form-floating mb-2">
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" required/>
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>
          
          <div className="form-check text-start my-2">
            <input className="form-check-input" type="checkbox" id="checkDefault" defaultValue="remember-me"/>
            <label className="form-check-label text-light" htmlFor="checkDefault">Remember me</label>
          </div>
            <button className="btn btn-warning btn-outline-light text-dark w-100 py-2 mt-2" type="submit">
                Sign up
          </button>
        </form>
        <Link to='/login' className="mt-3 text-decoration-none">
            <p className="text-light opacity-75">Already have an account?</p>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Register;
