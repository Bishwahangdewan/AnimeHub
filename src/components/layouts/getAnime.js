import React from 'react';

function getAnime(props) {
    const { data } = props.location.state;

    return (
        <div className="anime container">
            <div className="flex">
                <img src={data.image_url} />
                <div>
                    <h1 className='yellow'>{data.title}</h1>
                    <h3>Episodes : <span>{data.episodes ? data.episodes : 'Not Mentioned'}</span></h3>
                    <h3>Made for Kids : <span>{data.kids ? 'Yes' : 'No'}</span></h3>
                    <h3>Score : <span>{data.score ? data.score : 'NA'}</span></h3>
                    <h3>Source : <span>{data.source ? data.source : 'NA'}</span></h3>
                    <h3>Type : <span>{data.type}</span></h3>
                    <h3>Genre : <span>{data.genres ? data.genres.map(each => { return each.name + ' , ' }) : 'Not Mentioned'}</span></h3>
                </div>
            </div>

            <div>
                <h2 className="yellow">Synopsis</h2>
                <p>{data.synopsis ? data.synopsis : 'No Synopsis given'}</p>
            </div>
        </div>
    )
}

export default getAnime;
