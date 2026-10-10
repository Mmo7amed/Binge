import React from 'react'
import styles from './Showscard.module.css'
import { Link } from 'react-router-dom'

function Showscard({cardId, cardName, cardImg, cardGen, cardPrem, cardEnd}) {
    return (
        <>
        <section className={`card text-light h-100 shadow-sm ${styles.cardBackg}`}>
            <img src={cardImg} className="card-img-top" alt="Show Poster" />
            
            <div className="card-body d-flex flex-column">
                <h4 className="card-title">{cardName}</h4>
                <p className="card-text">{cardGen.join(', ')}</p>
                <p className='card-text opacity-75 mt-1 mb-2'>{cardPrem} - {cardEnd}</p>
                
                <div className="mt-auto d-flex gap-2">
                    <Link to="/watchlist" className="btn btn-warning flex-grow-1 fw-bold">
                        ADD
                    </Link>
                    <Link to={`/details/${cardId}`} className="btn btn-outline-light flex-grow-1">
                        DETAILS
                    </Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default Showscard
