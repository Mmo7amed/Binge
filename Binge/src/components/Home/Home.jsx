import React from 'react'
import styles from './Home.module.css'

function Home() {
    return (
        <>
        <div className={styles.homeBackg}>
            <div className="container d-flex flex-column justify-content-center align-items-center text-center h-100 flex-grow-1 text-light px-3">
                

                <h1 className="display-4 fw-bold mb-3">
                    Find Your Next <span style={{ color: '#ebc55d' }}>Binge</span>
                </h1>
                <p className="lead opacity-75 mb-5" style={{ maxWidth: '600px', color: '#ebc55d' }}>
                    Search your Favorite TV Shows Now!
                </p>

                <form className="w-100" style={{ maxWidth: '700px' }} onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group input-group-lg shadow-lg">
                        <input type="text" className={`form-control bg-dark text-light border-secondary ${styles.searchInput}`} placeholder="Search for TVshows," aria-label="Search"/>
                        <button className="btn fw-bold px-4 px-md-5" type="submit" style={{ backgroundColor: '#ebc55d', color: '#080808', border: 'none' }}>
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Home
