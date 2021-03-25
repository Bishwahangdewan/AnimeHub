import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Axios from 'axios';
import { connect } from 'react-redux';
import Header from './layouts/Header';
import TopAnime from './TopAnime';
import SeasonArchive from './SeasonArchive';
import Schedule from './Schedule';
import AnimeGenre from './AnimeGenre';
import Footer from './layouts/Footer';
import getAnime from './layouts/getAnime';

const mapDispatchToProps = dispatch => {
    return {
        addAnime: (action) => dispatch(action),
        addSingleAnime: (action2) => dispatch(action2),
        addMonday: (mondayaction) => dispatch(mondayaction),
        addTuesday: (tuesdayaction) => dispatch(tuesdayaction),
        addWednesday: (wednesdayaction) => dispatch(wednesdayaction),
        addThursday: (thursdayaction) => dispatch(thursdayaction),
        addFriday: (fridayaction) => dispatch(fridayaction),
        addSaturday: (saturdayaction) => dispatch(saturdayaction),
        addSunday: (sundayaction) => dispatch(sundayaction)
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
            this.props.addSingleAnime(action2);

        }).catch((error) => {
            console.error(error);
        });

        //get mondayAnime
        const monday = {
            method: 'GET',
            url: 'https://jikan1.p.rapidapi.com/schedule/monday',
            headers: {
                'x-rapidapi-key': '62a13adc31msh0756315a42bca41p10de5bjsnc2d4dabce892',
                'x-rapidapi-host': 'jikan1.p.rapidapi.com'
            }
        };

        Axios.request(monday).then((response) => {
            const mondayaction = {
                type: 'AddMonday',
                payload: response.data.monday
            }

            this.props.addMonday(mondayaction);

        }).catch(function (error) {
            console.error(error);
        });


        //get tuesdayAnime
        const tuesday = {
            method: 'GET',
            url: 'https://jikan1.p.rapidapi.com/schedule/tuesday',
            headers: {
                'x-rapidapi-key': '62a13adc31msh0756315a42bca41p10de5bjsnc2d4dabce892',
                'x-rapidapi-host': 'jikan1.p.rapidapi.com'
            }
        };

        Axios.request(tuesday).then((response) => {
            const tuesdayaction = {
                type: 'AddTuesday',
                payload: response.data.tuesday
            }

            this.props.addTuesday(tuesdayaction);

        }).catch(function (error) {
            console.error(error);
        });


        //get wednesdayAnime
        const wednesday = {
            method: 'GET',
            url: 'https://jikan1.p.rapidapi.com/schedule/wednesday',
            headers: {
                'x-rapidapi-key': '62a13adc31msh0756315a42bca41p10de5bjsnc2d4dabce892',
                'x-rapidapi-host': 'jikan1.p.rapidapi.com'
            }
        };

        Axios.request(wednesday).then((response) => {
            const wednesdayaction = {
                type: 'AddWednesday',
                payload: response.data.wednesday
            }

            this.props.addWednesday(wednesdayaction);

        }).catch(function (error) {
            console.error(error);
        });


        //get thursdayAnime
        const thursday = {
            method: 'GET',
            url: 'https://jikan1.p.rapidapi.com/schedule/thursday',
            headers: {
                'x-rapidapi-key': '62a13adc31msh0756315a42bca41p10de5bjsnc2d4dabce892',
                'x-rapidapi-host': 'jikan1.p.rapidapi.com'
            }
        };

        Axios.request(thursday).then((response) => {
            const thursdayaction = {
                type: 'AddThursday',
                payload: response.data.thursday
            }

            this.props.addThursday(thursdayaction);

        }).catch(function (error) {
            console.error(error);
        });


        //get fridayAnime
        const friday = {
            method: 'GET',
            url: 'https://jikan1.p.rapidapi.com/schedule/friday',
            headers: {
                'x-rapidapi-key': '62a13adc31msh0756315a42bca41p10de5bjsnc2d4dabce892',
                'x-rapidapi-host': 'jikan1.p.rapidapi.com'
            }
        };

        Axios.request(friday).then((response) => {
            const fridayaction = {
                type: 'AddFriday',
                payload: response.data.friday
            }

            this.props.addFriday(fridayaction);

        }).catch(function (error) {
            console.error(error);
        });


        //get saturdayAnime
        const saturday = {
            method: 'GET',
            url: 'https://jikan1.p.rapidapi.com/schedule/saturday',
            headers: {
                'x-rapidapi-key': '62a13adc31msh0756315a42bca41p10de5bjsnc2d4dabce892',
                'x-rapidapi-host': 'jikan1.p.rapidapi.com'
            }
        };

        Axios.request(saturday).then((response) => {
            const saturdayaction = {
                type: 'AddSaturday',
                payload: response.data.saturday
            }

            this.props.addSaturday(saturdayaction);

        }).catch(function (error) {
            console.error(error);
        });


        //get sundayAnime
        const sunday = {
            method: 'GET',
            url: 'https://jikan1.p.rapidapi.com/schedule/sunday',
            headers: {
                'x-rapidapi-key': '62a13adc31msh0756315a42bca41p10de5bjsnc2d4dabce892',
                'x-rapidapi-host': 'jikan1.p.rapidapi.com'
            }
        };

        Axios.request(sunday).then((response) => {
            const sundayaction = {
                type: 'AddSunday',
                payload: response.data.sunday
            }

            this.props.addSunday(sundayaction);

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
                    <Route path="/animeGenre" component={AnimeGenre} />
                    <Route path="/anime" component={getAnime} />
                    <Footer />
                </BrowserRouter>

            </div>
        )
    }
}


export default connect(null, mapDispatchToProps)(App);