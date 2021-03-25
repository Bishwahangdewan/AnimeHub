import React from 'react';
import { Link } from 'react-router-dom';

function HomeDisplay(props) {
    //get data from props
    const { image_url, title, type, start_date, url, rank } = props.data;

    return (
        <div className="home-display-container">
            <div className="fixer"></div>
            <div className="container flex space-between">
                <div className="content">
                    <Link to={{ pathname: '/anime', state: { data: props.data } }} className="anime-main-title yellow">{title}</Link>
                    <p>Date Aired / To be aired : {start_date}</p>
                    <p>Type : {type}</p>
                    <p>My Anime List Rank : {rank}</p>
                    <a href={url} className="btn1">Visit My Anime List</a>
                </div>
                <img src={image_url} alt="Anime recommended" />
            </div>

        </div>
    )
}

export default HomeDisplay;
