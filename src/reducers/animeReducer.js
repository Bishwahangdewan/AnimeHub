const initialState = {
    topAnime: [],
    singleAnime: {},
    season: {}
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

        case 'AddSeason':
            console.log(action.payload);

        default:
            return state;
    }

}

export default animeReducer;