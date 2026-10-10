import React from 'react'
import styles from './Showscard.module.css'
import { Link } from 'react-router-dom'

function Showscard() {
    return (
        <>
        <section className={`card h-100 shadow-sm ${styles.cardBackg}`}>
            <img src="..." className="card-img-top" alt="Show Poster" />
            
            <div className="card-body d-flex flex-column">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                
                <div className="mt-auto d-flex gap-2">
                    <Link to="/watchlist" className="btn btn-warning flex-grow-1 fw-bold">
                        Add To Watchlist
                    </Link>
                    <Link to="/details" className="btn btn-outline-light flex-grow-1">
                        Details
                    </Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default Showscard
