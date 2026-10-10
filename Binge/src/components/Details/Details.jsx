import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Loader } from 'lucide-react';
import styles from './Details.module.css';

function Details() {
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    
    const [show, setShow] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getShowDetails = async () => {
            try {
                const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
                setShow(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

    useEffect(() => {
        
        getShowDetails();

    }, [id]);

    const cleanSummary = show?.summary?.replace(/<[^>]+>/g, '') || `No summary provided.`

    return (
        <div className={styles.detailsBackg}>

            {
                isLoading ? (
                    <div className="d-flex justify-content-center pt-5">
                        <Loader />
                    </div> 
                ) : (
                    <div className="container bg-dark text-light p-4 p-md-5 rounded-4 shadow-lg border border-secondary">
                        <div className="row gap-4 gap-md-0">
                            
                            <div className="col-md-4 text-center">
                                <img src={show.image?.original || show.image?.medium || "https://via.placeholder.com/400x600?text=No+Image"} alt={show.name} className="img-fluid rounded shadow w-100"/>
                            </div>
                            
                            <div className="col-md-8 d-flex flex-column justify-content-center">
                                <h1 className="display-4 fw-bold text-warning">{show.name}</h1>
                                <p className="lead fs-4 mb-4">{show.genres?.join(', ')}</p>
                                
                                <div className="d-flex flex-wrap gap-4 mb-4 bg-secondary bg-opacity-25 p-3 rounded">
                                    <span><strong> Rating:</strong> {show.rating.average}/10</span>
                                    <span><strong> Premiered:</strong> {show.premiered}</span>
                                    <span><strong> Status:</strong> {show.status}</span>
                                </div>

                                <h4 className="border-bottom border-secondary pb-2 mb-3">Plot Summary</h4>
                                <p className="fs-5 text-secondary" style={{ lineHeight: "1.8" }}>{cleanSummary}</p>
                                
                                <div className="mt-4 d-flex gap-3">
                                    <button className="btn btn-warning btn-lg fw-bold px-4 shadow">
                                        Add to Watchlist
                                    </button>
                                    <button onClick={() => navigate(-1)} className="btn btn-outline-light btn-lg px-4">
                                        Go Back
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Details;