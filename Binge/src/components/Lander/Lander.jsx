import React from "react";
import styles from "./Lander.module.css";
import { Link } from "react-router-dom";


function Lander() {
  return (
    <>
      <div className={styles.lander}>
        <div className="text-center px-2 lh-lg">
          <h1 className="display-2 fw-bolder text-white mb-3 text-shadow">
            Welcome to <span style={{ color: "#ebc55d" }}>BINGE</span>
          </h1>
          <p className="fs-4 text-light opacity-75 mb-2 fw-light mx-auto" style={{ maxWidth: "600px" }}>
           Discover, track, and curate your ultimate cinematic watchlist.
          </p>
          <h2 className="mt-0 mb-4 text-light">
            <strong>all in one place</strong>.
          </h2>

          <div className="d-flex justify-content-center gap-3">
            <Link
              to="/signup"
              className= {`${styles.buttonPrimary} btn btn-lg fw-bold px-5 py-3 shadow-lg border-0`}>
                Get Started
            </Link>
            <Link to="/login" className="btn btn-outline-light btn-lg fw-bold px-5 py-3 shadow-lg">
                Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lander;
