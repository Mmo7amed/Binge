import React, { useState } from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";

const featuredShows = [
  {
    id: 169,
    name: "Breaking Bad",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/501/1253519.jpg",
  },
  {
    id: 29,
    name: "Vikings",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/286/715906.jpg",
  },
  {
    id: 161,
    name: "Dexter",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/498/1246067.jpg",
  },
  {
    id: 1871,
    name: "Mr. Robot",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/211/528026.jpg",
  },
  {
    id: 123,
    name: "Lost",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/1389.jpg",
  },
];

function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/shows", { state: { searchTerm: query } });
  };

  return (
    <div className={styles.homeBackg}>
      <div className="container h-100 px-4">
        <div className="row h-100 align-items-center">
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-3 text-light">
              Find Your Next <span style={{ color: "#ebc55d" }}>Binge</span>
            </h1>
            <p
              className="lead opacity-75 mb-5 text-light mx-auto mx-lg-0"
              style={{ maxWidth: "500px" }}
            >
              Search your favorite TV Shows, explore trending hits, and build
              your ultimate watchlist.
            </p>

            <form
              className="w-100 mx-auto mx-lg-0"
              style={{ maxWidth: "600px" }}
              onSubmit={handleSearch}
            >
              <div className="input-group input-group-lg shadow-lg">
                <input
                  type="text"
                  className={`form-control bg-dark text-light border-secondary ${styles.searchInput}`}
                  placeholder="Search for TV shows..."
                  aria-label="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  className="btn fw-bold px-4 px-md-5"
                  type="submit"
                  style={{
                    backgroundColor: "#ebc55d",
                    color: "#080808",
                    border: "none",
                  }}
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="col-lg-6">
            <div className={styles.showcaseGrid}>
              {featuredShows.map((show, index) => (
                <div
                  key={show.id}
                  className={`${styles.showcaseCard} ${styles[`card${index}`] || ""}`}
                  onClick={() => navigate(`/details/${show.id}`)}
                >
                  <img src={show.image} alt={show.name} />
                  <div className={styles.overlay}>
                    <h5
                      className="text-light fw-bold m-0"
                      style={{ fontSize: index === 0 ? "1.5rem" : "1rem" }}
                    >
                      {show.name}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>



          <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5 border-top border-secondary">
          
        <div className="col d-flex flex-column align-items-start gap-2">
            <h2 className="fw-bold text-light display-6 mb-3">
              Why use <span style={{ color: '#ebc55d' }}>Bingo?</span>
            </h2>
            <p className="text-light opacity-75 mb-4 fs-5">
              What are you waiting for? Start adding your favorite TV Shows <br /> to your personal watchlist right now!
            </p>
            <Link to={'/watchlist'} className="btn fw-bold px-4 py-2" style={{ backgroundColor: '#ebc55d', color: '#080808' }}>
              Visit Your Watchlist
            </Link>
          </div>

          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center mb-2" style={{ color: '#ebc55d' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-light">
                  Effortless Discovery
                </h4>
                <p className="text-white opacity-75 pt-1" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Search through a massive database of television shows instantly. Explore everything from trending global hits to nostalgic classics, complete with official posters, genres, and accurate release dates.
                </p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center mb-2" style={{ color: '#ebc55d' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z"/>
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-light">
                  Persistent Watchlist
                </h4>
                <p className="text-white opacity-75 pt-1" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Never lose track of what you are currently watching or planning to start. Add shows to a dedicated Watchlist that saves directly to your device, surviving every refresh and tab close.
                </p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center mb-2" style={{ color: '#ebc55d' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-light">
                  Custom Notes
                </h4>
                <p className="text-white opacity-75 pt-1" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Keep your streaming life organized by tracking your exact progress. Assign your own star ratings to shows you have finished and leave personal text notes to remind yourself where you left off.
                </p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center mb-2" style={{ color: '#ebc55d' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"/>
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-light">
                  Cinematic Interface
                </h4>
                <p className="text-white opacity-75 pt-1" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Enjoy a sleek, ad-free browsing experience built for modern screens. With its animated backgrounds and responsive grid, the app looks and feels like a top-tier premium streaming platform.
                </p>
              </div>
            </div>
          </div>



          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
