import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeDisplay from './layouts/HomeDisplay';
import HorizontalDisplay from './layouts/HorizontalDisplay';

const mapStateToProps = state => {
    return (
        { anime: state.anime }
    )
}

class Home extends Component {
    render() {
        return (
            <div>
                <HomeDisplay data={this.props.anime.singleAnime} />
                <div className="container">
                    <HorizontalDisplay data={this.props.anime.topAnime} head="Top Anime" perPage={9} />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home);