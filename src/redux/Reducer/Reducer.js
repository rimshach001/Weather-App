import { CurIndex, Celsius, City, WeatherApi, WeatherError, FavCityName, DelFavCity, Fav, ClickOnScreen, SwipeList } from "../Action/Action";
const initialState = {
    celsiusIs: true,
    city: '',
    api: {},
    error: null,
    favCities: [],
    favorite: false,
    click: false,
    swipe: true,
    index:0
    // fahrenheitIs:false
}

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case Celsius:
            return {
                ...state,
                celsiusIs: !state.celsiusIs,
            };
        case City:
            return {
                ...state,
                city: action.payload
            };
        case WeatherApi:
            return {
                ...state,
                api: action.payload,
            };
        case WeatherError:
            return {
                ...state,
                error: action.payload
            };
        case FavCityName:
            const newData = [...state.favCities, action.payload];
            return {
                ...state,
                favCities: newData,
            };

        case DelFavCity:
            const updatedFavCities = [...state.favCities];
            updatedFavCities.splice(action.payload, 1);
            return {
                ...state,
                favCities: updatedFavCities,
            };

        case Fav:
            return {
                ...state,
                favorite: action.payload,
            };
        case ClickOnScreen:
            return {
                ...state,
                click: action.payload,
            };
        case SwipeList:
            return {
                ...state,
                swipe: action.payload,
            };
            case CurIndex:
            return {
                ...state,
                index: action.payload,
            };
        default:
            return state;
    }
}
