import React from 'react';
import SeasonArchiveSearch from './layouts/SeasonArchiveSearch';


function SeasonArchive() {
    return (
        <div>
            <div className="seasonarchive-container">
                <div className="container">
                    <h1>Season <span className="yellow"> Archive</span></h1>
                    <p>List of Previous Years Anime.</p>
                    <div class="text-center"><a href="#Top"><i class="fas fa-chevron-down down-icon"></i></a></div>
                </div>
            </div>
            <div className="container">
                <h1 id="Top" className="section-display-header">Select <span className="yellow">Year</span> and <span className="yellow">Season</span></h1>
                <p className="section-text">The word cour is used to measure the length of an anime series. In general, a single cour has 10 to 14 episodes that run during a three-month period that coincides with the seasons. That’s why one cour belongs to either the Winter, Spring, Summer, or Fall season.</p>
            </div>
            <SeasonArchiveSearch />
        </div>
    )
}

export default SeasonArchive;