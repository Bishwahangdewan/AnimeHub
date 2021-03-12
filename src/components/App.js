import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Axios from 'axios';
import { connect } from 'react-redux';
import Header from './layouts/Header';
import TopAnime from './TopAnime';
import SeasonArchive from './SeasonArchive';
import Schedule from './Schedule';
import SeasonalAnime from './SeasonalAnime';
import Footer from './layouts/Footer';
const mapDispatchToProps = dispatch => {
    return {
        addAnime: (action) => dispatch(action),
        addSingleAnime: (action2) => dispatch(action2)
    }
}

class App extends Component {
    componentDidMount() {
        //get Top Anime List
        const options = {
            method: 'GET',
            url: 'https://jikan1.p.rapidapi.com/top/anime/1/upcoming',
            headers: {
                'x-rapidapi-key': '62a13adc31msh0756315a42bca41p10de5bjsnc2d4dabce892',
                'x-rapidapi-host': 'jikan1.p.rapidapi.com'
            }
        };

        const getSeasonArchive = {
            method: 'GET',
            url: 'https://jikan1.p.rapidapi.com/season/archive',
            headers: {
                'x-rapidapi-key': '62a13adc31msh0756315a42bca41p10de5bjsnc2d4dabce892',
                'x-rapidapi-host': 'jikan1.p.rapidapi.com'
            }
        };


        Axios.request(options).then((response) => {
            const action = {
                type: 'Add',
                payload: response.data.top
            }

            const action2 = {
                type: 'AddSingle',
                payload: response.data.top[Math.floor(Math.random() * response.data.top.length)]
            }

            this.props.addAnime(action);
            this.props.addSingleAnime(action2)

        }).catch((error) => {
            console.error(error);
        });


        Axios.request(getSeasonArchive).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Route path="/" exact component={Home} />
                    <Route path="/topAnime" component={TopAnime} />
                    <Route path="/seasonArchive" component={SeasonArchive} />
                    <Route path="/schedule" component={Schedule} />
                    <Route path="/seasonalAnime" component={SeasonalAnime} />
                    <Footer />
                </BrowserRouter>

            </div>
        )
    }
}


export default connect(null, mapDispatchToProps)(App);