import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HorizontalDisplay(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [animePerPage, setAnimePerPage] = useState(props.perPage);

    let indexOfLastAnime = currentPage * animePerPage;
    let indexOfFirstAnime = indexOfLastAnime - animePerPage;

    let currentAnime = props.data.slice(indexOfFirstAnime, indexOfLastAnime);

    let renderAnime = null;
    let renderPage = null;

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.data.length / animePerPage); i++) {
        pageNumbers.push(i);
    }

    const changeAnime = (num) => {
        setCurrentPage(num);
    }

    renderPage = (
        <ul className="flex pagination">
            {pageNumbers.map(number => {
                return (
                    <a href="#Top"><li key={number} id={number} className={number === currentPage ? 'active' : null} onClick={() => changeAnime(number)}>{number}</li></a>
                )
            })}
        </ul >
    )

    renderAnime = (
        <div className="grid three-columns space-between anime-card-container">
            {
                currentAnime.map(anime => {
                    return (
                        <div key={anime.mal_id} className="anime-card flex">
                            <div className="image-container">
                                <img src={anime.image_url} />
                            </div>
                            <div class="content">
                                <Link to="/" className="to-single-anime">{anime.title}</Link>
                                <p>Airing Date : {anime.start_date ? anime.start_date : "Not Yet Released"}</p>
                                <p>Rank : {anime.rank}</p>
                                <p>Type : {anime.type}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )

    return (
        <div id="Top" className="horizontal-display-container">
            <h2 className="section-display-header">{props.head}</h2>
            {renderAnime}
            {renderPage}
        </div>
    )
}

export default HorizontalDisplay;
