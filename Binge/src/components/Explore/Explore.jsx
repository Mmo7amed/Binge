import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Showscard from '../showscard/Showscard';
import { Loader } from 'lucide-react';

function Explore() {

    const [shows, setShows] = useState([]);
    const [searchQuery, setSearchQuery] = useState(``);
    const [isLoading, setIsLoading] = useState(true);

    const getShows = async (searchTerm) => {
        try {
            setIsLoading(true);
            if(searchTerm === "")
            {
                const response = await axios.get(`https://api.tvmaze.com/shows`);
                const formatteedData = response.data.map(item => ({show: item}))
                setShows(formatteedData);
                console.log(formatteedData);
            }else{
                const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
                setShows(response.data);
                console.log(response.data);
            }
           
        } catch (error) {
            console.error(`Error: ${error}`);
            setIsLoading(false);
        }finally{
            setIsLoading(false);
        }
    }

        useEffect(() =>{
        getShows("");
    },[])

    const handleSearch = (e) => {
        const enteredValue = e.target.value;
        setSearchQuery(enteredValue);
        getShows(enteredValue);
    }

    return (
        <>
            <div className="container py-5">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h2 className="text-light mb-4">Explore TV Shows</h2>
                        
                        <div className="w-50 mx-auto">
                            <input type="text" className="form-control bg-dark text-light border-secondary shadow-none" placeholder="Search for a show..." value={searchQuery} onChange={handleSearch} />
                        </div>
                    </div>
                </div>

                <div className="row g-4">
                    {
                        isLoading ? <Loader />
                        : shows?.length > 0 ? shows.map((item) => (
                        <div key={item.show.id} className="col-12 col-sm-6 col-md-4 col-lg-3 text-light text-center">
                            <Showscard />
                        </div> 
                        )) : <h1 className='text-center text-light w-100'>Data Not Found!</h1> }
                </div>
            </div>
        </>
    )
}

export default Explore;