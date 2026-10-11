import React from 'react'
import styles from './Showscard.module.css'
import { Link } from 'react-router-dom'
import { addShow } from '../../redux/slices/watchlistSlice'
import { useDispatch, useSelector } from 'react-redux'

function Showscard({cardId, cardName, cardImg, cardGen, cardPrem, cardEnd, cardRating}) {

    const dispatch = useDispatch();
    const savedShows = useSelector((state) => state.watchlist.shows || []);
    const isSaved = savedShows.some((show) => show.id === cardId);

    const handleAdd = () => {
        const showData = {
            id: cardId,
            name: cardName,
            image: cardImg,
            genres: cardGen,
            premiered: cardPrem,
            ended: cardEnd,
            rating: cardRating,
            userRating: 0, 
            userNote: ""
        }
        dispatch(addShow(showData));
    };

    return (
        <>
            <section className={`card text-light h-100 shadow-sm ${styles.cardBackg}`}>
                <img src={cardImg} className="card-img-top" alt="Show Poster" />
                
                <div className="card-body d-flex flex-column">
                    <h4 className="card-title">{cardName}</h4>

                    <h6 className="text-warning mb-2 fw-bold">
                        ⭐ {cardRating ? cardRating : 'N/A'}
                    </h6>

                    <p className="card-text">{cardGen?.join(', ') || 'No genres'}</p>
                    
                    <p className='card-text opacity-75 mt-1 mb-2'>
                        {cardPrem || 'N/A'} - {cardEnd || 'Present'}
                    </p>
                    
                    <div className="mt-auto d-flex gap-2">
                    {
                        isSaved ? (
                            <Link to="/watchlist" className="btn btn-success flex-grow-1 fw-bold">
                                VIEW
                            </Link>
                        ) : (
                            <button onClick={handleAdd} className="btn btn-warning flex-grow-1 fw-bold" style={{backgroundColor: '#ebc55d'}}>
                                ADD
                            </button>
                        )
                    }
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