import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        addGenre: (action) => dispatch(action)
    }
}

function SingleGenre(props) {

    const getGenreAnime = (id) => {

        const options = {
            method: 'GET',
            url: `https://jikan1.p.rapidapi.com/genre/anime/${id}/1`,
            headers: {
                'x-rapidapi-key': '62a13adc31msh0756315a42bca41p10de5bjsnc2d4dabce892',
                'x-rapidapi-host': 'jikan1.p.rapidapi.com'
            }
        };

        Axios.request(options).then((response) => {
            const action = {
                type: 'GetGenre',
                payload: {
                    genreName: response.data.mal_url.name,
                    anime: response.data.anime
                }
            }

            props.addGenre(action);
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <div>
            <a className="anime-genre-link" onClick={() => getGenreAnime(props.id)}>{props.anime}</a>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(SingleGenre);
