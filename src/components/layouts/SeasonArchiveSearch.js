import React, { useState } from 'react';
import Axios from 'axios';
import ShowSearchResults from '../layouts/ShowSearchResults';


function SeasonArchiveSearch(props) {
    const [visible, setVisible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);
    const [data, setData] = useState({});

    //submit form
    const formSubmit = (e) => {
        e.preventDefault();
        let year = document.querySelector("#year").value;
        let season = document.querySelector("#season").value;

        const options = {
            method: 'GET',
            url: `https://jikan1.p.rapidapi.com/season/${year}/${season}`,
            headers: {
                'x-rapidapi-key': '62a13adc31msh0756315a42bca41p10de5bjsnc2d4dabce892',
                'x-rapidapi-host': 'jikan1.p.rapidapi.com'
            }
        };

        setVisible(true);
        setContentVisible(false);

        Axios.request(options).then(function (response) {
            setVisible(false);
            const searchData = {
                anime: response.data.anime,
                season: response.data.season_name,
                year: response.data.season_year
            }

            setData(searchData);
            setContentVisible(true);

        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <div className="season-archive-search container">
            <form onSubmit={(e) => formSubmit(e)}>
                <label for="year">Select Year : </label>
                <select id="year">
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                </select>
                <label for="season">Select Season : </label>
                <select id="season">
                    <option value="summer">Summer</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                    <option value="fall">Fall</option>
                </select>
                <input type="submit" value="Submit" />
            </form>

            <div className={visible ? 'show' : 'hide'}>
                <div className="spinner">
                </div>
            </div>

            <div className={contentVisible ? 'show' : 'hide'}><ShowSearchResults result={data} /></div>
        </div>
    )
}

export default SeasonArchiveSearch;
