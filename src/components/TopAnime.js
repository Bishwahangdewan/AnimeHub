import React from 'react';
import HorizontalDisplay from './layouts/HorizontalDisplay';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { anime: state.anime }
}

function TopAnime(props) {
    return (
        <div>
            <div className="topanime-container">
                <div className="container">
                    <h1>Top 50 <span className="yellow"> Anime</span></h1>
                    <p>List of Top 50 Anime ranked by MyAnimeList.</p>
                    <div class="text-center"><a href="#Top"><i class="fas fa-chevron-down down-icon"></i></a></div>
                </div>
            </div>
            <div className="container">
                <HorizontalDisplay data={props.anime.topAnime} head="Top Anime" perPage={20} />
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(TopAnime);
