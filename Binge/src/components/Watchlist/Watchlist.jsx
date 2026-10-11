import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { removeShow } from '../../redux/slices/watchlistSlice';

function Watchlist() {

    const navigate = useNavigate();

    const savedShows = useSelector((state) => state.watchlist.shows);
    const dispatch = useDispatch();
    return (
        <>
            <div className="container py-5 min-vh-100">

            <button onClick={() => navigate(-1)} className="btn btn-outline-light mb-4 fw-bold">
                ←
            </button>

            <h2 className="mb-4 fw-bold" style={{color: '#ebc55d'}}>My Watchlist</h2>
            
            {savedShows.length === 0 ? (
                <div className="text-center mt-5">
                    <h4 className="text-light">Your watchlist is empty.</h4>
                    <Link to="/shows" className="btn mt-3 fw-bold" style={{backgroundColor: '#ebc55d'}}>Explore Shows</Link>
                </div>
            ) : (
                <div className="d-flex flex-column gap-4">
                    {savedShows.map((show) => (
                        <div key={show.id} className="card bg-dark text-light border-secondary shadow-sm">
                            <div className="row g-0">
                                <div className="col-md-2 col-4">
                                    <img src={show.image || "https://via.placeholder.com/210x295?text=No+Image"} className="img-fluid rounded-start h-100 object-fit-cover" style={{ minHeight: "150px" }} alt={show.name} />
                                </div>
                                <div className="col-md-10 col-8">
                                    <div className="card-body d-flex flex-column h-100">
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div>
                                                <h4 className="card-title text-warning fw-bold mb-1">{show.name}</h4>
                                                <p className="card-text mb-1 text-secondary">{show.genres?.join(', ')}</p>
                                                <p className="card-text opacity-75 small">{show.premiered || "TBA"}</p>
                                            </div>
                                            
                                            <button 
                                                onClick={() => dispatch(removeShow(show.id))}
                                                className="btn btn-outline-danger btn-sm fw-bold">
                                                Remove
                                            </button>
                                        </div>
                                        
                                        <div className="mt-auto pt-3 border-top border-secondary">
                                            <div className="row g-2 align-items-center">
                                                <div className="col-md-3">
                                                    <select className="form-select form-select-sm bg-secondary text-light border-0 shadow-none">
                                                        <option value="0">Rate this show...</option>
                                                        <option value="10">⭐⭐⭐⭐⭐ Masterpiece</option>
                                                        <option value="8">⭐⭐⭐⭐ Great</option>
                                                        <option value="5">⭐⭐⭐ Average</option>
                                                        <option value="2">⭐⭐ Bad</option>
                                                        <option value="1">⭐ Terrible</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-9">
                                                    <input type="text" className="form-control form-control-sm bg-secondary text-light border-0 shadow-none placeholder-light" placeholder="Add a personal note..." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    )
}

export default Watchlist
