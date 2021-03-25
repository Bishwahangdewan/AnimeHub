import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        anime: state.anime
    }
}

function ShowGenre(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [animePerPage, setAnimePerPage] = useState(20);
    const { genreName, anime } = props.anime.getGenre;

    let indexOfLastAnime = currentPage * animePerPage;
    let indexOfFirstAnime = indexOfLastAnime - animePerPage;

    let currentAnime = anime.slice(indexOfFirstAnime, indexOfLastAnime);

    let renderAnime = null;
    let renderPage = null;

    const pageNumber = [];

    const changeAnime = (num) => {
        setCurrentPage(num);
    }

    for (let i = 1; i <= anime.length / animePerPage; i++) {
        pageNumber.push(i);
    }

    renderPage = (
        <ul className="flex pagination">
            {pageNumber.map(number => {
                return (
                    <a href="#Top"><li key={number} id={number} className={number === currentPage ? 'active' : null} onClick={() => changeAnime(number)}>{number}</li></a>
                )
            })}
        </ul >
    )

    renderAnime = (
        <div className="grid five-columns space-between anime-card-container">
            {
                currentAnime.map(anime => {
                    return (
                        <div key={anime.mal_id} className="genre-anime-card">
                            <div className="image-container">
                                <img src={anime.image_url} />
                            </div>
                            <div class="genre-content">
                                <Link to={{ pathname: '/anime', state: { data: anime } }} className="to-single-anime">{anime.title}</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )


    return (
        <div className="genre-anime">
            {anime.length > 2 ? <div> <h1>Showing Results for {genreName}</h1>
                {renderAnime}
                {renderPage}</div> : ''}

        </div>
    )
}

export default connect(mapStateToProps)(ShowGenre)
