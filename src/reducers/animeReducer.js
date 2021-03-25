const initialState = {
    topAnime: [],
    singleAnime: {},
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
    getGenre: {
        anime: []
    },
    getEpisodes: {
        episodes: []
    }
}

const animeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Add':
            return Object.assign({}, state, {
                topAnime: action.payload
            });

        case 'AddSingle':
            return Object.assign({}, state, {
                singleAnime: action.payload
            });

        case 'AddMonday':
            return Object.assign({}, state, {
                monday: action.payload
            });

        case 'AddTuesday':
            return Object.assign({}, state, {
                tuesday: action.payload
            });

        case 'AddWednesday':
            return Object.assign({}, state, {
                wednesday: action.payload
            });

        case 'AddThursday':
            return Object.assign({}, state, {
                thursday: action.payload
            });

        case 'AddFriday':
            return Object.assign({}, state, {
                friday: action.payload
            });

        case 'AddSaturday':
            return Object.assign({}, state, {
                saturday: action.payload
            });

        case 'AddSunday':
            return Object.assign({}, state, {
                sunday: action.payload
            });

        case 'GetGenre':
            return Object.assign({}, state, {
                getGenre: action.payload
            });

        case 'AddEpisodes':
            console.log(action.payload)
            return Object.assign({}, state, {
                getEpisodes: action.payload
            })

        default:
            return state;
    }

}

export default animeReducer;