import { Fahrenheit, Celsius, City, WeatherApi, WeatherError } from "../Action/Action";

const initialState = {
    celsiusIs: true,
    city: '',
    api:{},
    error: null

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
                 city: action.payload };

        case WeatherApi:
            return {
                ...state,
                api: action.payload,
                // error: null
            };
        case WeatherError:
            return {
                ...state,
                // api: null,
                error: action.payload
            };

        // ...state,
        // fahrenheitIs: !state.fahrenheitIs

        default:
            return state;
    }
}
