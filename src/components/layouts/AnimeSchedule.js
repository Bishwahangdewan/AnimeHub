import React from 'react';
import { connect } from 'react-redux';
import HorizontalDisplay from './HorizontalDisplay';

const mapStateToProps = state => {
    return { anime: state.anime }
}

function AnimeSchedule(props) {
    const day = props.schedule;
    let anime = props.anime[day];
    let cap = day.charAt(0).toUpperCase() + day.slice(1)
    console.log(cap)

    return (
        <div>
            <HorizontalDisplay data={anime} head={'Anime on ' + cap} perPage={10} />
        </div>
    )
}

export default connect(mapStateToProps)(AnimeSchedule)