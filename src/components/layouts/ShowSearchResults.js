import React from 'react';
import HorizontalDisplay from './HorizontalDisplay';

function ShowSearchResults(props) {
    const { anime, season, year } = props.result;
    return (
        <div className="search-container">
            <h1 class="search-header">Showing Results for Anime : {season} {year}</h1>
            <HorizontalDisplay data={anime ? anime : []} head="" perPage={20} />
        </div>
    )
}

export default ShowSearchResults;